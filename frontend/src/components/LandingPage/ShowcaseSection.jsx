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

        <p className="mt-5 text-gray-600 dark:text-slate-200 text-base sm:text-lg leading-relaxed">

          Access opportunities from top hiring platforms in one place.
          No more switching between multiple job portals — everything
          you need for your career journey is available inside UdyogaNetra AI.

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
            bg-white
            dark:bg-slate-900/30
            border border-purple-200 dark:border-purple-600/30
            shadow-md hover:shadow-xl
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
              bg-gradient-to-r
              from-cyan-500/5
              to-purple-500/5
              "
            ></div>

            {/* Badge */}

            <div
              className="
              absolute top-3 right-3
              text-[10px] sm:text-xs
              px-2 py-1
              rounded-full bg-white border
              dark:bg-cyan-500/10
              text-yellow-500
              font-medium
              "
            >
              Source
            </div>

            {/* Text */}

            <div className="relative z-10 flex items-center justify-center min-h-[90px]">

              <h3
                className="
                text-sm sm:text-base lg:text-lg
                font-semibold
                text-gray-900 dark:text-white
                text-center
                leading-relaxed
                group-hover:text-pink-500
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
          border-right: 2px solid cyan;
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
          50% { border-color: #06b6d4; }
        }
      `}</style>
    </section>
  );
};

export default ShowcaseSection;