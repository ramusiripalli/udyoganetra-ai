import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import AIFeatures from "./pages/AIFeatures";

import Dashboard from "./pages/Dashboard";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import InterviewPrep from "./pages/InterviewPrep";
import JobMatch from "./pages/JobMatch";

// Protected Route
import ProtectedRoute from "./routes/ProtectedRoute";

// NEW Dashboard Layout
import DashboardLayout from "./components/dashboard/DashboardLayout";

function AppContent() {
  const location = useLocation();

  // all dashboard related routes
  const dashboardRoutes = [
    "/dashboard",
    "/resume-analyzer",
    "/interview-prep",
    "/job-match",
  ];

  const hideLayout =
    dashboardRoutes.includes(location.pathname);

  return (
    <div
      className="
      min-h-screen
      bg-white
      dark:bg-[#0b0c19]
      text-black
      dark:text-white
      transition-all
      duration-500
    "
    >
      {/* Public Navbar */}
      {!hideLayout && <Navbar />}

      <main className={hideLayout ? "" : "pt-21"}>
        <Routes>

          {/* PUBLIC ROUTES */}

          <Route path="/" element={<Landing />} />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/jobs"
            element={<Jobs />}
          />

          <Route
            path="/ai-features"
            element={<AIFeatures />}
          />


          {/* DASHBOARD PROTECTED LAYOUT */}

          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/resume-analyzer"
              element={<ResumeAnalyzer />}
            />

            <Route
              path="/interview-prep"
              element={<InterviewPrep />}
            />

            <Route
              path="/job-match"
              element={<JobMatch />}
            />

          </Route>

        </Routes>
      </main>

      {/* Public Footer */}
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