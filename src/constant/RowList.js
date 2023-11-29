import GlobalAPI from '../sevices/GlobalAPI';

const list = [
  {
    id: 1,
    name: "Today's Highlight",
    fetchURL: GlobalAPI.getTrendingMovies,
    type: 'movie',
  },
  {
    id: 2,
    name: 'TV Show Airing Today',
    fetchURL: GlobalAPI.getTvAiringToday,
    type: 'tv',
  },
  {
    id: 3,
    name: 'Coming Soon',
    fetchURL: GlobalAPI.getUpComingMovies,
    type: 'movie',
  },
  {
    id: 4,
    name: 'Popular TV Series',
    fetchURL: GlobalAPI.getPopularTv,
    type: 'tv',
  },
  {
    id: 5,
    name: 'Top Rated Movie',
    fetchURL: GlobalAPI.getTopRatedMovies,
    type: 'movie',
  },
  {
    id: 6,
    name: 'Top Cast',
    fetchURL: GlobalAPI.getPopularPerson,
    type: 'person',
  },
];

export default { list };
