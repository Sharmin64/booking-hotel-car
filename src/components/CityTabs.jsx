//import React, {useState} from "react";
//import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
//import "react-tabs/style/react-tabs.css";
//import HotelCard from "./HotelCard";

//const CityTabs = ({cities, activeCity, hotels}) => {
//  const initialIndex = cities.indexOf(city.toLowerCase());
//  const [tabIndex, setTabIndex] = useState(initialIndex);
//  const NewYorkCity = hotels.filter((hotel) => hotel.city === "New York");
//  const LondonCity = hotels.filter((hotel) => hotel.city === "London");
//  const ParisCity = hotels.filter((hotel) => hotel.city === "Paris");
//  const MumbaiCity = hotels.filter((hotel) => hotel.city === "Mumbai");

//  return (
//    <div>
//      <Tabs defaultIndex={tabIndex} onTabClick={(index) => setTabIndex(index)}>
//        <TabList>
//          <Tab>New York</Tab>
//          <Tab>London</Tab>
//          <Tab>Paris</Tab>
//          <Tab>Mumbai</Tab>
//        </TabList>
//        <TabPanel>
//          <HotelCard hotels={NewYorkCity} />
//        </TabPanel>
//        <TabPanel>
//          <HotelCard hotels={LondonCity} />
//        </TabPanel>
//        <TabPanel>
//          <HotelCard hotels={ParisCity} />
//        </TabPanel>
//        <TabPanel>
//          <HotelCard hotels={MumbaiCity} />
//        </TabPanel>
//      </Tabs>
//    </div>
//  );
//};

//export default CityTabs;
