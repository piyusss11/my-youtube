import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_COMMENT_API } from "../utils/constants";

function Comments() {
  const [commentsList, setCommentsList] = useState([]);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
//   console.log(videoId);
  useEffect(() => {
    getComments();
  }, [videoId]);
  const getComments = async () => {
    const data = await fetch(
      `${YOUTUBE_COMMENT_API + videoId}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    // console.log(json.items);
    setCommentsList(json.items);
  };
  return (
    <div className="py-6">
      {commentsList.map((comments, index) => (
        <Comment key={index} info={comments} />
      ))}
    </div>
  );
}

function Comment({ info }) {
  console.log(info);
  const { snippet } = info;
  const { topLevelComment } = snippet;
  const { textOriginal, authorDisplayName, authorProfileImageUrl, likeCount } =
    topLevelComment.snippet;
  return (
    <div>
      <div className="flex">
        <img
          className="rounded-full w-10"
          src={authorProfileImageUrl}
          alt="asd"
        />
        <div className="px-4">
          <h1 className="text-sm">{authorDisplayName}</h1>
          <h1 className="">{textOriginal}</h1>
        </div>
      </div>
      <div className="ml-16 py-4">
        <div className="flex gap-4">
          <h1>
            <i className="text-xl ri-thumb-up-line">
              {" "}
              <span className="text-base">{likeCount}</span>
            </i>
          </h1>
          <h1>
            <i className="text-xl ri-thumb-down-line"></i>
          </h1>
          <h1>reply</h1>
        </div>
      </div>
    </div>
  );
}

export default Comments;
