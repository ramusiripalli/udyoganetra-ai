// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import ProtectedRoute from "./components/ProtectedRoute";

// Public Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AIFeatures from "./pages/AIFeatures";

// User Pages
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import InterviewPrep from "./pages/InterviewPrep";
import JobMatch from "./pages/JobMatch";

// Admin Pages
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminJobForm from "./pages/admin/AdminJobForm";
import AdminEditJobForm from "./pages/admin/AdminEditJobForm";

function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen bg-white dark:bg-[#0b0c19]
        text-black dark:text-white transition-all duration-500"
      >
        <Navbar />

        <main className="pt-21">
          <Routes>

            {/* Public Routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ai-features" element={<AIFeatures />} />

            {/* User Routes */}
            <Route
              element={
                <ProtectedRoute allowedRoles={["user"]} />
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/jobs" element={<Jobs />} />
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

            {/* Admin Routes */}
            <Route
              element={
                <ProtectedRoute allowedRoles={["admin"]} />
              }
            >
              <Route path="/admin" element={<AdminLayout />}>
                <Route
                  index
                  element={<AdminDashboard />}
                />

                <Route
                  path="jobs"
                  element={
                    <AdminDashboard
                      defaultView="myJobs"
                    />
                  }
                />

                <Route
                  path="jobs/create"
                  element={<AdminJobForm />}
                />

                <Route
                  path="jobs/edit/:id"
                  element={<AdminEditJobForm />}
                />
              </Route>
            </Route>

          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;