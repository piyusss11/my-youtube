function RightVideoCard(props) {
  const { info } = props;
  const { snippet, statistics } = info;
  const { title, thumbnails, channelTitle } = snippet;
  const { viewCount } = statistics;
  console.log(info);

  return (
    <div className="flex mt-4 h-24 w-[402px] rounded-xl">
      <img
        className="rounded-xl w-[168px] h-24"
        // width="320px"
        // height={thumbnails?.default?.height}

        src={thumbnails?.medium?.url}
        alt=""
      />
      <div>
        <div className="px-2">
          <div className="flex">
            <img src="" alt="" />
            <h1 className="text-sm h-10 overflow-hidden">{title}</h1>
          </div>
        </div>
        <h1 className="text-xs text-gray-500 px-2 pt-2 ">{channelTitle}</h1>
        <div className="flex px-2">
          <h1 className="text-sm text-gray-500">{viewCount} views </h1>
          {/* <h1 className="text-sm text-gray-500">{publishedAt}</h1> */}
        </div>
      </div>
    </div>
  );
}

export default RightVideoCard;
