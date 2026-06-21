import { motion } from "framer-motion";

const showcaseText = [
  "LinkedIn Jobs",
  "Naukri Listings",
  "Indeed Alerts",
  "Hirect Hiring",
  "Wellfound (AngelList)",
  "Y Combinator Startups",
  "Instahyre",
  "MAANG Openings",
  "Internshala",
  "FreshersWorld",
  "CutShort.io",
  "Toptal / Fiverr / Upwork",
];

const ShowcaseSection = () => {
  return (
    <section
      className=" py-24 px-6 sm:px-8 bg-white dark:bg-black
      transition-all duration-500 "
    >
      {/* Heading */}

      <div className="text-center mb-14 max-w-4xl mx-auto">

        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">

          One Platform.{" "}
          <span className="bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-600 text-transparent bg-clip-text">All Opportunities.</span>

        </h2>

        <p className="mt-5 text-gray-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">

          Access opportunities from top hiring platforms in one place.
          No more switching between multiple job portals — everything
          you need for your career journey is available inside <span className="text-pink-400">UdyogaNetra AI</span>.

        </p>
      </div>

      {/* Cards */}

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {showcaseText.map((text, index) => (
          <motion.div
            key={index}
            className="
            group
            relative
            rounded-2xl
            p-5
            bg-slate-100/90
            dark:bg-slate-900/90
            border border-purple-200 dark:border-purple-100/60
            shadow-md hover:shadow-xl dark:hover:shadow-slate-800
            transition-all duration-500
            hover:-translate-y-2
            overflow-hidden
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            {/* Hover Glow */}

            <div
              className="
              absolute inset-0
              opacity-0 group-hover:opacity-100
              transition duration-500
              bg-linear-to-r
              from-purple-500/5
              to-pink-500/5
              "
            ></div>


            {/* Text */}

            <div className="relative z-10 flex items-center justify-center min-h-[90px]">

              <h3
                className="
                text-sm sm:text-base lg:text-lg
                font-semibold
                text-gray-900 dark:text-white
                text-center
                leading-relaxed
                group-hover:text-orange-400
                transition duration-300
                typewriter
                "
              >
                {text}
              </h3>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Animations */}

      <style>{`
        .typewriter {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid orange;
          animation: typing 6s steps(20) infinite, blink 1s step-end infinite;
        }

        @keyframes typing {
          0% { width: 0 }
          40% { width: 100% }
          60% { width: 100% }
          100% { width: 0 }
        }

        @keyframes blink {
          0%, 100% { border-color: transparent }
          50% { border-color: orange; }
        }
      `}</style>
    </section>
  );
};

export default ShowcaseSection;