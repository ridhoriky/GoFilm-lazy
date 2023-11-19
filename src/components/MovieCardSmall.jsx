import React from 'react';
import { FaHeart, FaPlayCircle, FaRegHeart } from 'react-icons/fa';
const IMAGE_BASE_URL = import.meta.env.VITE_BASE_IMG_URL;

const MovieCardSmall = ({ item, saveShow, like, rowID }) => {
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] my-5 inline-block cursor-pointer relative p-2  hover:z-20 ">
      <img
        className="w-full h-[190px] sm:h-[230px] md:h-[340px] lg:h-[400px] object-cover block rounded-md"
        src={IMAGE_BASE_URL + (item.poster_path || item.profile_path)}
        alt={item.title || item.name}
      />
      <div className="absolute top-0 left-0 w-full h-full rounded-md hover:bg-black/90 opacity-0 hover:opacity-100 text-white">
        <div className='className="whitespace-normal  flex justify-between flex-col h-full items-center '>
          <p onClick={saveShow} className="absolute top-4 left-4 z-50">
            {like ? (
              <FaHeart size={24} title="Delete From Wishlist" />
            ) : (
              <FaRegHeart size={24} title="Add to Wishlist" />
            )}
          </p>
          <div></div>
          {rowID === 6 ? <div></div> : <FaPlayCircle size={40} />}
          <p className="whitespace-normal text-xs md:text-sm font-bold py-3 text-center bg-black/90 w-full">
            {item.title || item.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCardSmall;
