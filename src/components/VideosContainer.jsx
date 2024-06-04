import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideosContainer() {
  const [videosList, setVideosList] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
    setVideosList(json.items);
  };
  // console.log(videosList);

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
