import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBell,
  FaBars,
} from "react-icons/fa";
import { Sun, Moon } from "lucide-react";

const DashboardNavbar = ({ setIsOpen }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const hour = new Date().getHours();

  let greeting = "Good Evening";
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="
      px-4 md:px-8 py-4
      border-b border-slate-200 dark:border-slate-700
      bg-white dark:bg-black
      backdrop-blur-lg
      flex items-center justify-between
      sticky top-0 z-30
    "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">

        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-xl"
        >
          <FaBars />
        </button>

        <div>
          <h2 className="text-lg md:text-2xl font-bold">
            {greeting} 👋
          </h2>

          <p className="hidden md:block text-sm text-slate-500 dark:text-gray-400">
            Ready to build your dream career?
          </p>
        </div>
      </div>

      {/* CENTER SEARCH */}
      {/* <div className="hidden lg:flex items-center
      bg-slate-100 dark:bg-slate-800
      px-4 py-3 rounded-xl w-96">

        <FaSearch className="text-gray-400" />

        <input
          type="text"
          placeholder="Search jobs, companies..."
          className="ml-3 bg-transparent outline-none w-full"
        />
      </div> */}

      {/* RIGHT */}
      <div className="flex items-center gap-3">

       <button
            onClick={toggleTheme}
            className="
              w-11 h-11 rounded-full
              flex items-center justify-center
              border border-gray-300 dark:border-slate-700
              bg-white dark:bg-blue-900/40
              hover:scale-125 transition-all cursor-pointer
            "
          >
            {theme === "dark" ? (
              <Sun
                size={30}
                className="text-yellow-400 transition-transform hover:rotate-180 duration-300"
              />
            ) : (
              <Moon
                size={30}
                className="text-slate-700 transition-transform hover:-rotate-12 duration-300"
              />
            )}
          </button>



        

        <button className="w-11 h-11 rounded-full
        bg-slate-100 dark:bg-red-400
        flex items-center justify-center">
          <FaBell />
        </button>

        <div
          className="
          hidden md:flex
          w-11 h-11 rounded-full
          bg-linear-to-r
          from-purple-600 to-pink-600
          text-white
          items-center justify-center
          font-bold
        "
        >
          AI
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardNavbar;