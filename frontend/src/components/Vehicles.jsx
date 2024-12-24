/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Vehicles = (props) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold pt-5 pl-5">Choose a Vehicle</h1>
        <i
          onClick={() => props.setvehiclePanel(false)}
          className="ri-arrow-down-wide-line text-4xl px-5 pt-5"
        ></i>
      </div>
      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
          props.setvehiclePanel(false);
        }}
        className="flex items-center justify-around active:border-2 active:border-black rounded-2xl mx-3 py-3 text-nowrap"
      >
        <img
          className="w-28 h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
        />
        <div className="leading-tight pt-2 ">
          <h2 className="inline font-bold text-xl">
            UberGo{" "}
            <span>
              <i className="ri-user-fill">4</i>
            </span>
          </h2>

          <p className="font-semibold">2 mins away | 15:24</p>
          <p className="text-sm text-gray-700">Affordable, Comfortable ride</p>
        </div>
        <h2 className="text-2xl font-bold ">₹ 300</h2>
      </div>

      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
          props.setvehiclePanel(false);
        }}
        className="flex items-center justify-around active:border-2 active:border-black rounded-2xl mx-3 py-3 text-nowrap"
      >
        <img
          className="w-28 h-20 p-2"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
        />
        <div className="leading-tight pt-2 ">
          <h2 className="inline font-bold text-xl">
            UberAuto{" "}
            <span>
              <i className="ri-user-fill">3</i>
            </span>
          </h2>

          <p className="font-semibold">2 mins away | 15:24</p>
          <p className="text-sm text-gray-700">Affordable, Comfortable ride</p>
        </div>
        <h2 className="text-2xl font-bold  ">₹ 170</h2>
      </div>

      <div
        onClick={() => {
          props.setconfirmRidePanel(true);
          props.setvehiclePanel(false);
        }}
        className="flex items-center justify-around active:border-2 active:border-black rounded-2xl mx-3 py-3 text-nowrap"
      >
        <img
          className="w-28 h-20"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
        />
        <div className="leading-tight pt-2 ">
          <h2 className="inline font-bold text-xl">
            UberMoto{" "}
            <span>
              <i className="ri-user-fill">1</i>
            </span>
          </h2>

          <p className="font-semibold">2 mins away | 15:24</p>
          <p className="text-sm text-gray-700">Affordable,Comfortable ride</p>
        </div>
        <h2 className="text-2xl font-bold ">₹ 119</h2>
      </div>
    </>
  );
};

export default Vehicles;
