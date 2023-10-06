import {MapPinIcon} from "@heroicons/react/24/solid";

const HotelCard = ({hotel, onCardClick}) => {
  console.log(hotel);
  return (
    <div>
      <div className="card w-full shadow-xl bg-base-100">
        <div className="badge badge-secondary badge-outline">
          {hotel.hotelPrice}
        </div>
        <figure className="w-full">
          <img
            className="rounded-2xl w-fit"
            src={hotel.image}
            alt={hotel.name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {hotel.name}
            <div className="w-14 px-8 py-4">
              {hotel.location}
              <span className="inline-block">
                <MapPinIcon />
              </span>
            </div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-around">
            <div className="badge badge-outline">{hotel.roomNumber} Room</div>
            <div className="badge badge-outline">{hotel.bedNumber}</div>
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
          {/*<div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => onCardClick(hotel.id)}
            ></button>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
