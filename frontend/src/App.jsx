import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import InterviewPrep from "./pages/InterviewPrep";
import JobMatch from "./pages/JobMatch";
import Landing from "./pages/Landing";
import AIFeatures from "./pages/AIFeatures";
import Footer from "./components/common/Footer";

// Protected Route
import ProtectedRoute from "./routes/ProtectedRoute";


// Separate component because useLocation works inside BrowserRouter
function AppContent() {
  const location = useLocation();

  // Hide navbar/footer on dashboard related pages
  const hideLayout =
    location.pathname === "/dashboard" ||
    location.pathname === "/resume-analyzer" ||
    location.pathname === "/interview-prep" ||
    location.pathname === "/job-match";

  return (
    <div
      className="min-h-screen bg-white dark:bg-[#0b0c19] text-black dark:text-white transition-all duration-500"
    >
      {/* Hide Navbar on dashboard pages */}
      {!hideLayout && <Navbar />}

      <main className={hideLayout ? "" : "pt-21"}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ai-features" element={<AIFeatures />} />
          <Route path="/jobs" element={<Jobs />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/resume-analyzer"
            element={
              <ProtectedRoute>
                <ResumeAnalyzer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/interview-prep"
            element={
              <ProtectedRoute>
                <InterviewPrep />
              </ProtectedRoute>
            }
          />

          <Route
            path="/job-match"
            element={
              <ProtectedRoute>
                <JobMatch />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {/* Hide Footer on dashboard pages */}
      {!hideLayout && <Footer />}
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;