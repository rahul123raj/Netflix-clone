import { TMDB_IMG_URL } from "../utils/Api";

const MovieCard = ({ posterpath }) => {
  return (
    <div className="w-44 pr-3">
      <img src={`${TMDB_IMG_URL}/${posterpath}`} alt="movie_poster" />
    </div>
  );
};

export default MovieCard;
