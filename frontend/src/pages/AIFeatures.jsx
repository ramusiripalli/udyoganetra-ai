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
    icon: <FaRobot className="text-xl text-white" />,
    title: "AI Job Matching",
    desc: "Intelligent recommendations that match users with the right opportunities based on skills and experience.",
    bg: "from-cyan-500 to-blue-500",
  },
  {
    icon: <FaFileAlt className="text-xl text-white" />,
    title: "Resume ATS Analyzer",
    desc: "Analyze resume quality, ATS compatibility, and receive smart improvement suggestions instantly.",
    bg: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaChartLine className="text-xl text-white" />,
    title: "Skill Gap Detection",
    desc: "Identify missing technical skills required to reach target companies and career goals.",
    bg: "from-blue-500 to-indigo-500",
  },
  {
    icon: <FaUserTie className="text-xl text-white" />,
    title: "AI Interview Prep",
    desc: "Generate role-specific interview questions and improve confidence with smart preparation.",
    bg: "from-pink-500 to-rose-500",
  },
  {
    icon: <FaRoad className="text-xl text-white" />,
    title: "Career Roadmap",
    desc: "Receive a personalized learning path designed to help candidates achieve their dream role.",
    bg: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaBriefcase className="text-xl text-white" />,
    title: "Application Tracker",
    desc: "Track applications, interviews, and career progress in one organized dashboard.",
    bg: "from-orange-500 to-yellow-500",
  },
];

const AIFeatures = () => {
  return (
    <section
      className="py-15 px-6 sm:px-8 bg-gradient-to-br  from-gray-50 to-white
      dark:from-black
      dark:to-slate-800
      transition-all duration-500
      "
    >
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}

        <div className="relative inline-block">

          <div className="absolute inset-0 blur-3xl bg-cyan-500/20 rounded-full"></div>

          <h2 className="relative text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            <span className="text-yellow-400">AI</span> Features Available Inside{" "}
            <span className="text-pink-600">Udyoga</span><span className="text-purple-600">Netra</span>
          </h2>

        </div>

        {/* Subtitle */}

        <p className="mt-6 text-gray-600 dark:text-gray-200 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
          UdyogaNetra goes beyond traditional job search by integrating
          intelligent AI-powered features that help candidates improve resumes,
          prepare for interviews, identify skill gaps, and accelerate career growth.
        </p>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="
              group
              relative
              p-6
              rounded-3xl
              bg-white
              dark:bg-slate-900
              border border-gray-200 dark:border-slate-800
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all duration-500
              overflow-hidden
              "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              {/* Badge */}

              <div
                className="absolute top-4 right-4 text-sm
                px-3 py-1
                rounded-full
                bg-white/10
                text-yellow-400 border
                font-medium
                "
              >
                AI Powered
              </div>

              {/* Hover Glow */}

              <div
                className="
                absolute inset-0
                opacity-0
                group-hover:opacity-100
                transition duration-500
                bg-gradient-to-r
                from-cyan-500/5
                to-purple-500/5
                "
              ></div>

              {/* Icon */}

              <div className="flex justify-center mb-5 relative z-10">

                <div
                  className={`
                  w-16 h-16
                  rounded-2xl
                  bg-gradient-to-r ${feature.bg}
                  flex items-center justify-center
                  shadow-lg
                  group-hover:scale-110
                  transition duration-500
                  `}
                >
                  {feature.icon}
                </div>

              </div>

              {/* Title */}

              <h3
                className="
                text-lg sm:text-xl
                font-bold
                text-gray-900
                dark:text-white
                mb-3
                relative z-10
                "
              >
                {feature.title}
              </h3>

              {/* Description */}

              <p
                className="
                text-gray-600
                dark:text-gray-400
                leading-relaxed
                text-sm sm:text-base
                relative z-10
                "
              >
                {feature.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </motion.div>
     
    </section>
    
  );
};

export default AIFeatures;