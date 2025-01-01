import { useDispatch } from "react-redux";
import { TMDB_IMG_URL } from "../utils/Api";
import { getid, setOpen } from "../redux/movieSlice";

const MovieCard = ({ posterpath,movieid }) => {
  const dispatch = useDispatch()
  
  const handleOpen = () =>{
    dispatch(getid(movieid))
    dispatch(setOpen(true))
  }

  if(posterpath === null) return null
  return (
    <div className="w-44 pr-3" onClick={handleOpen}>
      <img src={`${TMDB_IMG_URL}/${posterpath}`} alt="movie_poster" />
    </div>
  );
};

export default MovieCard;
