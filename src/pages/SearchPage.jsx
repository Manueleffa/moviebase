import React from "react";
import { useSearchParams } from "react-router-dom";
import Cards from "../components/Cards";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center mt-7">
        {query ? `Results for "${query}"` : "Search for a movie"}
      </h2>
      {query ? (
        <Cards query={query} type="movie" />
      ) : (
        <p className="text-center text-gray-400">
          Type something in the search bar above
        </p>
      )}
    </div>
  );
};

export default SearchPage;
