export const GOOGLE_API_KEY = "AIzaSyB7C9YX6hz80gZgLEh5mSp5b4Og1W0oDjM";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_BY_ID_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY]";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=JavaScript%20tutorials&maxResults=5&key=YOUR_API_KEY";

export const YOUTUBE_COMMENT_API =
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&videoId=";

export const LIVE_CHAT_LIMIT = 20;
