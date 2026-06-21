import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const stats = [
  {
    title: "ATS Score",
    value: "82%",
    color: "from-purple-600 to-pink-600",
    icon: "📄",
  },
  {
    title: "Jobs Applied",
    value: "12",
    color: "from-blue-600 to-cyan-500",
    icon: "💼",
  },
  {
    title: "Interviews Done",
    value: "5",
    color: "from-green-500 to-emerald-600",
    icon: "🎤",
  },
  {
    title: "Profile Strength",
    value: "85%",
    color: "from-orange-500 to-red-500",
    icon: "🚀",
  },
];

const tools = [
  {
    title: "Resume ATS Analyzer",
    desc: "Analyze your resume and improve ATS score instantly.",
    icon: "📄",
    button: "Analyze Resume",
    path: "/resume-analyzer",
  },
  {
    title: "Interview Preparation",
    desc: "Practice AI generated technical interview questions.",
    icon: "🎤",
    button: "Start Practice",
    path: "/interview-prep",
  },
  {
    title: "AI Job Match",
    desc: "Find jobs matching your skills and experience.",
    icon: "💼",
    button: "Find Jobs",
    path: "/job-match",
  },
];

const recentActivity = [
  "Resume analyzed successfully",
  "Applied to Frontend Developer role",
  "Practiced React interview questions",
];

const recommendedJobs = [
  "Frontend Developer (React.js)",
  "MERN Stack Developer",
  "Software Engineer - Node.js",
];

const Dashboard = () => {
     const { user } = useSelector((state) => state.auth);
  return (
    <div className="space-y-8">
   
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          bg-white dark:bg-slate-800
          rounded-3xl
          p-8
          border border-slate-200 dark:border-slate-700
          shadow-lg
        "
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
          Welcome Back 👋  <span className="text-pink-500">{user?.name || "User"} </span>
        </h2>

        <p className="mt-3 text-slate-500 dark:text-gray-400 text-lg">
          Your AI career assistant is ready to help you land better opportunities.
        </p>
      </motion.div>

      {/* STATS */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, scale: 1.02 }}
            className="
              bg-white dark:bg-slate-800
              p-5 rounded-2xl shadow-lg
              border border-slate-200 dark:border-slate-700
            "
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-500 dark:text-gray-400">
                  {item.title}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {item.value}
                </h3>
              </div>

              <div
                className={`
                  w-14 h-14 rounded-xl
                  bg-gradient-to-r ${item.color}
                  flex items-center justify-center
                  text-2xl
                `}
              >
                {item.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI TOOLS */}
      <div>
        <h2 className="text-2xl font-bold mb-5">
          AI Career Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                bg-white dark:bg-slate-800
                p-6 rounded-3xl shadow-lg
                border border-slate-200 dark:border-slate-700
              "
            >
              <div className="text-4xl mb-4">
                {tool.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {tool.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500 dark:text-gray-400">
                {tool.desc}
              </p>

              <Link to={tool.path}>
                <button
                  className="
                    mt-5 px-4 py-2 rounded-xl
                    bg-gradient-to-r
                    from-purple-600 to-pink-600
                    text-white text-sm
                  "
                >
                  {tool.button}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TWO COLUMN SECTION */}
      <div className="grid lg:grid-cols-2 gap-6">

        {/* RECENT ACTIVITY */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
            bg-white dark:bg-slate-800
            rounded-3xl p-6 shadow-lg
            border border-slate-200 dark:border-slate-700
          "
        >
          <h2 className="text-xl font-bold mb-4">
            Recent Activity
          </h2>

          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div
                key={i}
                className="
                  p-3 rounded-xl
                  bg-slate-100 dark:bg-slate-700
                "
              >
                ✅ {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RECOMMENDED JOBS */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
            bg-white dark:bg-slate-800
            rounded-3xl p-6 shadow-lg
            border border-slate-200 dark:border-slate-700
          "
        >
          <h2 className="text-xl font-bold mb-4">
            Recommended Jobs
          </h2>

          <div className="space-y-3">
            {recommendedJobs.map((item, i) => (
              <div
                key={i}
                className="
                  p-3 rounded-xl
                  bg-slate-100 dark:bg-slate-700
                "
              >
                🚀 {item}
              </div>
            ))}
          </div>
        </motion.div>

      </div>

    </div>
  );
};

export default Dashboard;