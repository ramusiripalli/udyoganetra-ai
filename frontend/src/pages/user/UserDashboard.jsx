// UserDashboard.jsx

import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";


const UserDashboard = () => {
  return (
    <>
      <UserNavbar />
      <Outlet />
    </>
  );
};

export default UserDashboard;