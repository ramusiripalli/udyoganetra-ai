import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // getting redux state
  const { userInfo, loading, error } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // if login success → redirect
  useEffect(() => {
    if (userInfo) {
      toast.success("Login successful 🚀");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [userInfo, navigate]);

  // if login error → show toast
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  // reusable styles
  const inputStyle =
    "w-full px-4 py-3 bg-white/70 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-500 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all";

  const eyeIconStyle =
    "absolute right-4 top-4 text-slate-500 dark:text-gray-400 hover:text-cyan-400 cursor-pointer transition";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // validation
    if (!email || !password) {
      return toast.error("Please fill all fields");
    }

    // dispatch redux thunk
    dispatch(loginUser(formData));
  };

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-[#FFD8A8]
      via-[#F8FAFC]
      to-[#C7F9CC]
      dark:from-[#020617]
      dark:via-[#0B1120]
      dark:to-[#111827]

      flex
      justify-center
      items-start md:items-center

      px-4
      py-24 md:py-0

      relative
      overflow-x-hidden
    "
    >
      <Toaster position="top-right" />

      {/* Background blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/30 dark:bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-300/30 dark:bg-purple-500/20 rounded-full blur-[140px]" />

      {/* Card */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="relative w-full max-w-md p-6 md:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-2xl border border-slate-200 dark:border-cyan-500/20 shadow-xl shadow-cyan-900 transition-all"
      >
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" />

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-2 leading-tight">
          Welcome Back <br className="md:hidden" />

          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            UdyogaNetra
          </span>
        </h2>

        <p className="text-center text-slate-500 dark:text-gray-400 mb-8">
          Continue your intelligent career journey
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className={inputStyle}
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className={inputStyle}
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className={eyeIconStyle}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold text-lg transition-all shadow-xl shadow-blue-300/30 dark:shadow-blue-500/20"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-center text-slate-600 dark:text-gray-400 mt-6">
          New to UdyogaNetra?{" "}
          <Link
            to="/register"
            className="text-cyan-500 hover:text-blue-500 transition"
          >
            Create account
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;