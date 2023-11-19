import React from 'react';
import { FaPlay } from 'react-icons/fa';
const IMAGE_BASE_URL = import.meta.env.VITE_BASE_IMG_URL;

const MovieHeroDetails = ({ movie }) => {
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
          className="w-[330px] h-[440px] object-cover rounded-md cursor-pointer"
          src={IMAGE_BASE_URL + movie.poster_path}
          alt={movie.title || movie.name}
        />
        <h1 className="text-2xl md:text-4xl my-4">
          {movie.title || movie.name}
        </h1>
        <div className="flex items-center justify-start mb-4">
          <button className="relative group text-base border overflow-hidden w-[70px]  py-2 px-4 mr-2 rounded-md bg-white text-gray-900  duration-1000">
            <span className="visible group-hover:invisible ease-in ">Play</span>
            <span className="absolute m-auto  right-0 -left-10 group-hover:left-6 ease-in-out duration-500">
              <FaPlay size={22} />
            </span>
          </button>
          <button className="text-base border py-2 px-4 rounded-md   hover:bg-white hover:text-gray-900 duration-500">
            Watch Later
          </button>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Released: {movie.release_date || movie.first_air_date}
        </p>
        <p className="text-center md:text-start w-[70%] md:max-w-[70%] lg:max-w-[50%] xl:max-w-[30%] text-gray-200">
          {truncateString(movie.overview, 150)}
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
