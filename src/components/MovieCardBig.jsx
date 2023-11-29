import React from 'react';
import { FaHeart, FaRegEye, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const IMAGE_BASE_URL = import.meta.env.VITE_BASE_IMG_URL;

const MovieCardBig = ({ item, saveShow, like, type }) => {
  const url = IMAGE_BASE_URL + (item.backdrop_path || item.profile_path);
  return (
    <div className="w-[250px] sm:w-[300px] md:w-[420px] lg:w-[500px] inline-block  relative p-4  hover:z-20">
      <img
        className=" h-[210px] sm:h-[250px] md:h-[290px] lg:h-[330px] object-cover block rounded-md"
        src={
          (item.backdrop_path || item.profile_path) === null
            ? `https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1380&t=st=1701186649~exp=1701187249~hmac=038c375ff17929c86548c09c81a80498fe563f3be32e45f61896aa398627df31`
            : url
        }
        alt={item.title || item.name}
      />
      <div className="absolute top-0 left-0 w-full h-full rounded-md hover:bg-black/90 opacity-0 hover:opacity-100 text-white">
        <div className='className="whitespace-normal  flex justify-between flex-col h-full items-center "'>
          <p
            onClick={saveShow}
            className="absolute top-6 left-6 z-50 cursor-pointer">
            {like ? (
              <FaHeart size={24} title="Delete From Wishlist" />
            ) : (
              <FaRegHeart size={24} title="Add to Wishlist" />
            )}
          </p>
          <div></div>
          <Link to={`/details/${type}/${item.id}`} className="cursor-pointer">
            <FaRegEye size={40} />
          </Link>
          <p className="whitespace-normal text-xs md:text-sm font-bold  py-5 text-center bg-black/90 w-full">
            {item.title || item.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCardBig;
