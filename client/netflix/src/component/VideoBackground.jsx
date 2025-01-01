import { useSelector } from "react-redux";
import useMovieById from "../hooks/useMovieById";

const VideoBackground = ({ movieId, bool }) => {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);
  // console.log("trailermovie", trailerMovie[0]);
  useMovieById(movieId);

  if (!trailerMovie) return;
  // console.log(JSON.stringify(trailerMovie),"traimmmm")
  return (
    <div className="w-vw">
      <iframe
        className={`${bool ? "w-[100%]" : "w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${trailerMovie.key}?si=GtBeTByU0HCnKl6J&autoplay=1&mute=1&loop=1&playlist=${trailerMovie.key}`}
        title="YouTube video player"
        allowFullScreen
        frameBorder={0}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
