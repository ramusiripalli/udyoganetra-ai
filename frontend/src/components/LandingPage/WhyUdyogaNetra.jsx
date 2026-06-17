import { motion } from "framer-motion";

const problems = [
  {
    title: "Jobs Are Scattered",
    desc: "Candidates waste time switching across multiple job platforms searching for opportunities."
  },
  {
    title: "No Personalized Guidance",
    desc: "Most platforms show jobs but do not help users understand what fits their skills."
  },
  {
    title: "Poor Resume Quality",
    desc: "Many candidates fail ATS screening because resumes are not optimized correctly."
  },
  {
    title: "Lack of Interview Preparation",
    desc: "Job seekers often do not know what questions to prepare before interviews."
  }
];

const WhyUdyogaNetra = () => {
  return (
    <section className="py-20 px-6 sm:px-8 bg-gray-50 dark:bg-slate-950">

      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Why <span className="text-cyan-500">UdyogaNetra</span> ?
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Traditional job platforms help users search jobs.  
          UdyogaNetra goes beyond search by helping users grow their careers using AI.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

          {problems.map((item, index) => (
            <motion.div
              key={index}
              className="p-7 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-lg hover:-translate-y-2 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >

              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-black font-bold text-xl mb-4 mx-auto">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </motion.div>
    </section>
  );
};

export default WhyUdyogaNetra;