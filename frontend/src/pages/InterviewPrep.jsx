import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSpinner,
} from "react-icons/fa";

const InterviewPrep = () => {
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [difficulty, setDifficulty] =
    useState("medium");

  const [questions, setQuestions] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [page, setPage] = useState(1);

  const questionsPerPage = 10;

  const handleGenerateQuestions =
    async () => {
      if (!skills || !experience) {
        alert("Please fill all fields");
        return;
      }

      try {
        setLoading(true);
        setError("");
        setQuestions([]);

        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/interview/generate`,
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              skills,
              experience,
              difficulty,
            }),
          }
        );

        const data =
          await response.json();

        console.log(
          "BACKEND RESPONSE:",
          data
        );

        if (!data.success) {
          setError(
            data.message ||
              "Something went wrong"
          );
          return;
        }

        /*
          IMPORTANT CHECK
        */

        let receivedQuestions = [];

        if (
          data.interview?.questions
        ) {
          receivedQuestions =
            data.interview.questions;
        } else if (
          Array.isArray(data.interview)
        ) {
          receivedQuestions =
            data.interview;
        }
        console.log("Questions received:", receivedQuestions);

        if (
          receivedQuestions.length === 0
        ) {
          setError(
            "AI returned no questions"
          );
          return;
        }

        setQuestions(receivedQuestions);
        setPage(1);

      } catch (err) {
        console.log(err);

        setError(
          "Server error. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

  const lastIndex =
    page * questionsPerPage;

  const firstIndex =
    lastIndex - questionsPerPage;

  const currentQuestions =
    questions.slice(
      firstIndex,
      lastIndex
    );

  const totalPages = Math.ceil(
    questions.length /
      questionsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto">

      {/* HEADER */}
      <div
        className="
        bg-white dark:bg-slate-900/50
        p-8 rounded-3xl mb-8
        border border-slate-200 dark:border-slate-700
      "
      >
        <h1 className="text-3xl font-bold text-pink-600">
          AI Interview Prep 🎤
        </h1>

        <p className="mt-2 text-gray-500">
          Practice 50 AI generated interview questions.
        </p>
      </div>

      {/* FORM */}
      <div
        className="
        bg-white dark:bg-slate-900/50
        p-8 rounded-3xl mb-8
        border border-slate-200 dark:border-slate-700
      "
      >
        <div className="grid md:grid-cols-3 gap-4">

          <input
            value={skills}
            onChange={(e) =>
              setSkills(e.target.value)
            }
            placeholder="React, Node.js"
            className="p-4 rounded-xl border placeholder-slate-500 dark:bg-slate-900/50"
          />

          <input
            value={experience}
            onChange={(e) =>
              setExperience(
                e.target.value
              )
            }
            placeholder="2 years"
            className="p-4 rounded-xl border placeholder-slate-500 dark:bg-slate-900/50"
          />

          <select
            value={difficulty}
            onChange={(e) =>
              setDifficulty(
                e.target.value
              )
            }
            className="p-4 rounded-xl border placeholder-slate-500 dark:bg-slate-900"
          >
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
          </select>
        </div>

        <button
          onClick={
            handleGenerateQuestions
          }
          disabled={loading}
          className="
          mt-6 w-full py-4 rounded-xl
          bg-gradient-to-r
          from-purple-600 to-pink-600
          text-white font-semibold
        "
        >
          {loading
            ? "Generating AI Questions..."
            : "Generate 50 Questions"}
        </button>

        {/* LOADING */}
        {loading && (
          <div className="mt-6 text-center">

            <FaSpinner className="animate-spin mx-auto text-3xl text-purple-500" />

            <p className="mt-3 text-gray-500">
              AI is preparing 50 interview questions...
            </p>

            <p className="text-md mt-2 text-pink-500">
              This may take 20–40 seconds.
              Please relax ☕
            </p>
          </div>
        )}

        {/* ERROR */}
        {error && (
          <p className="mt-4 text-red-500">
            {error}
          </p>
        )}
      </div>

      {/* QUESTIONS */}

      {questions.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mb-6">
            Interview Questions
          </h2>

          <div className="space-y-4">

            {currentQuestions.map(
              (q, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                  p-6 rounded-2xl
                  bg-white dark:bg-slate-900/50
                  border border-slate-200 dark:border-slate-700
                "
                >
                  <div className="flex justify-between mb-3">

                    <span
                      className="
                      px-3 py-1 rounded-lg
                      bg-pink-500
                    "
                    >
                      {q.category}
                    </span>

                    <span>
                      Q
                      {firstIndex +
                        index +
                        1}
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg text-red-500">
                    {q.question}
                  </h3>

                  <div
                    className="
                    mt-4 p-4 rounded-xl
                    bg-slate-100 dark:bg-black/40
                  "
                  >
                    <p>
                      <b className="text-green-500">Answer:</b>{" "}
                      {q.answer}
                    </p>

                    <p className="mt-3 text-violet-400">
                      <b>Tip:</b>{" "}
                      {q.tip}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>

          {/* PAGINATION */}

          <div className="flex justify-center gap-4 mt-10">

            <button
              disabled={page === 1}
              onClick={() =>
                setPage(page - 1)
              }
              className="px-4 py-3 rounded-xl bg-slate-200 dark:bg-slate-700"
            >
              <FaChevronLeft />
            </button>

            <div className="px-5 py-3">
              {page} / {totalPages}
            </div>

            <button
              disabled={
                page === totalPages
              }
              onClick={() =>
                setPage(page + 1)
              }
              className="px-4 py-3 rounded-xl bg-slate-200 dark:bg-slate-700"
            >
              <FaChevronRight />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default InterviewPrep;