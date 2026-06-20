// src/pages/admin/AdminLayout.jsx

import { Outlet } from "react-router-dom";
import AdminNavbar from "../../components/admin/AdminNavbar.jsx";
import AdminSidebar from "../../components/admin/AdminSidebar.jsx";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <div className="flex-1">
        <AdminNavbar />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;