import { motion } from "framer-motion";
import {
  FaRobot,
  FaFileAlt,
  FaChartLine,
  FaUserTie,
  FaRoad,
  FaBriefcase,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot className="text-3xl text-cyan-500" />,
    title: "AI Job Matching",
    desc: "Get highly personalized job recommendations based on your skills, experience, and career interests.",
  },
  {
    icon: <FaFileAlt className="text-3xl text-purple-500" />,
    title: "Resume ATS Analyzer",
    desc: "Upload your resume and receive ATS score analysis with improvement suggestions instantly.",
  },
  {
    icon: <FaChartLine className="text-3xl text-blue-500" />,
    title: "Skill Gap Detection",
    desc: "Identify missing skills required for your target companies and build a stronger profile.",
  },
  {
    icon: <FaUserTie className="text-3xl text-pink-500" />,
    title: "AI Interview Prep",
    desc: "Practice AI-generated interview questions tailored to your target role and tech stack.",
  },
  {
    icon: <FaRoad className="text-3xl text-green-500" />,
    title: "Career Roadmap",
    desc: "Receive a personalized step-by-step learning roadmap to reach your dream company.",
  },
  {
    icon: <FaBriefcase className="text-3xl text-orange-400" />,
    title: "Smart Job Tracking",
    desc: "Track saved jobs, applications, interviews, and career progress in one dashboard.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 sm:px-8 bg-white dark:bg-slate-900 transition-colors">

      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Powerful <span className="text-cyan-500">AI Features</span>
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          More than job search — UdyogaNetra intelligently helps users improve
          resumes, discover opportunities, and accelerate career growth.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="
                p-7 rounded-2xl
                bg-gray-50 dark:bg-slate-800
                border border-gray-200 dark:border-slate-700
                shadow-lg hover:shadow-xl
                hover:-translate-y-2
                transition-all duration-300
              "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              <div className="mb-5 flex justify-center">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                {feature.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;