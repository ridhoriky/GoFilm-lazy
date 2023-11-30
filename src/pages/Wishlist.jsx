import React, { useState, useEffect } from 'react';
const IMAGE_BASE_URL = import.meta.env.VITE_BASE_IMG_URL;
import { UserAuth } from '../context/AuthContext';
import { db } from '../sevices/Firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { FaRegEye, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLike } from '../context/LikeContext';

const Wishlist = () => {
  const [movies, setMovies] = useState([]);
  const { toggleLike, isLiked } = useLike();
  const { user } = UserAuth();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      doc(db, 'users', `${user?.email}`),
      (doc) => {
        setMovies(doc.data()?.savedShows || []);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });

      toggleLike(passedID, false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="  p-4 md:px-[10%] px-auto">
      <h2 className="text-white font-bold mt-20 text-center md:text-3xl ">
        Wishlist
      </h2>
      <div className="  w-full flex flex-wrap  items-start justify-center  group ">
        {movies.map((item) => (
          <div
            key={item.id}
            className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 my-4 ">
            <img
              className="w-full h-[190px] sm:h-[230px] md:h-[340px] lg:h-[400px] block"
              src={IMAGE_BASE_URL + item?.img}
              alt={item?.title}
            />

            <div className="absolute top-0 left-0 w-full h-full rounded-md hover:bg-black/90 opacity-0 hover:opacity-100 text-white">
              <div className='className="whitespace-normal  flex justify-between flex-col h-full items-center "'>
                <p
                  onClick={() => deleteShow(item.id)}
                  className="absolute text-gray-300 top-4 right-4">
                  <FaTimes size={24} title="Delete From Wishlist" />
                </p>
                <div></div>
                <Link
                  to={`/details/${item.type}/${item.id}`}
                  className="cursor-pointer">
                  <FaRegEye size={40} />
                </Link>
                <p className="whitespace-normal text-xs md:text-sm font-bold  py-5 text-center bg-black/90 w-full">
                  {item.title || item.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
