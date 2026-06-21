import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCloudUploadAlt,
  FaLightbulb,
  FaSpinner,
} from "react-icons/fa";

const JobMatch = () => {
  const [file, setFile] = useState(null);

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  const [error, setError] =
    useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert("Upload Resume PDF");
      return;
    }

    try {
      setLoading(true);
      setResult(null);
      setError("");

      const formData =
        new FormData();

      formData.append(
        "resume",
        file
      );

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/jobmatch/analyze`,
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
        data.jobMatch
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
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        className="
        rounded-3xl p-8 mb-8
        bg-white dark:bg-slate-800
        border border-slate-200 dark:border-slate-700
        shadow-lg
      "
      >
        <h1 className="text-3xl font-bold">
          AI Job Match 💼
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Upload your resume and let AI find the best matching jobs.
        </p>
      </motion.div>

      {/* UPLOAD CARD */}
      <div
        className="
        rounded-3xl p-8 mb-8
        bg-white dark:bg-slate-800
        border border-slate-200 dark:border-slate-700
        shadow-lg
      "
      >
        <label
          className="
          border-2 border-dashed
          border-purple-400
          rounded-2xl
          py-10
          flex flex-col items-center
          cursor-pointer
        "
        >
          <FaCloudUploadAlt className="text-5xl text-purple-500" />

          <p className="mt-4 font-medium">
            Upload Resume PDF
          </p>

          <input
            hidden
            type="file"
            accept=".pdf"
            onChange={
              handleFileChange
            }
          />
        </label>

        {file && (
          <p className="mt-4 text-green-500">
            Selected: {file.name}
          </p>
        )}

        <button
          onClick={
            handleAnalyze
          }
          className="
          mt-6 w-full py-4 rounded-xl
          bg-gradient-to-r
          from-purple-600 to-pink-600
          text-white font-semibold
        "
        >
          {loading
            ? "Analyzing Resume..."
            : "Find Matching Jobs"}
        </button>

        {/* Loading */}
        {loading && (
          <div className="mt-5 text-center">

            <FaSpinner className="animate-spin mx-auto text-3xl text-purple-500" />

            <p className="mt-3 text-sm text-gray-500">
              AI is analyzing your profile...
            </p>

            <p className="text-purple-500 text-sm mt-2">
              Please wait 20–40 seconds ☕
            </p>
          </div>
        )}

        {error && (
          <p className="mt-4 text-red-500">
            {error}
          </p>
        )}
      </div>

      {/* RESULTS */}
      {result && (
        <div className="space-y-8">

          {/* MATCHED JOBS */}
          <div>

            <h2 className="text-2xl font-bold mb-5">
              Top Matching Jobs 🚀
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {result.matchedJobs?.map(
                (job, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -3,
                    }}
                    className="
                    rounded-2xl p-6
                    bg-white dark:bg-slate-800
                    border border-slate-200 dark:border-slate-700
                    shadow-lg
                  "
                  >
                    <div className="flex justify-between">

                      <div>

                        <h3 className="text-xl font-bold">
                          {job.role}
                        </h3>

                        <p className="text-gray-500 mt-1">
                          {job.company}
                        </p>

                      </div>

                      <div
                        className="
                        px-3 py-2 rounded-xl
                        bg-green-100 dark:bg-slate-700
                        text-green-600
                        font-semibold
                      "
                      >
                        {job.matchScore}%
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-gray-500">
                      {job.reason}
                    </p>

                  </motion.div>
                )
              )}

            </div>
          </div>

          {/* MISSING SKILLS */}
          <div
            className="
            rounded-2xl p-6
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
          "
          >
            <h2 className="text-xl font-bold mb-4">
              Missing Skills 📌
            </h2>

            <div className="flex flex-wrap gap-3">

              {result.missingSkills?.map(
                (
                  skill,
                  index
                ) => (
                  <div
                    key={index}
                    className="
                    px-4 py-2 rounded-xl
                    bg-yellow-100 dark:bg-slate-700
                    text-sm
                  "
                  >
                    {skill}
                  </div>
                )
              )}

            </div>
          </div>

          {/* CAREER ADVICE */}
          <div
            className="
            rounded-2xl p-6
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
          "
          >
            <h2 className="text-xl font-bold mb-4">
              Career Advice 💡
            </h2>

            <div className="space-y-3">

              {result.careerAdvice?.map(
                (
                  advice,
                  index
                ) => (
                  <div
                    key={index}
                    className="flex gap-3"
                  >
                    <FaLightbulb className="text-purple-500 mt-1" />

                    <p>
                      {advice}
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

export default JobMatch;