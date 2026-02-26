import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import placeHolder from "../assets/placeHolder.png";

const MainArea = () => {
  return (
    <main className="col-span-3 border my-4 mr-4 rounded-xl border-[#3a414e] px-3 py-3">
      <Topbar />
      <Outlet />
    </main>
  );
};

export default MainArea;
