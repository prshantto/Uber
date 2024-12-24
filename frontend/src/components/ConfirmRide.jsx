/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ConfirmRide = (props) => {
  return (
    <>
      <div className="flex flex-col leading-tight items-center">
        <i
          onClick={() => props.setconfirmRidePanel(false)}
          className="ri-arrow-down-wide-line text-4xl"
        ></i>
        <h1 className="text-2xl font-bold">Confirm your Ride</h1>
      </div>

      <img
        className=""
        src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
      />
    </>
  );
};

export default ConfirmRide;
