import MovieCard from './MovieCard';

async function MovieList() {
  const movies: MoviesResponse = await fetchMovies();

  return (
    <section className="mt-10 p-10 flex flex-col space-y-5">
      <div className="flex flex-row justify-between items-center">
        <h4 className="font-bold text-lg uppercase">
          Popular right now
        </h4>
        <p className="uppercase text-xs font-bold">see all {'>'}</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 items-center justify-center">
        {[1, 2, 3, 4].map(() => (
          <MovieCard />
        ))}
      </div>
    </section>
  );
}

export default MovieList;
