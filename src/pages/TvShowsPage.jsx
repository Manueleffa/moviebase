import React from "react";
import { tvShows } from "../data/movieLists";
import Cards from "../components/Cards";

const TvShowsPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-7 text-center mt-10">TV Shows</h2>
      <Cards movieIds={tvShows} />
    </div>
  );
};

export default TvShowsPage;
