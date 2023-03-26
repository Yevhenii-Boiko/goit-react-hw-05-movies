import axios from 'axios';
import defaultImg from '../img/default.jpg';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '12a1c9f7c08bf08c5c3c451723bbd88a';

export async function getTrending() {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  const movies = data.results.map(({ id, original_title }) => ({
    id,
    original_title,
  }));
  return movies;
}

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = data;
  return {
    poster_path: getPoster(poster_path),
    original_title,
    release_date: release_date.slice(0, 4),
    vote_average: vote_average.toFixed(1),
    overview,
    genres: genres.map(({ name }) => name).join(', '),
  };
};

export async function getMovieCast(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?language=en-US&page=1&include_adult=false&api_key=${API_KEY}`
  );
  const credits = data.cast.map(({ id, name, profile_path }) => ({
    id,
    name,
    profile_path: getPoster(profile_path),
  }));
  return credits;
}

export async function getMovieReviews(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`
  );
  const reviews = data.results.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));
  return reviews;
}

export async function getMoviesSearch(query) {
  const { data } = await axios.get(
    `/search/movie?query=${query}&language=en-US&page=1&include_adult=false&api_key=${API_KEY}`
  );
  const movies = data.results.map(({ id, original_title }) => ({
    id,
    original_title,
  }));
  return movies;
}

const getPoster = url =>
  url ? 'https://image.tmdb.org/t/p/w500' + url : defaultImg;
