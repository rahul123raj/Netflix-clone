const VideoBackground = () => {
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video "
        src="https://www.youtube.com/embed/LXb3EKWsInQ?si=GtBeTByU0HCnKl6J&autoplay=1&mute=1"
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
