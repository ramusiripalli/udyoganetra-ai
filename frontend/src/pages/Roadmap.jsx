import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaRoad,
  FaRocket,
} from "react-icons/fa";

const Roadmap = () => {
  const [currentSkills, setCurrentSkills] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [durationDays, setDurationDays] = useState("");

  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState(null);

  const handleGenerateRoadmap = async () => {
    if (!currentSkills || !targetRole || !durationDays) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setRoadmap(null);

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/roadmap/generate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            currentSkills,
            targetRole,
            durationDays,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setRoadmap(data.roadmap);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-6">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
        mb-6
        rounded-2xl
        p-6
        bg-white dark:bg-[#111827]
        border border-slate-200 dark:border-slate-700
        shadow-lg
      "
      >
        <div className="flex items-center gap-4">

          <div
            className="
            w-14 h-14 rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-pink-600
            flex items-center justify-center
            text-white text-2xl
          "
          >
            <FaRocket />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              <span className="text-pink-600">AI Career Roadmap</span>
            </h1>

            <p className="mt-1 text-slate-500 dark:text-gray-400">
              Let AI design your learning journey.
            </p>
          </div>
        </div>
      </motion.div>

      {/* FORM */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="
        rounded-2xl
        p-6
        bg-white dark:bg-[#111827]
        border border-pink-500 dark:border-pink-700
        shadow-lg
      "
      >
        <div className="grid md:grid-cols-2 gap-4">

          {/* skills */}
          <div className="md:col-span-2">
            <label className="font-medium">
              Current Skills
            </label>

            <textarea
              rows="2"
              value={currentSkills}
              onChange={(e) =>
                setCurrentSkills(e.target.value)
              }
              placeholder="React, JavaScript, Node.js..."
              className="
              mt-2 w-full p-3 rounded-xl
              border border-slate-300
              dark:border-slate-600
              bg-slate-50 dark:bg-slate-900
              outline-none text-sm
            "
            />
          </div>

          {/* role */}
          <div>
            <label className="font-medium">
              Target Role
            </label>

            <input
              value={targetRole}
              onChange={(e) =>
                setTargetRole(e.target.value)
              }
              placeholder="Frontend Engineer"
              className="
              mt-2 w-full p-3 rounded-xl
              border border-slate-300
              dark:border-slate-600
              bg-slate-50 dark:bg-slate-900
              outline-none text-sm
            "
            />
          </div>

          {/* duration */}
          <div>
            <label className="font-medium">
              Duration (Days)
            </label>

            <input
              type="number"
              value={durationDays}
              onChange={(e) =>
                setDurationDays(e.target.value)
              }
              placeholder="120"
              className="
              mt-2 w-full p-3 rounded-xl
              border border-slate-300
              dark:border-slate-600
              bg-slate-50 dark:bg-slate-900
              outline-none text-sm
            "
            />
          </div>
        </div>

        <button
          onClick={handleGenerateRoadmap}
          className="
          mt-5 w-full py-3 rounded-xl
          bg-gradient-to-r
          from-purple-600
          via-violet-600
          to-pink-600
          text-white font-semibold
          shadow-lg shadow-purple-500/20
          hover:scale-[1.01]
          transition
          flex items-center justify-center gap-3
        "
        >
          <FaRoad />

          {loading
            ? "Generating AI Roadmap..."
            : "Generate Roadmap"}
        </button>
      </motion.div>

      {/* RESULT */}
     {/* RESULT */}
{roadmap && (
  <div className="mt-10">

    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl md:text-3xl font-bold text-green-500">
        Your Learning Plan ✨
      </h2>

      <div
        className="
        px-4 py-2 rounded-xl
        bg-black
        text-yellow-600 dark:text-yellow-400
        text-sm font-medium
      "
      >
        AI Generated
      </div>
    </div>

    <div className="space-y-5">

      {roadmap.roadmap?.map((phase, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -3,
            scale: 1.01,
          }}
          className="
          rounded-2xl
          p-6
          bg-white dark:bg-[#111827]
          border border-slate-200 dark:border-slate-700
          shadow-lg
          transition-all
        "
        >
          {/* top section */}
          <div
            className="
            flex flex-col md:flex-row
            justify-between md:items-center
            gap-4 mb-5
          "
          >
            <div>
              <p className="text-sm text-purple-500 font-semibold">
                {phase.phase}
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-1">
                {phase.title}
              </h3>
            </div>

            <div
              className="
              px-4 py-2 rounded-xl
              bg-slate-100 dark:bg-slate-800
              text-sm font-medium
              w-fit
            "
            >
              ⏳ {phase.duration}
            </div>
          </div>

          {/* topics */}
          <div className="grid md:grid-cols-2 gap-3">

            {phase.topics?.map((topic, i) => (
              <div
                key={i}
                className="
                p-3 rounded-xl
                bg-slate-100 dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                flex items-center gap-3
              "
              >
                <div
                  className="
                  w-7 h-7 rounded-full border-2
                  bg-white 
                  flex items-center justify-center
                  text-green-500 text-xl font-extrabold
                  flex-shrink-0
                "
                >
                  ✓
                </div>

                <span className="text-sm font-medium">
                  {topic}
                </span>
              </div>
            ))}

          </div>

        </motion.div>
      ))}

    </div>
  </div>
)}
    </div>
  );
};

export default Roadmap;