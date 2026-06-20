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
} from "react-icons/fa";

const DashboardSidebar = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const menuItems = [
    { icon: <FaHome />, text: "Dashboard", path: "/dashboard" },
    { icon: <FaFileAlt />, text: "Resume ATS", path: "/resume-analyzer" },
    { icon: <FaMicrophone />, text: "Interview Prep", path: "/interview-prep" },
    { icon: <FaBriefcase />, text: "Job Match", path: "/job-match" },
    { icon: <FaBrain />, text: "Skill Gap", path: "#" },
    { icon: <FaRoad />, text: "Roadmap", path: "#" },
    { icon: <FaClipboardList />, text: "Tracker", path: "#" },
  ];

  return (
    <>
      {/* mobile overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <motion.div
        className={`
        fixed lg:static top-0 left-0 z-50
        w-64 min-h-screen
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        
        bg-white dark:bg-slate-900
        border-r border-slate-200 dark:border-slate-700
        flex flex-col justify-between px-5 py-8
      `}
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            UdyogaNetra AI
          </h1>

          <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4 mb-8 border border-slate-200 dark:border-slate-700">
            <p className="font-semibold text-lg text-slate-900 dark:text-white">
              {user?.name}
            </p>
            <p className="text-sm mt-1 text-slate-500 dark:text-gray-400">
              AI Career Explorer
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {menuItems.map((item, index) => (
              <motion.div key={index} whileHover={{ x: 5 }}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-4 p-3 rounded-xl bg-purple-100 dark:bg-slate-800"
                      : "flex items-center gap-4 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
                  }
                >
                  <span className="text-purple-500">{item.icon}</span>

                  <span className="text-slate-700 dark:text-white">
                    {item.text}
                  </span>
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center gap-3"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </motion.div>
    </>
  );
};

export default DashboardSidebar;