import React, { useEffect, useState } from "react";
import GlobalAPI from "../sevices/GlobalAPI";
import MovieCard from "../components/MovieCard";

const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = 10;

  useEffect(() => {
    if (page < totalPages) {
      GlobalAPI.getAllMovie(page).then((result) => {
        setMovieList((prevMovies) => [...prevMovies, ...result]);
      });
    }
  }, [page, totalPages]);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <h2 className="text-center text-white font-bold mt-20 md:text-3xl md:px-[10%] p-4">
        Movie
      </h2>
      <div className=" md:px-[10%] w-full flex flex-wrap items-center justify-center group ">
        {movieList.map((item, id) => (
          <MovieCard key={id} rowID={0} item={item} type="movie" />
        ))}
      </div>
      <div className="flex justify-center md:px-[10%]">
        {page < totalPages && (
          <button
            onClick={loadMoreMovies}
            className="my-16 p-3 rounded-md outline-gray-900 font-semibold cursor-pointer bg-gray-900 hover:text-gray-900  hover:bg-white hover:outline-white  ease-in-out duration-500"
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default Movie;
