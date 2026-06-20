import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChartBar, Users, Briefcase } from "lucide-react";

import { fetchJobs } from "../redux/jobs/jobsSlice";
import { fetchUsers } from "../redux/users/usersSlice";

const AdminDashboard = () => {
  const dispatch = useDispatch();

  const { jobs = [] } = useSelector(
    (state) => state.jobs
  );

  const { users = [] } = useSelector(
    (state) => state.users
  );

  const user = useSelector(
    (state) => state.auth.user
  );

  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="p-6 md:p-10">

      <h1
        className="
          text-3xl md:text-4xl font-bold
          text-gray-900 dark:text-white
          mb-2
        "
      >
        Admin Dashboard
      </h1>

      <p
        className="
          text-gray-600 dark:text-gray-400
          mb-8
        "
      >
        Welcome back, {user?.name}
      </p>

      <div
        className="
          grid grid-cols-1
          md:grid-cols-2
          gap-6
        "
      >

        {/* Jobs */}

        <div
          className="
            bg-white dark:bg-[#131629]
            border border-gray-200
            dark:border-gray-800
            rounded-2xl
            p-6
            shadow-md
          "
        >
          <div className="flex items-center justify-between">

            <div>
              <p
                className="
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Total Jobs
              </p>

              <h2
                className="
                  text-4xl font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                {jobs.length}
              </h2>
            </div>

            <Briefcase
              size={42}
              className="
                text-pink-600
                dark:text-pink-500
              "
            />

          </div>
        </div>

        {/* Users */}

        <div
          className="
            bg-white dark:bg-[#131629]
            border border-gray-200
            dark:border-gray-800
            rounded-2xl
            p-6
            shadow-md
          "
        >
          <div className="flex items-center justify-between">

            <div>
              <p
                className="
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Total Users
              </p>

              <h2
                className="
                  text-4xl font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                {users.length}
              </h2>
            </div>

            <Users
              size={42}
              className="
                text-purple-600
                dark:text-purple-500
              "
            />

          </div>
        </div>

      </div>

      {/* Recent Activity Section */}

      <div
        className="
          mt-10
          bg-white dark:bg-[#131629]
          border border-gray-200
          dark:border-gray-800
          rounded-2xl
          p-6
          shadow-md
        "
      >
        <div className="flex items-center gap-3 mb-4">

          <ChartBar
            className="
              text-pink-600
              dark:text-pink-500
            "
          />

          <h3
            className="
              text-xl font-semibold
              text-gray-900
              dark:text-white
            "
          >
            Platform Overview
          </h3>

        </div>

        <p
          className="
            text-gray-600
            dark:text-gray-400
          "
        >
          Manage jobs, users, resumes,
          AI features, and analytics
          from one place.
        </p>
      </div>

    </div>
  );
};

export default AdminDashboard;