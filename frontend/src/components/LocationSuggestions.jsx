/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "remixicon/fonts/remixicon.css";

const locationData = [
  {
    id: 1,
    address: "Tughlakabad",
    address2: "Jyoti road, Tughlakanad",
  },
  {
    id: 2,
    address: "Tughlakabad",
    address2: "Jyoti road, Tughlakanad",
  },
  {
    id: 3,
    address: "Tughlakabad",
    address2: "Jyoti road, Tughlakanad",
  },
];

const LocationSuggestions = (props) => {
  return (
    <>
      {locationData.map(function (e) {
        return (
          <div
            key={e.id}
            onClick={() => {
              props.setvehiclePanel(true);
              props.setShowSuggestion(false);
            }}
            className="flex items-center gap-3 mx-4  my-5 active:border-2 active:border-black rounded-2xl py-3 px-2"
          >
            <i className="ri-map-pin-fill text-xl bg-[#eee] rounded-full px-3 py-2"></i>
            <div>
              <h2 className="text-2xl font-semibold">{e.address}</h2>
              <p className="text-nowrap text-lg">{e.address2}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LocationSuggestions;
