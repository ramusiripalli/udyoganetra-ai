import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/authSlice.js";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password) {
      toast.error(
        "Please fill email and password"
      );
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      // error
      if (!res.ok) {
        const errMsg =
          data.message ||
          data.msg ||
          "Login failed";

        toast.error(errMsg);
        return;
      }

      // success

      dispatch(
        loginSuccess({
          user: data.user,
          token: data.token,
        })
      );

      toast.success(
        "Logged in successfully 🎉"
      );

      // navigate based on role

      if (data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }

    } catch (error) {
      console.log(error);

      toast.error(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      bg-white dark:bg-black
      flex flex-col
      items-center justify-center
      px-4 sm:px-6 lg:px-8
      relative overflow-hidden
    "
    >
      {/* toaster */}

      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontSize: "18px",
            padding: "12px 20px",
            minWidth: "280px",
          },
        }}
      />

      {/* card */}

      <div
        className="
        w-full max-w-sm sm:max-w-md
        bg-white dark:bg-slate-900/90
        border-2 border-pink-600
        rounded-2xl
        p-6 sm:p-8
        shadow-lg shadow-pink-400/80
        mt-20 sm:mt-15 mb-15
      "
      >
        <h2
          className="
          text-2xl sm:text-3xl
          font-bold text-center
          text-black dark:text-white
          mb-4 sm:mb-6
        "
        >
          Login to{" "}

          <span
            className="
            bg-linear-to-r
            from-purple-600
            via-fuchsia-500
            to-pink-600
            text-transparent
            bg-clip-text
          "
          >
            UdyogaNetra AI
          </span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-6"
        >
          {/* email */}

          <div>
            <label
              className="
              block mb-1
              text-sm sm:text-base
              text-black
              dark:text-gray-300
            "
            >
              Email
            </label>

            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
              w-full px-3 py-2
              sm:px-4 sm:py-3
              bg-transparent
              border border-pink-500/70
              rounded-lg
              text-black dark:text-white
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-pink-500
            "
            />
          </div>

          {/* password */}

          <div className="relative">
            <label
              className="
              block mb-1
              text-sm sm:text-base
              text-black
              dark:text-gray-300
            "
            >
              Password
            </label>

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              required
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="
              w-full px-3 py-2
              sm:px-4 sm:py-3
              pr-10
              bg-transparent
              border border-pink-500/70
              rounded-lg
              text-black dark:text-white
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-pink-500
            "
            />

            <span
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="
              absolute
              inset-y-0 right-3 top-6
              flex items-center
              text-black dark:text-white
              cursor-pointer
              text-lg sm:text-2xl
            "
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>
          </div>

          {/* button */}

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            bg-linear-to-r
            from-purple-600
            to-pink-600
            text-white
            py-2 sm:py-3
            rounded-lg
            font-semibold
            shadow-md
            cursor-pointer
          "
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>
        </form>

        <p
          className="
          text-center
          text-black dark:text-gray-100
          mt-4 sm:mt-5
          text-sm sm:text-base
        "
        >
          Don’t have an account?{" "}

          <Link
            to="/register"
            className="
            text-green-600
            dark:text-green-400
            hover:underline
          "
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;