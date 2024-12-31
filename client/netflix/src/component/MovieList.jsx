import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {
  return (
    <div className="px-10 mb-14">
      <h1 className="text-3xl font-semibold text-yellow-50 mb-4">{title}</h1>

      {movies && movies.length > 0 ? (
        <div className="overflow-x-auto cursor-pointer flex no-scrollbar">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterpath={movie.poster_path} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-400">No movies available</p>
      )}
    </div>
  );
};

export default MovieList;
