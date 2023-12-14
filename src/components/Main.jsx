import { Outlet } from "react-router-dom";
import User from "./User";

function Main() {
  return (
    <div className="main">
      <User />
      <Outlet />
    </div>
  );
}

export default Main;
