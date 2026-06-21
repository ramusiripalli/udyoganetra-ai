import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { motion } from "framer-motion";

import {
  FaHome,
  FaFileAlt,
  FaMicrophone,
  FaBriefcase,
  FaBrain,
  FaRoad,
  FaClipboardList,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

const DashboardSidebar = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const menuItems = [
    { icon: <FaHome />, text: "Dashboard", path: "/dashboard" },
    { icon: <FaFileAlt />, text: "Resume ATS", path: "/resume-analyzer" },
    { icon: <FaRoad />, text: "Roadmap", path: "roadmap" },
    { icon: <FaMicrophone />, text: "Interview Prep", path: "/interview-prep" },
    { icon: <FaBriefcase />, text: "Job Match", path: "/job-match" },
    { icon: <FaBrain />, text: "Skill Gap", path: "#" },
    { icon: <FaClipboardList />, text: "Tracker", path: "#" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      <motion.aside
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={`
        fixed lg:static top-0 left-0 z-50
        w-72 min-h-screen
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0

        bg-gradient-to-b
        from-white via-gray-50 to-gray-100
        dark:from-black dark:via-blue-900/10 dark:to-black

        border-r border-slate-200 dark:border-slate-700
        flex flex-col justify-between
        px-6 py-8
        shadow-xl
      `}
      >
        {/* TOP SECTION */}
        <div>
          {/* Mobile Close Button */}
          <div className="flex items-center justify-between lg:hidden mb-6">
            <h1 className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              UdyogaNetra
            </h1>

            <button onClick={() => setIsOpen(false)}>
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Desktop Logo */}
          <h1
            className="
            hidden lg:block
            text-3xl font-bold mb-5
            bg-gradient-to-r
            from-purple-600 to-pink-600
            bg-clip-text text-transparent
          "
          >
            UdyogaNetra AI
          </h1>

          {/* USER CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="
            rounded-2xl p-4 mb-5 bg-white dark:bg-black
            border-3 border-pink-700
            shadow-md
          "
          >
            <p className="font-semibold text-2xl text-black dark:text-white">
              {user?.name || "User"}
            </p>

            <p className="text-sm mt-1 text-slate-500 dark:text-gray-400">
              AI Career Explorer
            </p>
          </motion.div>

          {/* MENU ITEMS */}
          <div className="flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? ` flex items-center gap-4 p-4 rounded-xl
                        bg-gradient-to-r
                        from-purple-100 to-pink-100
                        dark:from-slate-800
                        dark:to-slate-800

                        shadow-md
                      `
                      : `
                        flex items-center gap-4
                        p-4 rounded-xl
                        hover:bg-slate-100
                        dark:hover:bg-slate-700

                        transition
                      `
                  }
                >
                  <span className="text-pink-600 text-lg">
                    {item.icon}
                  </span>

                  <span className="font-medium text-slate-700 dark:text-white">
                    {item.text}
                  </span>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleLogout}
            className="
            w-full py-3 rounded-xl mt-5 mb-5
            bg-linear-to-r
            from-red-600 to-yellow-600
            text-white
            font-semibold
            flex items-center justify-center gap-3
            shadow-lg cursor-pointer
          "
          >
            <FaSignOutAlt />
            Logout
          </motion.button>
        </div>
      </motion.aside>
    </>
  );
};

export default DashboardSidebar;