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
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/10
        border-b border-gray-200 dark:border-slate-600">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-tight">
          <span className="bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-600 text-transparent bg-clip-text">
            Udyoga
          </span>
          <span className="text-gray-900 dark:text-white">
            Netra
          </span>
          <span className="text-pink-600">
            &nbsp; AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-black dark:text-white  transition text-xl
            relative after:absolute after:w-0 after:h-0.5 after:bg-pink-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
          >
            Home
          </Link>

          <Link
            to="/ai-features"
            className="text-black dark:text-white text-xl transition
            relative after:absolute after:w-0 after:h-0.5 after:bg-pink-500 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
          >
            AI Features
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

          {/* Login */}
          <Link
            to="/login"
            className="hidden md:block text-gray-700 dark:text-white text-xl transition ml-3
              relative after:absolute after:w-0 after:h-0.5 after:bg-pink-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all
            "
          >
            Login
          </Link>

          {/* CTA */}
          <Link to="/register">
          <button
            className="
              hidden md:block
              px-7 py-2.5 rounded-xl ml-3
              bg-gradient-to-r from-purple-600  to-pink-600
              text-white font-medium
              hover:scale-110 transition-all cursor-pointer
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


            <Link to="/ai-features" onClick={() => setMenuOpen(false)}>
              AI Features
            </Link>

            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>

            <Link to="/register">
            <button
              className=" px-7
                py-2 rounded-lg
                bg-gradient-to-r from-purple-600  to-pink-600 text-white
              "
            >
              Get Started
            </button>
            </Link>

          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;