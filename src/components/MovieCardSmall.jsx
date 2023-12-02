import React from 'react';
import { FaHeart, FaRegEye, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const IMAGE_BASE_URL = import.meta.env.VITE_BASE_IMG_URL;

const MovieCardSmall = ({ item, saveShow, isLiked, deleteShow, type }) => {
  const url = IMAGE_BASE_URL + (item.poster_path || item.profile_path);
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] my-2 md:my-5 inline-block  relative px-2  hover:z-20 ">
      <img
        className="w-full h-[190px] sm:h-[230px] md:h-[340px] lg:h-[400px] object-cover block rounded-md"
        src={
          item?.poster_path === null || item.profile_path === null
            ? `https://img.freepik.com/free-vector/coming-soon-banner-with-focus-lights_1017-33739.jpg?size=626&ext=jpg&ga=GA1.1.492795408.1700300440&semt=ais`
            : url
        }
        alt={item.title || item.name}
      />
      <div className="absolute top-0 left-0 w-full h-full rounded-md hover:bg-black/90 opacity-0 hover:opacity-100 text-white">
        <div className='className="whitespace-normal  flex justify-between flex-col h-full items-center '>
          <p className="absolute top-4 left-4 z-50 cursor-pointer">
            {isLiked(item.id) ? (
              <FaHeart
                onClick={deleteShow}
                size={24}
                title="Delete From Wishlist"
              />
            ) : (
              <FaRegHeart
                onClick={saveShow}
                size={24}
                title="Add to Wishlist"
              />
            )}
          </p>
          <div></div>
          <Link to={`/details/${type}/${item.id}`} className="cursor-pointer">
            <FaRegEye size={40} />
          </Link>
          <p className="whitespace-normal text-xs md:text-sm font-bold py-3 text-center bg-black/90 w-full">
            {item.title || item.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCardSmall;
