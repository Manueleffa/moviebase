import React from "react";
import { NavLink } from "react-router-dom";
import { FaFilm, FaHome, FaTv, FaBolt, FaLaughSquint, FaCog } from "react-icons/fa";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-[96vh] z-20 bg-[#020d18] border-r border-yellow-900 px-3 py-3 transition-transform duration-300 ease-in-out w-64 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:block md:flex-shrink-0 md:translate-x-0 md:w-64 md:m-4 md:border md:border-yellow-900 md:rounded-xl`}
    >
      <div className="mb-6">
        <NavLink to="/" onClick={closeSidebar} className="outline-none">
          <div className="flex items-center gap-x-1">
            <FaFilm className="text-2xl text-yellow-700" />
            <h1 className="text-2xl font-bold">MovieBase</h1>
          </div>
        </NavLink>
      </div>

      <ul>
        <li className="text-lg font-semibold border py-1 px-3 rounded-md border-yellow-900 mb-3">
          <NavLink
            to="/"
            onClick={closeSidebar}
            className="flex items-center gap-x-2"
          >
            <FaHome className="text-lg text-yellow-700" />
            Home
          </NavLink>
        </li>
        <li className="text-lg font-semibold border py-1 px-3 rounded-md border-yellow-900 mb-3">
          <NavLink
            to="/tvshows"
            onClick={closeSidebar}
            className="flex items-center gap-x-2"
          >
            <FaTv className="text-lg text-yellow-700" />
            TV Shows
          </NavLink>
        </li>
        <li className="text-lg font-semibold border py-1 px-3 rounded-md border-yellow-900 mb-3">
          <NavLink
            to="/action"
            onClick={closeSidebar}
            className="flex items-center gap-x-2"
          >
            <FaBolt className="text-lg text-yellow-700" />
            Action
          </NavLink>
        </li>
        <li className="text-lg font-semibold border py-1 px-3 rounded-md border-yellow-900 mb-3">
          <NavLink
            to="/comedy"
            onClick={closeSidebar}
            className="flex items-center gap-x-2"
          >
            <FaLaughSquint className="text-lg text-yellow-700" />
            Comedy
          </NavLink>
        </li>
      </ul>
      <ul className="absolute bottom-0 right-3 left-3">
        <li className="text-lg font-semibold border py-1 px-3 rounded-md border-yellow-900 mb-3">
          <NavLink
            to="/sethings"
            onClick={closeSidebar}
            className="flex items-center gap-x-2"
          >
            <FaCog className="text-lg text-yellow-700" />
            Sethings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
