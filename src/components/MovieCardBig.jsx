import React from 'react';
import { FaHeart, FaPlayCircle, FaRegHeart } from 'react-icons/fa';
const IMAGE_BASE_URL = import.meta.env.VITE_BASE_IMG_URL;

const MovieCardBig = ({ item, saveShow, like }) => {
  return (
    <div className="w-[250px] sm:w-[300px] md:w-[420px] lg:w-[500px] inline-block cursor-pointer relative p-4  hover:z-20">
      <img
        className=" h-[210px] sm:h-[250px] md:h-[290px] lg:h-[330px] object-cover block rounded-md"
        src={IMAGE_BASE_URL + (item.backdrop_path || item.profile_path)}
        alt={item.title || item.name}
      />
      <div className="absolute top-0 left-0 w-full h-full rounded-md hover:bg-black/90 opacity-0 hover:opacity-100 text-white">
        <div className='className="whitespace-normal  flex justify-between flex-col h-full items-center "'>
          <p onClick={saveShow} className="absolute top-6 left-6 z-50">
            {like ? (
              <FaHeart size={24} title="Delete From Wishlist" />
            ) : (
              <FaRegHeart size={24} title="Add to Wishlist" />
            )}
          </p>
          <div></div>
          <FaPlayCircle size={40} />
          <p className="whitespace-normal text-xs md:text-sm font-bold  py-5 text-center bg-black/90 w-full">
            {item.title || item.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCardBig;
