import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import MovieCard from './MovieCard';

const Row = ({ rowID, title, fetchURL, type }) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchURL().then((result) => {
      setMovieList(result);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 550;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 550;
  };

  return (
    <div className="md:mx-[10%]">
      <h1 className="text-2xl mt-4 md:mt-10 w-full  pl-4">{title}</h1>
      <div className="relative flex items-center group">
        <button
          onClick={slideLeft}
          className="bg-[#15191e]  left-0 rounded-md absolute p-3  cursor-pointer z-30 hidden group-hover:block group-hover/item:opacity-100 ease-in-out duration-500  hover:text-[#15191e]  hover:bg-white">
          <FaArrowLeft size={18} />
        </button>
        <div
          id={'slider' + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar hover:scrollbar relative my-2 md:my-5">
          {movieList.map((item, id) => (
            <MovieCard key={id} rowID={rowID} item={item} type={type} />
          ))}
        </div>
        <button
          onClick={slideRight}
          className="bg-[#15191e]  right-0 rounded-md absolute p-3  cursor-pointer z-30 hidden group-hover:block group-hover/item:opacity-100 ease-in-out duration-500  hover:text-[#15191e]  hover:bg-white">
          <FaArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Row;
