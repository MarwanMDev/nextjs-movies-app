import { notFound } from 'next/navigation';
import LiveTimeStamp from '../LiveTimeStamp';

type Props = {
  searchParams?: Movie;
};

const MoviePage = ({ searchParams }: Props) => {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  )
    return notFound();

  const movie: Movie = searchParams;
  return (
    <div className="h-vh">
      <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
          />
        )}

        <div className="px-10">
          <h1 className="headerTitle px-0 underline pb-2">
            {movie.title}
          </h1>

          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">
              By: {movie.original_language || 'unknown'}
            </h2>
            <h2 className="font-bold pl-4">{movie.video}</h2>
            <p className="pl-4">
              <LiveTimeStamp time={movie.release_date} />
            </p>
          </div>

          <p className="pt-4">{movie.overview}</p>
        </div>
      </section>
    </div>
  );
};

export default MoviePage;
