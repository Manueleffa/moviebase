import React from "react";
import { tvShows } from "../data/movieLists";
import Cards from "../components/Cards";

const TvShowsPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center mt-7">TV Shows</h2>
      <Cards movieIds={tvShows} />
    </div>
  );
};

export default TvShowsPage;
