import React, {useState} from "react";
import hotelsData from "../data/hotelData";
import CityTabs from "./CityTabs";
import HotelCard from "./HotelCard";

const HotelList = () => {
  const [activeCity, setActiveCity] = useState("New York");
  const [visibleHotels, setVisibleHotels] = useState(3);

  const hotelsInCity = hotelsData.filter((hotel) => hotel.city === activeCity);

  const handleTabClick = (city) => {
    setActiveCity(city);
    setVisibleHotels(3);
  };

  const loadMoreHotels = () => {
    setVisibleHotels(visibleHotels + 3);
  };

  const handleCardClick = (hotelId) => {
    // Navigate to the property page, e.g., using React Router
    // You can reuse the same HotelCard component on the property page.
  };

  return (
    <div className="hotel-listing">
      <CityTabs
        cities={Array.from(
          new Set(hotelsData.map((hotel) => hotel.city)).slice(0, 4)
        )}
        activeCity={activeCity}
        onTabClick={handleTabClick}
      />
      <div className="property-cards">
        {hotelsInCity.slice(0, visibleHotels).map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotel={hotel}
            onCardClick={handleCardClick}
          />
        ))}
      </div>
      {visibleHotels < hotelsInCity.length && (
        <button onClick={loadMoreHotels}>Show More</button>
      )}
    </div>
  );
};

export default HotelList;
