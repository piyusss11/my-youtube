// import React from "react";
import { useEffect,useState } from "react";
import { YOUTUBE_VIDEO_API } from "./constants";

function useGetPopularVideos() {
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
  return videosList
}

export default useGetPopularVideos;
