import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import WatchPageRightSection from "../components/WatchPageRightSection";
import Comments from "../components/Comments";
function WatchPage() {
  const [videoInfo, SetVideoInfo] = useState({});
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  // console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideoInfo();
  }, []);

  const getVideoInfo = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    // console.log(json.items[0]);
    SetVideoInfo(json.items[0]);
  };
  const { snippet /*, statistics*/ } = videoInfo;
  console.log(snippet);

  return (
    <div className="mx-20 mt-5 flex">
      <section className="flex flex-col ">
        <iframe
          className="rounded-xl"
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}?si=8bbMLFQguh-FW6fL`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // refererPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="flex flex-col ">
          <h1 className="font-[500] text-2xl py-3">{snippet?.title}</h1>
          <div className="flex">
            <img src="" alt="" />
            <h1 className="text-lg text-gray-900 font-semibold">
              {snippet?.channelTitle}
            </h1>
            <button className="ml-8 rounded-full text-white bg-black px-4 py-2">
              Subscribe
            </button>
          </div>
          <div>
            <Comments />
          </div>
        </div>
      </section>
      <section>
        <WatchPageRightSection />
      </section>
    </div>
  );
}

export default WatchPage;
