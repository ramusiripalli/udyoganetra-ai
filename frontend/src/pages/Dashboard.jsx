import { useState } from "react";
import { motion } from "framer-motion";

import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";

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
  {
    title: "Skill Gap Analysis",
    desc: "Discover missing skills for dream companies.",
    icon: "🧠",
    button: "Analyze Skills",
  },
  {
    title: "Career Roadmap",
    desc: "Get AI generated learning roadmap.",
    icon: "🛣",
    button: "Build Roadmap",
  },
  {
    title: "Application Tracker",
    desc: "Track your applied jobs and interviews.",
    icon: "📌",
    button: "Track Jobs",
  },
];

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-[#0f172a] transition-colors duration-300">

      <DashboardSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col lg:ml-0">

        <DashboardNavbar setIsOpen={setIsOpen} />

        <div className="p-4 md:p-8">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-5 md:p-8 border border-slate-200 dark:border-slate-700 mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Ready to accelerate your career? 🚀
            </h2>

            <p className="mt-3 text-slate-500 dark:text-gray-400">
              Use AI powered tools to improve resume, practice interviews,
              match jobs, and plan your career growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                Upload Resume
              </button>

              <button className="px-5 py-3 rounded-xl bg-slate-200 dark:bg-slate-700">
                Practice Interview
              </button>

              <button className="px-5 py-3 rounded-xl bg-slate-200 dark:bg-slate-700">
                Find Jobs
              </button>
            </div>
          </motion.div>

          {/* TOOLS */}
          <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
            AI Career Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  boxShadow: "0 10px 30px rgba(168,85,247,0.2)",
                }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700"
              >
                <div className="text-3xl mb-3">{tool.icon}</div>

                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                  {tool.title}
                </h3>

                <p className="text-sm mb-5 text-slate-500 dark:text-gray-400">
                  {tool.desc}
                </p>

                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm">
                  {tool.button}
                </button>
              </motion.div>
            ))}
          </div>

          {/* ACTIVITY */}
          <div className="mt-10 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
              Recent Activity
            </h2>

            <p className="text-slate-500 dark:text-gray-400">
              No activity yet. Start using AI tools.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;