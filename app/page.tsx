import React from 'react';
import fetchMovies from '../utils/fetchMovies';
import Hero from './Hero';
import MovieList from './MovieList';

async function HomePage() {
  const movieResults: MoviesResponse = await fetchMovies();
  return (
    <div>
      <Hero movies={movieResults.myQuery.results} />
      <MovieList />
    </div>
  );
}

export default HomePage;
