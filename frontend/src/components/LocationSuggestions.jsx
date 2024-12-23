/* eslint-disable react/jsx-key */
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

const LocationSuggestions = () => {
  return (
    <>
      {locationData.map(function (e) {
        return (
          <div className="flex items-center gap-3 mx-4  my-5">
            <i className="ri-map-pin-fill text-3xl bg-[#eee] rounded-full p-3"></i>
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
