/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ConfirmRide = (props) => {
  return (
    <>
      <h1 className="text-2xl font-bold my-5">Confirm your Ride</h1>

      <img
        className="w-[50%] mb-2"
        src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
      />

      <div className="flex flex-col gap-3 pt-4 mt-2 w-full border-t-2 border-gray-300">
        <div className="flex items-center ">
          <i className="ri-map-pin-range-fill text-2xl mx-3"></i>
          <div>
            <h1 className="text-2xl font-bold ">E6A/252A</h1>
            <p className="text-xl">Old Lake, Banglore, Karnataka</p>
          </div>
        </div>

        <div className="flex items-center">
          <i className="ri-square-fill text-2xl mx-3"></i>
          <div>
            <h1 className="text-2xl font-bold w-96 border-t-2 border-gray-300 pt-3">
              Third Wave Technologies
            </h1>
            <p className="text-xl">Cross Road, PWD Quaters</p>
          </div>
        </div>

        <div className="flex items-center">
          <i className="ri-bank-card-fill text-2xl mx-3"></i>
          <div>
            <h1 className="text-2xl font-bold w-96 border-t-2 border-gray-300 pt-3">
              ₹ 300
            </h1>
            <p className="text-xl">Payment Method: Cash</p>
          </div>
        </div>
      </div>

      <div className="w-full px-5 flex items-center justify-between gap-3 my-5 font-bold text-xl text-white">
        <button
          onClick={() => props.setconfirmRidePanel(false)}
          className=" bg-[#F72A29] rounded-xl px-5 py-3"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            props.setconfirmRidePanel(false);
            props.setfindDriverPanel(true);
          }}
          className=" bg-green-500 rounded-xl px-5 py-3"
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default ConfirmRide;
