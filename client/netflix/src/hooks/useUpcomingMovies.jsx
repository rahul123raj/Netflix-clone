import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUpcomingMovies } from "../redux/movieSlice";
import { options, Upcoming_Movies } from "../utils/Api";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const res = await axios.get(Upcoming_Movies, options);
        dispatch(getUpcomingMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUpcomingMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
