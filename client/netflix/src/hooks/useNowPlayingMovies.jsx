import { useEffect } from "react";
import axios from "axios";
import { Now_Playing_Movies, options } from "../utils/Api";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Async function for fetching movies
    const fetchNowPlayingMovies = async () => {
      try {
        const res = await axios.get(Now_Playing_Movies, options);
        // const randomIndex = Math.floor(Math.random() * res.data.results.length);

        // console.log("nowpayingmovie", res.data.results[randomIndex]);
        // console.log("num", randomIndex);

        dispatch(getNowPlayingMovies(res.data.results));
        // console.log("dispatch nowpaymovie",res.data.results)
      } catch (error) {
        console.error("Error fetching now-playing movies:", error);
      }
    };

    fetchNowPlayingMovies(); // Call the async function
  }, [dispatch]); // Dependency array ensures the effect runs only when dispatch changes
};

export default useNowPlayingMovies;
