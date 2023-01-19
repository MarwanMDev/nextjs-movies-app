type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="bg-slate-400 h-72 rounded-lg shadow-lg">
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt="poster"
        className="h-full w-full object-fill rounded-t-lg shadow-md"
      />
    </div>
  );
};

export default MovieCard;
