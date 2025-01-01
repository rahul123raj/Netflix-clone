import { useState } from "react";
import axios from "axios";
import { options, SEARCH_MOVIES } from "../utils/Api";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedMovieDetails } from "../redux/searchSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";

const SearchMovies = () => {
  const [searchMovie, setSearchMovie] = useState("");
  // console.log(searchMovie)
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const { moviename, searchedMovies } = useSelector((store) => store.search);
  // console.log(movie,searchMovies)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `${SEARCH_MOVIES}${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      // console.log(res.data.results);
      const searchedmovies = res?.data?.results;
      dispatch(setSearchedMovieDetails({ searchMovie, searchedmovies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };
  return (
    <><div className="h-vh bg-slate-600 flex flex-col">
      <div className="flex justify-center pt-[15%] w-[100%] ">
        <form className="w-[50%]" onSubmit={handleSubmit}>
          <div className="w-[100%] flex items-center justify-between rounded-md shadow-md shadow-gray-600 p-2">
            <input
              type="text"
              placeholder="Search Movies..."
              className="w-[85%] p-2 text-lg outline-none"
              value={searchMovie}
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
            />
            <button className="bg-red-600 rounded-md p-2 font-semibold text-white text-lg hover:brightness-75">
              {isLoading ? "Searching...." : "Search"}
            </button>
          </div>
        </form>
      </div>
      <div className="w-[100%]  pt-[5%]">
        {searchedMovies.length > 0 ? (
          <MovieList title={moviename} movies={searchedMovies} />
        ) : (
          <h1 className="text-xl font-bold text-stone-50">Movies not found...</h1>
        )}
      </div>
      </div>
    </>
  );
};

export default SearchMovies;
