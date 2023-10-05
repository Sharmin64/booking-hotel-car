import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CityTabs = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>New York</Tab>
          <Tab>Mumbai</Tab>
          <Tab>Paris</Tab>
          <Tab>London</Tab>
        </TabList>
        <TabPanel>
          <h2>card render hob e</h2>
        </TabPanel>
        <TabPanel>
          <h2>Mumbaiwill re3nder here </h2>
        </TabPanel>
        <TabPanel>
          <h2>Paris will render here</h2>
        </TabPanel>
        <TabPanel>
          <h2>London will render here</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CityTabs;
