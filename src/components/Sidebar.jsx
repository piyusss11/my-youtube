import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Sidebar() {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen) return null
  return (
    <div className="w-48 shadow-lg px-5 py-3 ">
      <ul className="border-b-2 py-4 text-xl font-[500] ">
        <Link to={"/"}>
          
        <li className="py-1">Home</li>
        </Link>
        <li className="py-1">Shorts</li>
        <li className="py-1">Subscriptions</li>
      </ul>
      <div className="pt-4 ">
        <h1 className="font-[500] text-xl">You {">"}</h1>
        <ul className="border-b-2 py-2 text-lg">
          <li>Music</li>
          <li>Sports</li>
          <li>Gameing</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className="pt-4">
        <h1 className="font-[500] text-xl">Genres</h1>
        <ul className="border-b-2 py-2 text-lg">
          <li>Music</li>
          <li>Sports</li>
          <li>Gameing</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
