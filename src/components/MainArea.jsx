import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import placeHolder from "../assets/placeHolder.png";

const MainArea = ({ toggleSidebar }) => {
  return (
    <main className="flex-1 border my-4 mr-4 rounded-xl border-yellow-900 px-3 py-3 h-[96vh] overflow-y-auto">
      <Topbar toggleSidebar={toggleSidebar} />
      <Outlet />
    </main>
  );
};

export default MainArea;
