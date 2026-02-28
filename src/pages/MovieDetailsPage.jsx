import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utilities/omdb";
import placeHolder from "../assets/placeHolder.png";

const MovieDetailsPage = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);

      const data = await getMovieById(imdbID);

      if (data.response === "True") {
        setMovie(data);
      } else {
        setError(data.Error)
      }

      setLoading(false);
    };

    fetchMovie();
  }, [imdbID]);

  if(loading) return <p className="text-center">Loading...</p>
  if(error) return <p className="text-center text-red-500">{error}</p>

  return (
    <div className="grid grid-cols-3 items-center gap-x-15 p-4">
      <div className="col-span-1 border rounded-md border-yellow-700 overflow-hidden">
        <img src={movie.Poster !== "N/A" ? movie.Poster : placeHolder} alt={movie.Title} />
      </div>
      <div className="col-span-2">
        <h2 className="text-3xl font-bold text-center mb-10">{movie.Title}</h2>
        <h3 className="text-md font-bold mb-3">Rating: {movie.imdbRating}/10</h3>
        <h3 className="text-md font-bold mb-5">Release Date: {movie.Released}</h3>
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
