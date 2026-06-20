import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-[#0b0c19]">

      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-[#111827] shadow-lg p-5">

        <h2 className="text-2xl font-bold mb-8 text-pink-500">
          Dashboard
        </h2>

        <div className="flex flex-col gap-4">

          <Link
            to="/dashboard"
            className="hover:text-pink-500"
          >
            Home
          </Link>

          <Link
            to="/resume-analyzer"
            className="hover:text-pink-500"
          >
            Resume Analyzer
          </Link>

          <Link
            to="/interview-prep"
            className="hover:text-pink-500"
          >
            Interview Prep
          </Link>

          <Link
            to="/job-match"
            className="hover:text-pink-500"
          >
            Job Match
          </Link>

          <button
            onClick={handleLogout}
            className="mt-8 bg-red-500 text-white py-2 rounded-lg"
          >
            Logout
          </button>

        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold">
          Welcome to UdyogaNetra Dashboard 🚀
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Here all AI features will come.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6">

          <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow">
            Resume Analyzer
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow">
            Interview Prep
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow">
            Job Match
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow">
            More Coming...
          </div>

        </div>

        <Outlet />

      </div>
    </div>
  );
};

export default Dashboard;