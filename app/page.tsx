import React from 'react';
import fetchMovies from '../utils/fetchMovies';
import fetchPopularMovies from '../utils/fetchPopularMovies';
import Hero from './Hero';
import MovieList from './MovieList';

async function HomePage() {
  const movieResults: MoviesResponse = await fetchMovies();
  const popularMovies: PopularResponse = await fetchPopularMovies();
  console.log(popularMovies);
  return (
    <div>
      <Hero movies={movieResults.myQuery.results} />
      <MovieList movies={popularMovies.getPopular.results} />
    </div>
  );
}

export default HomePage;
