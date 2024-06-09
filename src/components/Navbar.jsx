import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import SearchList from "./SearchList";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  // console.log(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        getSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSearchList(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
    // setSearchQuery(json[1]);
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between px-5 py-3 ">
      <div className="flex gap-4 ">
        <i
          onClick={() => toggleMenuHandler()}
          className="cursor-pointer text-2xl ri-menu-line"
        ></i>
        <Link to={"/"}>
          <img
            className="w-24 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="">
        <div className="flex">
          <input
            className="w-96 px-4 border-2 rounded-full rounded-r-none  border-r-2"
            type="text"
            placeholder="search.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onMouseOver={() => setShowSuggestions(true)}
            onMouseLeave={() => setShowSuggestions(false)}
            // onBlur={()=>setShowSuggestions(false)}
          />
          <i className="text-black cursor-pointer px-4 border-l-0 border-2 rounded-full rounded-l-none  text-2xl ri-search-line"></i>
        </div>
        <div
          onMouseOver={() => setShowSuggestions(true)}
          onMouseLeave={() => setShowSuggestions(false)}
          className="fixed bg-white w-96 rounded-xl border-gray-100"
        >
          {searchList.map(
            (list, index) =>
              showSuggestions && <SearchList key={index} info={list} />
          )}
        </div>
      </div>
      <div className="flex gap-4 ">
        <i className="text-2xl ri-notification-line"></i>
        <i className="text-2xl ri-video-add-line"></i>
        <img
          className="w-12"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
