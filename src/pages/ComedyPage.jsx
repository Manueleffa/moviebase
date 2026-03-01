import React from "react";
import { comedyMovies } from "../data/movieLists";
import Cards from "../components/Cards";

const ComedyPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center mt-7">
        Comedy Movies
      </h2>
      <Cards movieIds={comedyMovies} />
    </div>
  );
};

export default ComedyPage;
