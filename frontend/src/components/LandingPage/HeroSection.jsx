import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative px-6 sm:px-8 py-20 md:py-28 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Left Content */}
      <motion.div
        className="w-full md:w-1/2 relative z-10"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-cyan-500 font-semibold mb-3 tracking-wide">
          AI Powered Career Platform 🚀
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">

          Find Your Dream Job With

          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text mt-2">
            Intelligent AI Guidance
          </span>
        </h1>

        <p className="mt-6 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
          UdyogaNetra helps job seekers discover personalized opportunities,
          analyze resumes, identify skill gaps, prepare for interviews,
          and accelerate career growth using Artificial Intelligence.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <Link
            to="/register"
            className="px-7 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg hover:scale-105 transition duration-300"
          >
            Get Started
          </Link>

          <Link
            to="/features"
            className="px-7 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition duration-300"
          >
            Explore AI Tools
          </Link>

        </div>
      </motion.div>

      {/* Right Side Card */}
      <motion.div
        className="w-full md:w-1/2 relative z-10"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="rounded-2xl p-8 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-2xl backdrop-blur-xl">

          <h3 className="text-2xl font-bold text-cyan-500 mb-6">
            AI Career Analysis
          </h3>

          <div className="space-y-5">

            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Resume ATS Score
              </span>
              <span className="font-bold text-green-500">92%</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Best Role Match
              </span>
              <span className="font-bold text-blue-500">
                Frontend Engineer
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Missing Skills
              </span>
              <span className="font-bold text-red-400">
                Node.js, System Design
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">
                Interview Readiness
              </span>
              <span className="font-bold text-purple-400">84%</span>
            </div>

          </div>

          <div className="mt-8 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <p className="text-sm text-cyan-500 text-center">
              AI is analyzing your career growth opportunities...
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;