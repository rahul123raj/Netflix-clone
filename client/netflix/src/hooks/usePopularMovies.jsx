import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options, Popular_Movies } from "../utils/Api";
import { getPopularMovies } from '../redux/movieSlice'


const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      // Async function for fetching movies
      const fetchPopularMovies = async () => {
        try {
          const res = await axios.get(Popular_Movies, options);
          dispatch(getPopularMovies(res.data.results));
        } catch (error) {
          console.error("Error fetching now-playing movies:", error);
        }
      };
  
      fetchPopularMovies(); // Call the async function
    }, [dispatch]); // Dependency array ensures the effect runs only when dispatch changes
}

export default usePopularMovies