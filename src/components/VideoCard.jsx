function VideoCard(props) {
  const { info } = props;
  const { snippet, statistics } = info;
  const { publishedAt, title, thumbnails, channelTitle } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="flex flex-col mt-4 h-72 w-80 rounded-xl">
      <img
      className="rounded-xl "
        width={thumbnails?.medium?.width}
        src={thumbnails?.medium?.url}
        alt=""
      />
      <div className="p-2">
        <div className="flex">
          <img src="" alt="" />
          <h1>{title}</h1>
        </div>
      </div>
      <h1 className="text-sm text-gray-500 px-2">{channelTitle}</h1>
      <div className="flex px-2">
        <h1 className="text-sm text-gray-500">{viewCount}</h1>
        <h1 className="text-sm text-gray-500">{publishedAt}</h1>
      </div>
    </div>
  );
}

export default VideoCard;
