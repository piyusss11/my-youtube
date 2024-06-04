import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

function Navbar() {
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

        <img
          className="w-24 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt=""
        />
      </div>
      <div className="flex  ">
        <input
          className="w-96 border-2 rounded-full rounded-r-none  border-r-2"
          type="text"
          placeholder="  search.."
        />
        <i className="text-black cursor-pointer px-4 border-l-0 border-2 rounded-full rounded-l-none  text-2xl ri-search-line"></i>
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
