import { useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SearchMovies from "./SearchMovies";

const Browser = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.app.user);
  // console.log(user)
  const toggle = useSelector((store) => store.movie.toggle);

  //! my custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      <div>
        {toggle ? (
          <SearchMovies />
        ) : (
          <>
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </div>
  );
};

export default Browser;
