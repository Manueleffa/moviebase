import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Topbar = () => {
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
    <div className="flex items-center justify-between gap-6 mb-5 border border-[#3a414e] rounded-md px-3 py-4">
      <h2 className="text-lg font-semibold">{currentPage}</h2>
      <form onSubmit={handleSubmit} className="flex gap-x-1 items-center">
        <input
          type="search"
          placeholder="Search movies by Title ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-black placeholder:text-xs px-4 border border-[#3a414e] rounded-tl-3xl rounded-bl-3xl w-2xl h-10"
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
