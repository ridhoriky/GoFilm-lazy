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
  const response = await axios.get(movieBaseUrl + '/trending/all/week', config);
  return response.data.results;
};

const getTrendingMovies = async () => {
  const response = await axios.get(
    movieBaseUrl + '/trending/movie/day',
    config
  );
  return response.data.results;
};
const getTopRatedMovies = async () => {
  const response = await axios.get(movieBaseUrl + '/movie/top_rated', config);
  return response.data.results;
};
const getUpComingMovies = async () => {
  const response = await axios.get(movieBaseUrl + '/movie/upcoming', config);
  return response.data.results;
};
const getPopularTv = async () => {
  const response = await axios.get(movieBaseUrl + '/trending/tv/week', config);
  return response.data.results;
};
const getPopularPerson = async () => {
  const response = await axios.get(movieBaseUrl + '/person/popular', config);
  return response.data.results;
};
const getTvAiringToday = async () => {
  const response = await axios.get(movieBaseUrl + '/tv/airing_today', config);
  return response.data.results;
};
const getAllMovie = async (page) => {
  const response = await axios.get(
    `${movieBaseUrl}/discover/movie?page=${page}`,
    config
  );
  return response.data.results;
};
const getAllTvShow = async (page) => {
  const response = await axios.get(
    `${movieBaseUrl}/discover/tv?page=${page}`,
    config
  );
  return response.data.results;
};

const searchMovie = async (q) => {
  const response = await axios.get(
    `${movieBaseUrl}/search/multi?query=${q}`,
    config
  );
  return response.data.results;
};

const getDetailsById = async (id, type) => {
  let url = `${movieBaseUrl}/${type}/${id}`;

  const response = await axios.get(url, config);
  return response.data;
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
  getDetailsById,
};
