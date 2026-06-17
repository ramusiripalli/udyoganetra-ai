import { motion } from "framer-motion";

const aiTools = [
  "Resume Analyzer",
  "ATS Score Checker",
  "AI Job Matching",
  "Interview Simulator",
  "Skill Gap Detection",
  "Career Roadmap",
  "Salary Insights",
  "Smart Job Tracker",
];

const ShowcaseSection = () => {
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
          AI Tools Built For <span className="text-cyan-500">Job Seekers</span>
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Powerful AI modules designed to help users grow faster and make smarter career decisions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

          {aiTools.map((tool, index) => (
            <motion.div
              key={index}
              className="
                p-6 rounded-xl
                bg-gray-50 dark:bg-slate-800
                border border-gray-200 dark:border-slate-700
                shadow-lg hover:shadow-xl
                hover:-translate-y-2
                transition-all duration-300
              "
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >

              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4 flex items-center justify-center text-black font-bold">
                AI
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                {tool}
              </h3>

            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
};

export default ShowcaseSection;