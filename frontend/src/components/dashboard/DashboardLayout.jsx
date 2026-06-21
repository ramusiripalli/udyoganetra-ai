import { useState } from "react";
import { Outlet } from "react-router-dom";

import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "./DashboardNavbar";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-900/20 transition-colors duration-300">

      {/* Sidebar */}
      <DashboardSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <DashboardNavbar
          setIsOpen={setIsOpen}
        />

        {/* Dynamic page */}
        <div className="p-4 md:p-8">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;