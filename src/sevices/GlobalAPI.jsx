import axios from 'axios';

const movieBaseUrl = import.meta.env.VITE_BASE_URL;
const accessToken = import.meta.env.VITE_READ_ACCESS_TOKEN;

const config = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${accessToken}`,
  },
};

const getMovieList = async () => {
  const movie = await axios.get(movieBaseUrl + '/trending/all/week', config);
  return movie.data.results;
};

const getTrendingMovies = async () => {
  const movie = await axios.get(movieBaseUrl + '/trending/all/day', config);
  return movie.data.results;
};
const getTopRatedMovies = async () => {
  const movie = await axios.get(movieBaseUrl + '/movie/top_rated', config);
  return movie.data.results;
};
const getUpComingMovies = async () => {
  const movie = await axios.get(movieBaseUrl + '/movie/upcoming', config);
  return movie.data.results;
};
const getPopularTv = async () => {
  const movie = await axios.get(movieBaseUrl + '/trending/tv/week', config);
  return movie.data.results;
};
const getPopularPerson = async () => {
  const movie = await axios.get(movieBaseUrl + '/person/popular', config);
  return movie.data.results;
};
const getTvAiringToday = async () => {
  const movie = await axios.get(movieBaseUrl + '/tv/airing_today', config);
  return movie.data.results;
};
const getAllMovie = async (page) => {
  const movie = await axios.get(
    `${movieBaseUrl}/discover/movie?page=${page}`,
    config
  );
  return movie.data.results;
};
const getAllTvShow = async (page) => {
  const movie = await axios.get(
    `${movieBaseUrl}/discover/tv?page=${page}`,
    config
  );
  return movie.data.results;
};

const searchMovie = async (q) => {
  const search = await axios.get(
    `${movieBaseUrl}/search/multi?query=${q}`,
    config
  );
  return search.data.results;
};

export default {
  getMovieList,
  getTrendingMovies,
  getPopularPerson,
  getTopRatedMovies,
  getUpComingMovies,
  getTvAiringToday,
  getPopularTv,
  getAllMovie,
  getAllTvShow,
  searchMovie,
};
