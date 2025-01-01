import axios from "axios";
import { options } from "../utils/Api";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../redux/movieSlice";
import { useEffect } from "react";

const useMovieById = (movie_id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovieTrailer = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie_id}/videos`,
          options
        );
        // Filter for the trailer type
        // console.log(res)
        const trailer = res?.data?.results?.filter(
          (item) => item.type === "Trailer"
        );

        // Dispatch the first trailer or the first video available
        dispatch(
          getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0])
        );
      } catch (error) {
        console.log(error);
      }
    };

    // if (movie_id) {
    fetchMovieTrailer(); // Call the function only if movie_id exists
    // }
  }, []); // Dependency array to run when movie_id changes
};

export default useMovieById;
