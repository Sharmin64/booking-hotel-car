import React from "react";

const HotelCard = ({hotel, onCardClick}) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={hotel.image} alt="hotel" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {hotel.name}
            <div className="badge badge-secondary">For Rent</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-around">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
