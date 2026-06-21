import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCloudUploadAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaLightbulb,
  FaSpinner,
  FaFilePdf,
} from "react-icons/fa";

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyzeResume = async () => {
    if (!file) return alert("Please upload PDF");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);
      setAnalysis(null);

      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/resume/analyze`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setAnalysis(data.analysis);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Resume ATS Analyzer 🚀
        </h1>

        <p className="mt-2 text-slate-500 dark:text-gray-400">
          Upload your resume and let AI evaluate your ATS score instantly.
        </p>
      </div>

      {/* Upload Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          bg-white dark:bg-slate-900/10
          rounded-3xl
          border border-slate-200 dark:border-slate-700
          shadow-xl
          p-6 md:p-8
        "
      >
        <label
          className="
            flex flex-col items-center justify-center
            border-2 border-dashed border-purple-500
            rounded-2xl
            py-7 md:py-10
            cursor-pointer
            hover:bg-slate-200 dark:hover:bg-black
            transition
          "
        >
          <FaCloudUploadAlt className="text-5xl text-purple-500 mb-4" />

          <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
            Drop Resume Here
          </h2>

          <p className="text-sm mt-2 text-slate-500 dark:text-gray-400">
            or click to browse PDF file
          </p>

          <input
            type="file"
            accept=".pdf"
            hidden
            onChange={handleFileChange}
          />
        </label>

        {/* Selected File */}
        {file && (
          <div
            className="
              mt-5 p-4 rounded-xl
              bg-purple-50 dark:bg-slate-900
              flex items-center gap-3
            "
          >
            <FaFilePdf className="text-red-500 text-xl" />

            <p className="text-sm font-medium text-slate-800 dark:text-white ">
              {file.name}
            </p>
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleAnalyzeResume}
          disabled={loading}
          className="
            mt-6 px-8 py-3 rounded-xl
            bg-gradient-to-r from-purple-600 to-pink-600
            text-white font-semibold
            hover:scale-105 transition
            disabled:opacity-70
          "
        >
          {loading ? "Analyzing Resume..." : "Analyze with AI"}
        </button>

        {/* Loading */}
        {loading && (
          <div className="mt-6 flex items-center gap-3">
            <FaSpinner className="animate-spin text-purple-500 text-xl" />

            <p className="text-slate-500 dark:text-gray-400">
              AI is analyzing your resume...
            </p>
          </div>
        )}
      </motion.div>

      {/* Results */}
      {analysis && (
        <div className="mt-10 space-y-6">

          {/* Top Cards */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* ATS Score */}
            <motion.div
              whileHover={{ y: -5 }}
              className="
                bg-white dark:bg-slate-800
                rounded-3xl p-8 shadow-lg
                border border-slate-200 dark:border-slate-700
              "
            >
              <h2 className="font-bold mb-5 text-lg">
                ATS Score
              </h2>

              <div className="flex items-center gap-5">
                <div
                  className="
                    w-28 h-28 rounded-full
                    border-[7px] border-pink-500
                    flex items-center justify-center
                    text-3xl font-bold text-green-500
                  "
                >
                  {analysis.atsScore}%
                </div>

                <div>
                  <p className="font-semibold text-lg">
                    Resume Quality
                  </p>

                  <p className="text-sm text-slate-500 dark:text-gray-400">
                    Good ATS compatibility
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div
              whileHover={{ y: -5 }}
              className="
                bg-white dark:bg-slate-800
                rounded-3xl p-8 shadow-lg
                border border-slate-200 dark:border-slate-700
              "
            >
              <h2 className="font-bold mb-4 text-lg">
                AI Resume Summary
              </h2>

              <p className="leading-7 text-slate-600 dark:text-gray-300">
                Strong developer profile with good technical stack,
                backend experience and solid project work.
                Resume has strong potential but needs optimization.
              </p>
            </motion.div>
          </div>

          {/* Strengths + Weaknesses */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Strengths */}
            <motion.div
              whileHover={{ y: -4 }}
              className="
                bg-white dark:bg-slate-800
                rounded-3xl p-8 shadow-lg
                border border-slate-200 dark:border-slate-700
              "
            >
              <h2 className="font-bold mb-5 text-green-500 text-lg">
                Strengths ✅
              </h2>

              {analysis.strengths?.map((item, i) => (
                <div key={i} className="mb-3 flex gap-3">
                  <FaCheckCircle className="text-green-500 mt-1" />

                  <p>{item}</p>
                </div>
              ))}
            </motion.div>

            {/* Weaknesses */}
            <motion.div
              whileHover={{ y: -4 }}
              className="
                bg-white dark:bg-slate-800
                rounded-3xl p-8 shadow-lg
                border border-slate-200 dark:border-slate-700
              "
            >
              <h2 className="font-bold mb-5 text-yellow-500 text-lg">
                Weaknesses ⚠️
              </h2>

              {analysis.weaknesses?.map((item, i) => (
                <div key={i} className="mb-3 flex gap-3">
                  <FaExclamationTriangle className="text-yellow-500 mt-1" />

                  <p>{item}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Suggestions */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
              bg-white dark:bg-slate-800
              rounded-3xl p-8 shadow-lg
              border border-slate-200 dark:border-slate-700
            "
          >
            <h2 className="font-bold mb-5 text-pink-500 text-lg">
              AI Suggestions 💡
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {analysis.suggestions?.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <FaLightbulb className="text-pink-500 mt-1" />

                  <p>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;