import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const aiTools = [
  {
    title: "Resume ATS Analyzer",
    desc: "Upload resume and get ATS score, weaknesses and improvements instantly.",
    icon: "📄",
    path: "/resume-analyzer",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Interview Preparation",
    desc: "Generate 50 AI interview questions based on your tech stack.",
    icon: "🎤",
    path: "/interview-prep",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "AI Job Match",
    desc: "Upload resume and discover jobs matching your profile instantly.",
    icon: "💼",
    path: "/job-match",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Skill Gap Analysis",
    desc: "Find missing skills needed by top companies like Google, Amazon.",
    icon: "🧠",
    path: "/skill-gap",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Career Roadmap",
    desc: "Generate personalized AI roadmap for your dream career.",
    icon: "🛣️",
    path: "/roadmap",
    gradient: "from-pink-500 to-purple-600",
  },
];

const futureFeatures = [
  {
    title: "Recruiter Dashboard",
    desc: "Recruiters can post verified jobs directly on platform.",
    icon: "👨‍💼",
  },
  {
    title: "Curated Daily Jobs",
    desc: "Daily handpicked jobs from LinkedIn, startups and hiring portals.",
    icon: "🔥",
  },
  {
    title: "AI Resume Builder",
    desc: "Create ATS optimized resumes with AI assistance instantly.",
    icon: "✍️",
  },
];

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="space-y-10">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
        rounded-3xl p-8 shadow-xl
        bg-white dark:bg-slate-900/50
        border border-slate-200 dark:border-slate-700
      "
      >
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Welcome Back 👋{" "}
          <span
            className="
            bg-linear-to-r
            from-purple-500 to-pink-600
            bg-clip-text text-transparent
          "
          >
            {user?.name || "User"}
          </span>
        </h1>

        <p className="mt-4 text-lg text-slate-700 dark:text-gray-200 leading-8">
          Your career growth depends on how intelligently you learn, practice and apply.
          <span className="text-orange-500 font-semibold">
            {" "}AI helps you move faster than competition.
          </span>
        </p>
      </motion.div>


      {/* WHY AI SECTION */}
      <div>

        <h2 className="text-2xl font-bold mb-6">
          Why AI Is Important For Your Career 🚀
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <motion.div
            whileHover={{ y: -5 }}
            className="
            bg-white dark:bg-slate-900/50
            p-6 rounded-3xl shadow-lg
            border border-slate-200 dark:border-slate-700
          "
          >
            <h3 className="font-semibold text-lg mb-3">
              Faster Learning
            </h3>

            <p className="text-sm text-green-500 leading-7">
              AI creates personalized learning plans so you can learn technologies faster.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="
            bg-white dark:bg-slate-900/50
            p-6 rounded-3xl shadow-lg
            border border-slate-200 dark:border-slate-700
          "
          >
            <h3 className="font-semibold text-lg mb-3">
              Better Interview Preparation
            </h3>

            <p className="text-sm text-green-500 leading-7">
              Practice AI generated company level interview questions before real interviews.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="
            bg-white dark:bg-slate-900/50
            p-6 rounded-3xl shadow-lg
            border border-slate-200 dark:border-slate-700
          "
          >
            <h3 className="font-semibold text-lg mb-3">
              Career Growth
            </h3>

            <p className="text-sm text-green-500 leading-7">
              AI identifies skill gaps and tells what companies actually expect.
            </p>
          </motion.div>

        </div>
      </div>


      {/* AI TOOLS */}
      <div>

        <h2 className="text-2xl font-bold mb-6">
          AI Career Tools
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {aiTools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
              bg-white dark:bg-slate-900/50
              p-6 rounded-3xl shadow-xl
              border border-slate-200 dark:border-slate-700
            "
            >
              <div
                className={`
                w-14 h-14 rounded-2xl
                bg-gradient-to-r ${tool.gradient}
                flex items-center justify-center
                text-2xl mb-5
              `}
              >
                {tool.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {tool.title}
              </h3>

              <p className="text-sm text-slate-500 dark:text-gray-300 leading-7">
                {tool.desc}
              </p>

              <Link to={tool.path}>
                <button
                  className="
                  mt-5 w-full py-3 rounded-xl
                  bg-gradient-to-r
                  from-purple-600 to-pink-600
                  text-white font-medium
                  transition-all hover:scale-[1.02]
                "
                >
                  Open Tool
                </button>
              </Link>
            </motion.div>
          ))}

        </div>
      </div>


      {/* FUTURE FEATURES */}

      <div>

        <h2 className="text-2xl font-bold mb-6 text-red-500">
          Future AI Features 🚀
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {futureFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="
              bg-white dark:bg-slate-900/50
              p-6 rounded-3xl shadow-lg
              border border-slate-200 dark:border-slate-700
            "
            >
              <div className="text-3xl mb-4">
                {feature.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 leading-7">
                {feature.desc}
              </p>

              <span
                className="
                mt-4 inline-block
                text-xs px-3 py-1 rounded-full
                bg-yellow-100 text-green-700
              "
              >
                Coming Soon
              </span>
            </motion.div>
          ))}

        </div>
      </div>


      {/* FINAL SECTION */}

      <motion.div
        whileHover={{ scale: 1.01 }}
        className="
        rounded-3xl p-8
        bg-gradient-to-r
        from-purple-600 to-pink-700
        text-white shadow-xl
      "
      >
        <h2 className="text-2xl font-bold">
          The Future Of Careers Is AI Powered ⚡
        </h2>

        <p className="mt-4 leading-8 text-indigo-100">
          UdyogaNetra AI is building a complete career ecosystem.

          Learn faster.

          Practice smarter.

          Get matched to better jobs.

          Connect directly with recruiters.

          Build your dream career with AI assistance.
        </p>
      </motion.div>

    </div>
  );
};

export default Dashboard;