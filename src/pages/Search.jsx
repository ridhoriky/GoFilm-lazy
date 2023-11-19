import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import GlobalAPI from '../sevices/GlobalAPI';
import MovieCard from '../components/MovieCard';

const Search = () => {
  const [movieList, setMovieList] = useState([]);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await GlobalAPI.searchMovie(q);
      console.log(query);
      return setMovieList(query);
    }
  };

  return (
    <>
      <div className="w-full px-4 pt-40 pb-14 z-50 ">
        <div className="max-w-[450px] h-[200px] mx-auto rounded-md bg-white/20 sm:bg-white/40 text-gray-900">
          <div className="max-w-[320px] mx-auto  "></div>
          <div className="w-full h-screen flex flex-row justify-center gap-4 ">
            <div className="form-control w-80 h-fit mt-16 ">
              <input
                onChange={({ target }) => search(target.value)}
                type="text"
                placeholder="Search"
                className="input input-bordered w-full text-white/80"
              />
            </div>
            <div className="mt-16 p-3 outline h-fit text-white outline-2 rounded-md outline-gray-900 font-semibold cursor-pointer bg-gray-900 hover:text-gray-900  hover:bg-white hover:outline-white  ease-in-out duration-500">
              <FaSearch size={20} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" md:px-[10%] w-full flex flex-wrap items-center justify-center group ">
          {movieList.map((item, id) => (
            <MovieCard key={id} rowID={0} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
