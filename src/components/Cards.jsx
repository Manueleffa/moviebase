import React, { useState, useEffect } from "react";
import Card from "./Card";
import { searchMovies, getMovieById } from "../utilities/omdb";

const Cards = ({ query, type = "movie", movieIds }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      if (movieIds && movieIds.length > 0){
        const results = await Promise.all(
          movieIds.map((id) => getMovieById(id))
        );

        const valid = results.filter((m) => m.Response === "True");
        setMovies(valid);
      } else if (query) {
        const data = await searchMovies(query, type);
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError(data.Error);
        }
      }

      setLoading(false);
    };

    fetchMovies();
  }, [query, movieIds]);

  if (loading) return <p className="text-center">Loading movies....</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>




  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {movies.map((movie) => (
        <Card key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default Cards;
