import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options, Top_Rated_Movies } from "../utils/Api";
import { getTopRatedMovies } from '../redux/movieSlice';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const res = await axios.get(Top_Rated_Movies, options);
        dispatch(getTopRatedMovies(res.data.results));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopRatedMovies();
  }, [dispatch]);
};

export default useTopRatedMovies;
