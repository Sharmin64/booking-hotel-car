import React from "react";
import HotelCard from "./HotelCard";

const Hotel = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl align-middle justify-center font-sans">
          Featured Listed Property
        </h1>
        <HotelCard />
      </div>
    </div>
  );
};

export default Hotel;
