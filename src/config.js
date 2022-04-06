export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const apiKey = `7ac7f417e57e14a219be2469ac078664`;
const tmdbEndpoint = `https://api.themoviedb.org/3/movie`;
// const tmdbEndpointSearch = `https://api.themoviedb.org/3/search`;

// https://api.themoviedb.org/3/movie/${type}?api_key=7ac7f417e57e14a219be2469ac078664

// https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}
// https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}

export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${apiKey}$page=${page}`,
  getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    ` ${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
  image500: (url) => `https://image.tmdb.org/t/p/w500/${url}`,
};
