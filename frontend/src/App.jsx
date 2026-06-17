import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import InterviewPrep from "./pages/InterviewPrep";
import JobMatch from "./pages/JobMatch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/job-match" element={<JobMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;