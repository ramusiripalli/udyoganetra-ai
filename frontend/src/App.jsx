import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import InterviewPrep from "./pages/InterviewPrep";
import JobMatch from "./pages/JobMatch";
import Landing from "./pages/Landing";

function App() {
  return (
     
    <BrowserRouter>
      {/* Main Theme Wrapper */}
     
      <div
        className="
        min-h-screen
        bg-white
        dark:bg-[#0B0F19]
        text-black
        dark:text-white
        transition-all duration-500
        "
      >
        {/* Global Navbar */}
        <Navbar />

        {/* Padding so navbar does not overlap */}
        <main className="pt-24">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
            <Route path="/interview-prep" element={<InterviewPrep />} />
            <Route path="/job-match" element={<JobMatch />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;