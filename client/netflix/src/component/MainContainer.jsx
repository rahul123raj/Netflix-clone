import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movie = useSelector(store=>store.movie?.nowPlayingMovies[4])
  console.log(movie)
  return (
    <div>
      <VideoTitle title={movie.original_title} overview={movie.overview}/>
      <VideoBackground id={movie.id}/>
    </div>
  );
};

export default MainContainer;
