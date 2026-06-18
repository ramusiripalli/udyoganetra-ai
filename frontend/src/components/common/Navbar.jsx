import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur-xl
        bg-white/70 dark:bg-slate-950/70
        border-b border-gray-200 dark:border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            Udyoga
          </span>
          <span className="text-gray-900 dark:text-white">
            Netra
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition
            relative after:absolute after:w-0 after:h-0.5 after:bg-cyan-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
          >
            Home
          </Link>

          <Link
            to="/jobs"
            className="text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition
            relative after:absolute after:w-0 after:h-0.5 after:bg-cyan-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
          >
            Jobs
          </Link>

          <Link
            to="/ai-tools"
            className="text-gray-700 dark:text-gray-200 hover:text-cyan-400 transition
            relative after:absolute after:w-0 after:h-0.5 after:bg-cyan-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
          >
            AI Tools
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              w-11 h-11 rounded-full
              flex items-center justify-center
              border border-gray-300 dark:border-slate-700
              bg-white dark:bg-slate-900
              hover:scale-105 transition-all cursor-pointer
            "
          >
            {theme === "dark" ? (
              <Sun
                size={20}
                className="text-yellow-400 transition-transform hover:rotate-180 duration-300"
              />
            ) : (
              <Moon
                size={20}
                className="text-slate-700 transition-transform hover:-rotate-12 duration-300"
              />
            )}
          </button>

          {/* Login */}
          <Link
            to="/login"
            className="
              hidden md:block
              text-gray-700 dark:text-gray-200
              hover:text-cyan-400 transition
              relative after:absolute after:w-0 after:h-0.5 after:bg-cyan-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all
            "
          >
            Login
          </Link>

          {/* CTA */}
          <Link to="/register">
          <button
            className="
              hidden md:block
              px-5 py-2.5 rounded-xl
              bg-gradient-to-r from-cyan-500 to-blue-600
              text-white font-medium
              hover:scale-105 transition-all cursor-pointer
              shadow-lg
            "
          >
            Get Started
          </button>
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-900 dark:text-white"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="
            md:hidden
            px-6 pb-6 pt-2
            bg-white dark:bg-slate-950
            border-t border-gray-200 dark:border-slate-800
          "
        >
          <div className="flex flex-col gap-4">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/jobs" onClick={() => setMenuOpen(false)}>
              Jobs
            </Link>

            <Link to="/ai-tools" onClick={() => setMenuOpen(false)}>
              AI Tools
            </Link>

            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>

            <button
              className="
                py-2 rounded-lg
                bg-blue-600 text-white
              "
            >
              Get Started
            </button>

          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;