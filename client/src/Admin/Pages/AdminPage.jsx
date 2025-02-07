import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/SideBar";
import Dashboard from "../Components/Dashboard";

const AdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        {isSidebarOpen && (
          <div style={{ width: "250px" }}>
            <Sidebar />
          </div>
        )}

        
        <div style={{ flex: 1, padding: "16px", display: "flex" }}>
          
          <div style={{ width: "1000px" }}>
            <Dashboard />
          </div>

          
          <div style={{ flex: 1, paddingLeft: "16px" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
