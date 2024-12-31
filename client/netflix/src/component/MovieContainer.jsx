import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieContainer = () => {
  const movie = useSelector((store) => store.movie);
  return (
    <div className=" -mt-52 relative z-10 bg-black w-screen">
      <MovieList title={"Popular Movie"} movies={movie.popularMovies} />
      <MovieList title={"Now Playing Movie"} movies={movie.nowPlayingMovies} />
      <MovieList title={"Top Rated Movie"} movies={movie.topRatedMovies} />
      <MovieList title={"Upcoming Movie"} movies={movie.upcomingMovies} />
    </div>
  );
};

export default MovieContainer;
