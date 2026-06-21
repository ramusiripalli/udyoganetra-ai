import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCloudUploadAlt,
  FaRocket,
  FaSpinner,
} from "react-icons/fa";

const SkillGap = () => {
  const [file, setFile] =
    useState(null);

  const [targetCompany,
    setTargetCompany] =
    useState("");

  const [targetRole,
    setTargetRole] =
    useState("");

  const [loading,
    setLoading] =
    useState(false);

  const [result,
    setResult] =
    useState(null);

  const [error,
    setError] =
    useState("");

  const handleAnalyze =
    async () => {
      if (
        !file ||
        !targetCompany ||
        !targetRole
      ) {
        alert(
          "Please fill all fields"
        );
        return;
      }

      try {
        setLoading(true);
        setError("");
        setResult(null);

        const formData =
          new FormData();

        formData.append(
          "resume",
          file
        );

        formData.append(
          "targetCompany",
          targetCompany
        );

        formData.append(
          "targetRole",
          targetRole
        );

        const response =
          await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/api/skillgap/analyze`,
            {
              method: "POST",
              body: formData,
            }
          );

        const data =
          await response.json();

        console.log(data);

        if (!data.success) {
          setError(
            data.message
          );
          return;
        }

        setResult(
          data.skillGap
        );

      } catch (error) {
        console.log(error);

        setError(
          "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
        rounded-3xl p-8 mb-8
        bg-white dark:bg-slate-900/50
        border border-slate-200 dark:border-slate-700
        shadow-lg
      "
      >
        <h1 className="text-3xl font-bold">
          Skill Gap Analyzer 🧠
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Compare your resume with dream company requirements.
        </p>
      </motion.div>

      {/* FORM */}
      <div
        className="
        rounded-3xl p-8 mb-8
        bg-white dark:bg-slate-900/50
        border border-slate-200 dark:border-slate-700
        shadow-lg
      "
      >
        {/* Upload */}
        <label
          className="
          border-2 border-dashed
          border-purple-400
          rounded-2xl
          py-8 mb-5
          flex flex-col items-center
          cursor-pointer
        "
        >
          <FaCloudUploadAlt className="text-4xl text-purple-500" />

          <p className="mt-3">
            Upload Resume PDF
          </p>

          <input
            hidden
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(
                e.target.files[0]
              )
            }
          />
        </label>

        {file && (
          <p className="text-green-500 mb-4">
            Selected: {file.name}
          </p>
        )}

        {/* Inputs */}
        <div className="grid md:grid-cols-2 gap-4">

          <input
            placeholder="Dream Company (Google)"
            value={targetCompany}
            onChange={(e) =>
              setTargetCompany(
                e.target.value
              )
            }
            className="
            p-4 rounded-xl border
            dark:bg-slate-900
          "
          />

          <input
            placeholder="Target Role (SDE 1)"
            value={targetRole}
            onChange={(e) =>
              setTargetRole(
                e.target.value
              )
            }
            className="
            p-4 rounded-xl border
            dark:bg-slate-900
          "
          />

        </div>

        <button
          onClick={handleAnalyze}
          className="
          mt-6 w-full py-4 rounded-xl
          bg-gradient-to-r
          from-purple-600 to-pink-600
          text-white font-semibold
        "
        >
          {loading
            ? "Analyzing..."
            : "Analyze Skill Gap"}
        </button>

        {/* Loading */}
        {loading && (
          <div className="mt-5 text-center">

            <FaSpinner className="animate-spin mx-auto text-3xl text-purple-500" />

            <p className="mt-3 text-sm text-gray-500">
              AI comparing your skills...
            </p>

            <p className="text-purple-500 text-sm mt-2">
              Please wait 20–40 seconds ☕
            </p>
          </div>
        )}

        {error && (
          <p className="text-red-500 mt-4">
            {error}
          </p>
        )}
      </div>

      {/* RESULT */}
      {result && (
        <div className="space-y-8">

          {/* Score */}
          <div
            className="
            rounded-2xl p-6
            bg-white dark:bg-slate-900/50
            border border-slate-200 dark:border-slate-700
          "
          >
            <h2 className="font-bold mb-3">
              Readiness Score 🚀
            </h2>

            <div className="text-5xl font-bold text-purple-500">
              {result.readinessScore}%
            </div>
          </div>

          {/* Existing Skills */}
          <div
            className="
            rounded-2xl p-6
            bg-white dark:bg-slate-900/50
            border border-slate-200 dark:border-slate-700
          "
          >
            <h2 className="font-bold mb-4">
              Skills You Have ✅
            </h2>

            <div className="flex flex-wrap gap-3">

              {result.existingSkills?.map(
                (skill, i) => (
                  <div
                    key={i}
                    className="
                    px-4 py-2 rounded-xl
                    bg-green-100 dark:bg-slate-700
                  "
                  >
                    {skill}
                  </div>
                )
              )}

            </div>
          </div>

          {/* Missing */}
          <div
            className="
            rounded-2xl p-6
            bg-white dark:bg-slate-900/50
            border border-slate-200 dark:border-slate-700
          "
          >
            <h2 className="font-bold mb-4">
              Missing Skills ⚠️
            </h2>

            <div className="flex flex-wrap gap-3">

              {result.missingSkills?.map(
                (skill, i) => (
                  <div
                    key={i}
                    className="
                    px-4 py-2 rounded-xl
                    bg-yellow-100 dark:bg-slate-700
                  "
                  >
                    {skill}
                  </div>
                )
              )}

            </div>
          </div>

          {/* Priority */}
          <div
            className="
            rounded-2xl p-6
            bg-white dark:bg-slate-900/50
            border border-slate-200 dark:border-slate-700
          "
          >
            <h2 className="font-bold mb-4">
              Priority Learning Path 📚
            </h2>

            <div className="space-y-3">

              {result.priorityLearning?.map(
                (item, i) => (
                  <div
                    key={i}
                    className="flex gap-3"
                  >
                    <FaRocket className="text-purple-500 mt-1" />

                    <p>
                      {item}
                    </p>
                  </div>
                )
              )}

            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default SkillGap;