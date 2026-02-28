import React from "react";
import placeHolder from "../assets/placeHolder.png";

const MovieDetailsPage = () => {
  return (
    <div className="grid grid-cols-3 items-center gap-x-15 p-4">
      <div className="col-span-1 border rounded-md border-yellow-700 overflow-hidden">
        <img src={placeHolder} alt="" />
      </div>
      <div className="col-span-2">
        <h2 className="text-3xl font-bold text-center mb-10">Movie Title</h2>
        <h3 className="text-md font-bold mb-3">Rating: 8/10</h3>
        <h3 className="text-md font-bold mb-5">Release Date: xxxx/xx/xx</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque
          molestiae error debitis provident dolore hic odit, impedit sint,
          voluptatum consectetur assumenda expedita perferendis obcaecati
          veritatis voluptatibus. Voluptatum repellat suscipit, quae molestiae
          cupiditate modi libero dolorem commodi obcaecati! Ratione quia
          corporis recusandae delectus perspiciatis consequatur ipsam. Cumque
          omnis ad recusandae.
        </p>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
