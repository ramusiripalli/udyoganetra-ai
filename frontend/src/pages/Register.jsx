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
    <div className="min-h-screen bg-slate-100/40 dark:bg-slate-900/20 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">

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
        className="w-full max-w-sm sm:max-w-lg bg-slate-100/90 dark:bg-slate-900/90 rounded-2xl shadow-xl shadow-pink-400/40 border-2 border-pink-500 p-6 sm:p-10 mt-10 mb-15"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4 sm:mb-6">
          <span className="text-black dark:text-white">Create your </span> <span className="bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-600 text-transparent bg-clip-text">UdyogaNetra</span> <span className='text-black dark:text-white'>Account </span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-transparent border border-slate-900/40 dark:border-slate-100/40 rounded-lg text-black dark:text-white dark:placeholder-gray-200 focus:outline-none focus:ring-2 dark:focus:ring-white transition"
            onChange={handleChange}
          />

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-transparent border border-slate-900/40 dark:border-slate-100/40 rounded-lg text-black dark:text-white dark:placeholder-gray-200 focus:outline-none focus:ring-2 dark:focus:ring-white transition"
            onChange={handleChange}
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-9 sm:pr-10 bg-transparent border border-slate-900/40 dark:border-slate-100/40 rounded-lg text-black dark:text-white dark:placeholder-gray-200 focus:outline-none focus:ring-2 dark:focus:ring-white transition"
              onChange={handleChange}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 sm:right-3 top-2.5 sm:top-3 text-lg sm:text-xl text-black dark:text-white cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-9 sm:pr-10 bg-transparent border border-slate-900/40 dark:border-slate-100/40 rounded-lg text-black dark:text-white dark:placeholder-gray-200 focus:outline-none focus:ring-2 dark:focus:ring-white transition"
              onChange={handleChange}
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 sm:right-3 top-2.5 sm:top-3 text-lg sm:text-xl text-black dark:text-white cursor-pointer"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            type="submit"
            className="w-full bg-linear-to-r from-purple-600 to-pink-700 text-white py-2 sm:py-3 rounded-lg font-semibold hover:shadow-slate-900 dark:hover:shadow-slate-400 transition-all duration-300 shadow-md text-base sm:text-lg"
          >
            Sign UP
          </motion.button>
        </form>

        <p className="text-center text-black dark:text-gray-100 mt-4 sm:mt-5 text-sm sm:text-base">
          Already have an account?{' '}
          <Link to="/login" className="text-orange-400 text-xl  hover:underline">
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
