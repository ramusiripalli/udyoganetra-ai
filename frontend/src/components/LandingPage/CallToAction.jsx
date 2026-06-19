import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 sm:px-8 bg-white dark:bg-black relative overflow-hidden">
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          Start Building Your Career With

          <span className="block bg-gradient-to-r from-cyan-400 via-purple-600 to-pink-600 text-transparent bg-clip-text mt-2">
            AI Powered Guidance
          </span>
        </h2>

        <p className="mt-6 text-gray-600 dark:text-gray-200 text-lg max-w-2xl mx-auto">
          Stop guessing your career path. Let AI guide you toward better jobs, stronger skills, and faster growth.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <Link
            to="/register"
            className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 transition duration-300 shadow-lg"
          >
            Create Account
          </Link>

          <Link
            to="/login"
            className="px-8 py-3 rounded-full border border-gray-300 dark:border-red-700 text-gray-900 dark:text-white hover:bg-green-600 dark:hover:bg-green-800 transition duration-300"
          >
            Login
          </Link>

        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;