import React, {useEffect, useState} from "react";
//import hotelsData from "../data/hotelData";
//import CityTabs from "./CityTabs";
import HotelCard from "./HotelCard";

const HotelList = () => {
  //const [activeCity, setActiveCity] = useState("New York");
  //const [visibleHotels, setVisibleHotels] = useState(3);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("./hotelData.json")
      .then((response) => response.json())

      .then((data) => {
        setHotels(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  //const hotelsInCity = hotels.filter((hotel) => hotel.city === "New York");
  //const handleTabClick = (city) => {
  //  setActiveCity(city);
  //  setVisibleHotels(3);
  //};

  //const loadMoreHotels = () => {
  //  setVisibleHotels(visibleHotels + 3);
  //};

  //const handleCardClick = (hotelId) => {
  //  console.log("hotel Booked");
  //  // Navigate to the property page, e.g., using React Router
  //  // You can reuse the same HotelCard component on the property page.
  //};

  return (
    <>
      <div className="text-center justify-center items-center text-3xl font-semibold uppercase text-pink-500 mt-10">
        <h2> Featured Hotel Gallery</h2>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-16">
        {hotels.map((hotel) => (
          <HotelCard hotel={hotel} key={hotel.id} />
        ))}
        {/*{hotelsInCity.slice(0, visibleHotels).map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            onCardClick={handleCardClick}
          />
        ))}*/}
      </div>
      {/*{visibleHotels < hotelsInCity.length && (
        <button onClick={loadMoreHotels}>Show More</button>
      )}*/}
    </>
  );
};

export default HotelList;
