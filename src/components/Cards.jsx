import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
