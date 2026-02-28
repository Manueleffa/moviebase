const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "http://www.omdbapi.com";

export const searchMovies = async (query, type = "movie", page = 1) => {
  const response = await fetch(
    `${BASE_URL}/?apikey=${API_KEY}&s=${query}&type=${type}&page=${page}`,
  );

  const data = await response.json();
  return data;
};

export const getMovieById = async (imdbID) => {
  const response = await fetch(
    `${BASE_URL}/?apikey=${API_KEY}&i=${imdbID}&plot=full`,
  );
  const data = await response.json();
  return data;
};
