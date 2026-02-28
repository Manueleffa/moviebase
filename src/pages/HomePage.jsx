import React from "react";
import { popularMovies } from "../data/movieLists";
import Cards from "../components/Cards";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-7 text-center mt-10">
        Popular Movies
      </h2>
      <Cards movieIds={popularMovies} />
    </div>
  );
};

export default HomePage;
