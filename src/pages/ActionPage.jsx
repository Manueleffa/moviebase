import React from "react";
import { actionMovies } from "../data/movieLists";
import Cards from "../components/Cards";

const ActionPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-7 text-center mt-10">
        Action Movies
      </h2>
      <Cards movieIds={actionMovies} />
    </div>
  );
};

export default ActionPage;
