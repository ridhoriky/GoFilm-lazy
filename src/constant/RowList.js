import GlobalAPI from '../sevices/GlobalAPI';

const list = [
  {
    id: 1,
    name: "Today's Highlight",
    fetchURL: GlobalAPI.getTrendingMovies,
  },
  {
    id: 2,
    name: 'TV Show Airing Today',
    fetchURL: GlobalAPI.getTvAiringToday,
  },
  {
    id: 3,
    name: 'Coming Soon',
    fetchURL: GlobalAPI.getUpComingMovies,
  },
  {
    id: 4,
    name: 'Popular TV Series',
    fetchURL: GlobalAPI.getPopularTv,
  },
  {
    id: 5,
    name: 'Top Rated Movie',
    fetchURL: GlobalAPI.getTopRatedMovies,
  },
  {
    id: 6,
    name: 'Top Cast',
    fetchURL: GlobalAPI.getPopularPerson,
  },
];

export default { list };
