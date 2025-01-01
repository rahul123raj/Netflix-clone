import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movie = useSelector(store=>store?.movie?.nowPlayingMovies)
  if (!movie || movie.length === 0) {
    return <div>Loading...</div>; // Render a fallback while data is being fetched
  }
  // console.log("movie",movie)
  const {overview, id, title} = movie[1]
  // console.log(overview,id,title ,"movie")

  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
