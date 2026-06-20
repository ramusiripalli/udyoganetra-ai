import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun, FaBell, FaBars } from "react-icons/fa";

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
      className="
      px-4 md:px-8 py-4 md:py-5
      border-b border-slate-200 dark:border-slate-700
      bg-white dark:bg-slate-900
      flex items-center justify-between
      shadow-sm
    "
    >
      <div className="flex items-center gap-4">
        {/* mobile menu */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-xl"
        >
          <FaBars />
        </button>

        <div>
          <h2 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white">
            {greeting} 👋
          </h2>

          <p className="hidden sm:block text-sm mt-1 text-slate-500 dark:text-gray-400">
            Your AI Career Copilot is ready today.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
          <FaBell />
        </button>

        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white flex items-center justify-center">
          🤖
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardNavbar;