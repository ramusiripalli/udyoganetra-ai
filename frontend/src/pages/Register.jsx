// src/pages/Register.jsx

import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      return toast.error('Please fill all fields!');
    }

    if (password !== confirmPassword) {
      return toast.error('Passwords do not match!');
    }

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password })
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success('Registered successfully!');
        navigate('/login');
      } else {
        toast.error(data.message || 'Registration failed!');
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* ✅ Toast Notifications */}
      <Toaster position="top-center"
        toastOptions={{
          style: {
            fontSize: '18px',
            padding: '12px 20px',
            minWidth: '300px',
          },
        }}
      />


      {/* ✅ Registration Form */}
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 12 }}
        className="w-full max-w-sm sm:max-w-md bg-slate-50 dark:bg-black rounded-2xl shadow-lg shadow-pink-400/40 border-2 border-pink-600 p-6 sm:p-8 mt-15 mb-15"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4 sm:mb-6">
          <span className="text-black dark:text-white">Create your </span> <span className="text-pink-700 dark:text-purple-500">UdyogaNetra</span> <span className='text-black dark:text-white'>Account </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-transparent border border-pink-700/70 rounded-lg text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            onChange={handleChange}
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-transparent border border-pink-700/70 rounded-lg text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            onChange={handleChange}
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-9 sm:pr-10 bg-transparent border border-pink-700/70 rounded-lg text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              onChange={handleChange}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 sm:right-3 top-2.5 sm:top-3 text-lg sm:text-xl text-white cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-9 sm:pr-10 bg-transparent border border-pink-500/70 rounded-lg text-black dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              onChange={handleChange}
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 sm:right-3 top-2.5 sm:top-3 text-lg sm:text-xl text-white cursor-pointer"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            type="submit"
            className="w-full bg-linear-to-r from-purple-600 to-pink-700 text-white py-2 sm:py-3 rounded-lg font-semibold hover:shadow-pink-500 transition-all duration-300 shadow-md text-base sm:text-lg"
          >
            Sign UP
          </motion.button>
        </form>

        <p className="text-center text-black dark:text-gray-200 mt-4 sm:mt-5 text-sm sm:text-base">
          Already have an account?{' '}
          <Link to="/login" className="text-pink-600 dark:text-purple-400 text-xl  hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
