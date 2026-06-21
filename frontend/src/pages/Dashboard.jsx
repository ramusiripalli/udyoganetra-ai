import { motion } from "framer-motion";

const tools = [
  {
    title: "Resume ATS Analyzer",
    desc: "Analyze your resume and improve ATS compatibility.",
    icon: "📄",
    button: "Upload Resume",
  },
  {
    title: "Interview Preparation",
    desc: "Practice role-based technical interview questions.",
    icon: "🎤",
    button: "Start Practice",
  },
  {
    title: "AI Job Match",
    desc: "Find jobs based on your skills and experience.",
    icon: "💼",
    button: "Find Jobs",
  },
];

const Dashboard = () => {
  return (
    <div>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 mb-8"
      >
        <h2 className="text-3xl font-bold">
          Ready to accelerate your career? 🚀
        </h2>

        <p className="mt-3 text-slate-500 dark:text-gray-400">
          Use AI powered tools to improve resume,
          practice interviews and match jobs.
        </p>
      </motion.div>

      {/* TOOLS */}
      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl"
          >
            <div className="text-3xl">
              {tool.icon}
            </div>

            <h3 className="mt-3 font-semibold">
              {tool.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {tool.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;