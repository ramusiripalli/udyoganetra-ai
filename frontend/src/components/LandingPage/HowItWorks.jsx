import { motion } from "framer-motion";
import {
  FaUpload,
  FaBrain,
  FaSearch,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload className="text-3xl text-yellow-500" />,
    title: "Upload Resume",
    desc: "Start by uploading your resume and career profile into the platform.",
  },
  {
    icon: <FaBrain className="text-3xl text-yellow-500" />,
    title: "AI Analyzes Profile",
    desc: "Our AI studies your strengths, weaknesses, and overall career readiness.",
  },
  {
    icon: <FaSearch className="text-3xl text-yellow-500" />,
    title: "Get Smart Recommendations",
    desc: "Receive personalized job suggestions and identify missing skills instantly.",
  },
  {
    icon: <FaRocket className="text-3xl text-yellow-500" />,
    title: "Prepare & Apply",
    desc: "Improve your profile, prepare interviews, and apply with confidence.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 sm:px-8 bg-slate-100 dark:bg-slate-900/90 relative overflow-hidden">

      <motion.div
        className="relative z-10 max-w-7xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          How It <span className="text-pink-500">Works</span>
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A simple AI-powered process designed to help job seekers become more prepared and career-ready.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="
                p-6 rounded-2xl
                bg-white dark:bg-black/40
                border border-gray-200 dark:border-slate-400/50
                shadow-lg hover:-translate-y-2
                transition duration-300
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
              viewport={{ once: true }}
            >

              <div className="mb-4 flex justify-center">
                {step.icon}
              </div>

              <div className="w-8 h-8 rounded-full bg-linear-to-r from-purple-600 to-pink-400 text-white font-bold flex items-center justify-center mx-auto mb-4">
                {index + 1}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {step.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
};

export default HowItWorks;