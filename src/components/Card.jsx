import React from "react";
import { NavLink } from "react-router-dom";
import placeHolder from "../assets/placeHolder.png";

const Card = ({ movie }) => {
  const { Title, Year, Poster, imdbID } = movie;

  return (
    <div className=" bg-yellow-700 border border-yellow-900 rounded overflow-x-hidden">
      <NavLink to={`/moviedetails/${imdbID}`}>
        <div className="w-full pb-2 md:h-84 overflow-hidden">
          <img
            src={Poster !== "N/A" ? Poster : placeHolder}
            alt={Title}
            className="w-full object-cover h-full"
            onError={(e) => {
              e.target.src = placeHolder;
            }}
          />
        </div>
        <div>
          <h3 className="text-sm font-bold px-2">{Title}</h3>
          <p className="text-[11px] px-2 font-semibold mb-4">
            Realease Date: {Year}
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
