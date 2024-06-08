import RightVideoCard from "./RightVideoCard";
import useGetPopularVideos from "../utils/useGetPopularVideos";
import { Link } from "react-router-dom";
function WatchPageRightSection() {
  const popularVideosList = useGetPopularVideos();
  return (
    <div className="ml-4 p-10 flex-col gap-2">
      Videos for you
      {popularVideosList.map((videos) => (
        <Link key={videos.id} to={"/watch?v=" + videos.id}>
          <RightVideoCard info={videos} />
        </Link>
      ))}
    </div>
  );
}

export default WatchPageRightSection;
