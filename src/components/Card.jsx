import React from "react";
import placeHolder from "../assets/placeHolder.png";

const Card = () => {
  return (
    <div className=" bg-yellow-700 border border-yellow-700 rounded overflow-x-hidden">
      <div className="w-full pb-4">
        <img src={placeHolder} alt="" className="w-full" />
      </div>
      <div>
        <h3 className="text-md font-bold px-2">The Extraction</h3>
        <p className="text-[14px] px-2 font-semibold mb-4">
          Realease Date: xxxx/xx/xx
        </p>
      </div>
    </div>
  );
};

export default Card;
