import { useEffect } from "react";
import axios from "axios";
import { Now_Playing_Movies, options } from "../utils/Api";
import { useDispatch } from "react-redux";
import  {getNowPlayingMovies} from '../redux/movieSlice'

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Async function for fetching movies
    const fetchNowPlayingMovies = async () => {
      try {
        const res = await axios.get(Now_Playing_Movies, options);
        dispatch(getNowPlayingMovies(res.data.results));
      } catch (error) {
        console.error("Error fetching now-playing movies:", error);
      }
    };

    fetchNowPlayingMovies(); // Call the async function
  },[dispatch]); // Dependency array ensures the effect runs only when dispatch changes
};

export default useNowPlayingMovies;
