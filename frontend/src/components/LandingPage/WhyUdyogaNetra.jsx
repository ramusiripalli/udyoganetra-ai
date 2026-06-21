import { motion } from "framer-motion";

const problems = [
  {
    title: "Jobs Are Scattered Across Platforms",
    desc: "Candidates waste time switching between multiple job portals, company career pages, and platforms instead of discovering all opportunities in one place."
  },
  {
    title: "No Personalized Guidance",
    desc: "Most job platforms only list openings but do not help candidates understand which roles truly match their skills and career goals."
  },
  {
    title: "Poor Resume Quality",
    desc: "Many candidates fail ATS screening because resumes are not optimized according to industry standards and recruiter expectations."
  },
  {
    title: "Lack of Interview Preparation",
    desc: "Job seekers often struggle in interviews because they do not know what technical or HR questions to prepare beforehand."
  }
];

const WhyUdyogaNetra = () => {
  return (
    <section className="py-20 px-6 sm:px-8 bg-slate-100 dark:bg-slate-900/90">

      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Why <span className="bg-linear-to-r from-purple-600  to-pink-600 text-transparent bg-clip-text">UdyogaNetra</span> ?
        </h2>

        <p className="mt-4 text-black dark:text-white max-w-3xl mx-auto">
          Getting a job is not just about applying. UdyogaNetra uses <span className="text-green-400 text-xl">AI</span> to help candidates discover opportunities, build better resumes, prepare for interviews, and grow their careers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

          {problems.map((item, index) => (
            <motion.div
              key={index}
              className="p-7 rounded-2xl bg-white dark:bg-black/30 border-2 border-gray-500 dark:border-pink-100/50 shadow-lg hover:-translate-y-2 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >

              <div className="w-12 h-12 rounded-full bg-linear-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
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