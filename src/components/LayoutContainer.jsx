import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainArea from "./MainArea";

const LayoutContainer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="bg-[#020d18] text-white h-screen grid grid-cols-4">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-10 md:hidden"
          onClick={closeSidebar}
        />
      )}
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <MainArea toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default LayoutContainer;
