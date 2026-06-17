import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 sm:px-8 bg-gray-50 dark:bg-slate-950 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute left-10 top-10 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full"></div>
      <div className="absolute right-10 bottom-10 w-52 h-52 bg-purple-500/10 blur-3xl rounded-full"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          Start Building Your Career With

          <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text mt-2">
            AI Powered Guidance
          </span>
        </h2>

        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Stop guessing your career path. Let AI guide you toward better jobs, stronger skills, and faster growth.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <Link
            to="/register"
            className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:scale-105 transition duration-300 shadow-lg"
          >
            Create Account
          </Link>

          <Link
            to="/login"
            className="px-8 py-3 rounded-full border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 transition duration-300"
          >
            Login
          </Link>

        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;