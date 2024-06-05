
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import useGetPopularVideos from "../utils/useGetPopularVideos";

function VideosContainer() {
  const videosList = useGetPopularVideos()
  return (
    <div className="flex flex-wrap gap-4 px-10 py-2 justify-center">
      {videosList.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideosContainer;
