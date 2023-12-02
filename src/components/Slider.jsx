import React, { useState } from 'react';
import { db } from '../sevices/Firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { UserAuth } from '../context/AuthContext';
import { FaHeart, FaRegEye, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLike } from '../context/LikeContext';
const IMAGE_BASE_URL = import.meta.env.VITE_BASE_IMG_URL;

const MovieHeroDetails = ({ movie, type }) => {
  const { isLiked, toggleLike } = useLike();
  const [saved, setSaved] = useState(false);

  const { user } = UserAuth();
  const movieID = user?.email ? doc(db, 'users', user.email) : null;

  const saveShow = async () => {
    if (user?.email) {
      toggleLike(movie.id);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title || movie.name,
          img: movie.poster_path || movie.profile_path,
          type: type,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  const deleteShow = async () => {
    if (user?.email && movieID) {
      toggleLike(details.id);
      await updateDoc(movieID, {
        savedShows: (details?.savedShows || []).filter(
          (show) => show.id !== details.id
        ),
      });
    }
  };

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <div className="w-full relative">
      <div className=" absolute z-10 grid place-items-center left-0 right-0 md:block md:ml-[10%] mt-36">
        <img
          className="w-[220px] h-[300px] md:w-[330px] md:h-[440px] object-cover rounded-md cursor-pointer"
          src={IMAGE_BASE_URL + movie.poster_path}
          alt={movie.title || movie.name}
        />
        <h1 className="text-2xl md:text-4xl my-4">
          {movie.title || movie.name}
        </h1>
        <div className="flex items-center justify-start mb-4">
          <button className="relative group text-base border overflow-hidden w-[70px] h-11 py-2 px-4 mr-2 rounded-md bg-white text-[#15191e] ">
            <span className="absolute left-4 top-[9px] group-hover:left-20 duration-500">
              View
            </span>
            <Link
              to={`/details/${type}/${movie.id}`}
              className="absolute mx-auto top-[6px]  right-0 -left-10 group-hover:left-5 ease-in-out duration-500">
              <FaRegEye size={28} />
            </Link>
          </button>
          <p className=" z-50 cursor-pointer ">
            {isLiked(movie.id) ? (
              <span
                onClick={deleteShow}
                className="flex items-center justify-center w-fit rounded-md gap-2 border-2 p-2 hover:text-black hover:bg-white duration-300 ease-in-out ">
                <FaHeart size={24} title="Delete From Wishlist" /> Delete From
                Wishlist
              </span>
            ) : (
              <span
                onClick={saveShow}
                className="flex items-center justify-center w-fit rounded-md gap-2 border-2 p-2 hover:text-black hover:bg-white duration-300 ease-in-out ">
                <FaRegHeart size={24} title="Add to Wishlist" /> Add to Wishlist
              </span>
            )}
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Released: {movie.release_date || movie.first_air_date}
        </p>
        <p className="hidden md:block text-center md:text-start w-[70%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[30%] text-gray-200">
          {truncateString(movie.overview, 150)}
        </p>
        <p className="md:hidden text-center md:text-start w-[70%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[30%] text-gray-200">
          {truncateString(movie.overview, 80)}
        </p>
      </div>
      <img
        className="w-full h-[100vh] object-cover object-top opacity-20"
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt={movie.title || movie.name}
      />
    </div>
  );
};

export default MovieHeroDetails;
