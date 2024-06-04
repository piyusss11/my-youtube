import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {closeMenu} from "../utils/appSlice"

function WatchPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return <div>my watch page</div>;
}

export default WatchPage;
