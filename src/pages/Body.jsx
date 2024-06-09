import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
function Body() {
  return (
    <div className="  ">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
