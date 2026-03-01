import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Topbar = ({ toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const pageNames = {
    "/": "Home",
    "/action": "Action",
    "/comedy": "Comedy",
    "/tvshows": "Series",
    "/search": "Search",
    "/moviedetails": "Details",
    "*": "Error",
  };

  const currentPage = pageNames[location.pathname] || "Movies";

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = searchTerm.trim();
    if (!trimmed) return;

    navigate(`/search?q=${trimmed}`);
    setSearchTerm("");
  };

  return (
    <div className="grid grid-cols-5 items-center gap-4 mb-5 border border-[#3a414e] rounded-md px-3 py-4">
      <div className="flex items-center gap-3 col-span-1">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-white text-xl"
        >
          <FaBars />
        </button>
        <h2 className="text-lg font-semibold hidden md:block">{currentPage}</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-x-1 items-center col-span-4">
        <input
          type="search"
          placeholder="Search movies by Title ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-black placeholder:text-xs px-4 border border-[#3a414e] rounded-tl-3xl rounded-bl-3xl w-full h-10"
        />
        <button
          type="submit"
          className="bg-yellow-700 py-1 px-4 font-semibold text-sm rounded-tr-3xl rounded-br-3xl border border-[#3a414e] h-8"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Topbar;
