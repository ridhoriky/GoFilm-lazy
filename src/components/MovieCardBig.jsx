import React from 'react';
import { FaHeart, FaRegEye, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const IMAGE_BASE_URL_LG = import.meta.env.VITE_BASE_IMG_URL_LG;

const MovieCardBig = ({ item, saveShow, isLiked, deleteShow, type }) => {
  const url = IMAGE_BASE_URL_LG + (item.backdrop_path || item.profile_path);
  return (
    <div className=" inline-block  relative p-2 md:p-2  hover:z-20">
      <img
        className="w-500 h-auto  object-cover block rounded-md"
        src={
          (item.backdrop_path || item.profile_path) === null
            ? `https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1380&t=st=1701186649~exp=1701187249~hmac=038c375ff17929c86548c09c81a80498fe563f3be32e45f61896aa398627df31`
            : url
        }
        alt={item.title || item.name}
      />
      <div className="absolute top-0 left-0 w-full h-full rounded-md hover:bg-black/90 opacity-0 hover:opacity-100 text-white">
        <div className='className="whitespace-normal  flex justify-between flex-col h-full items-center "'>
          <p className="absolute top-6 left-6 z-50 cursor-pointer">
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
          <p className="whitespace-normal text-xs md:text-sm font-bold  py-5 text-center bg-black/90 w-full">
            {item.title || item.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCardBig;
