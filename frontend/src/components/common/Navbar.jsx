import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";
import { Sun, Moon} from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="
      fixed top-0 left-0 w-full z-50
      backdrop-blur-xl
      bg-white/70 dark:bg-black/30
      border-b border-gray-200 dark:border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <Link to="/" className="text-3xl font-bold">

          <span className="bg-gradient-to-r  from-cyan-400  via-blue-500  to-purple-500 text-transparent bg-clip-text">
            Udyoga
          </span>
          <span className="text-gray-900 dark:text-white">
            Netra 👁👁
          </span>

        </Link>


        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-10">
          {theme}
          <Link to="/" className="text-black dark:text-white hover:text-cyan-400">
            Home
          </Link>

          <Link to="/about" className="text-black dark:text-white hover:text-cyan-400">
            About
          </Link>

          <Link to="/login" className="text-black dark:text-white hover:text-cyan-400">
            Login
          </Link>

          <Link to="/register" className="text-black dark:text-white hover:text-cyan-400">
            Register
          </Link>

        </div>


        {/* Right side */}

        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
          onClick={toggleTheme}
          className="
            w-11 h-11 rounded-full
            flex items-center justify-center
            bg-red-100 dark:bg-slate-900
            border border-gray-200 dark:border-yellow-400
            shadow-md hover:shadow-lg
            hover:scale-110
            transition-all duration-300
            cursor-pointer
          "
        >
          {theme === "dark" ? (
            <Sun
              size={25}
              className="
                text-yellow-400
                transition-transform duration-300
                hover:rotate-180
              "
            />
          ) : (
            <Moon
              size={25}
              className="
                text-slate-700
                transition-transform duration-300
                hover:-rotate-120
              "
            />
          )}
        </button>


          {/* Desktop CTA */}

          <button
            className="
            hidden md:block
            px-5 py-2 rounded-xl
            bg-gradient-to-r from-cyan-500 to-blue-600
            text-white
            hover:scale-105
            transition-all
            cursor-pointer
            "
          >
            Get Started
          </button>


          {/* Mobile Hamburger */}

          <button
            className="md:hidden text-2xl text-gray-900 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>
      </div>


      {/* Mobile Menu */}

      {menuOpen && (
        <div
          className="
          md:hidden
          px-6 pb-6
          bg-white dark:bg-[#0f172a]
          border-t border-gray-200 dark:border-gray-700
          "
        >
          <div className="flex flex-col gap-5 mt-5">

            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>

            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>

            <Link to="/register" onClick={() => setMenuOpen(false)}>
              Register
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