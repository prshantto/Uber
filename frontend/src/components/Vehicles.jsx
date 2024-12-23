/* eslint-disable no-unused-vars */
import React from "react";

const Vehicles = () => {
  return (
    <div className=" h-96 w-full bg-[#eee] fixed bottom-0 rounded-3xl">
      <h1 className="  text-3xl font-bold mt-5 mx-4">Choose a Vehicle</h1>
      <div className=" flex items-center justify-start mt-5">
        <img
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          className="w-28 h-20"
        />
        <div className="leading-tight pt-3">
          <h4 className="text-xl font-bold">
            UberGO{" "}
            <span>
              <i className="ri-user-fill"></i> 4
            </span>
          </h4>
          <p>2 mins Away | 15:24</p>
          <p className="text-gray-700 text-sm text-nowrap">
            Affordable, Comfortable Rides
          </p>
        </div>
        <h2 className="text-2xl font-bold text-center mr-2">$192.20</h2>
      </div>

      <div className=" flex items-center justify-start mt-5">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          className="w-28 h-20"
        />
        <div className="leading-tight pt-3">
          <h4 className="text-xl font-bold">
            UberGO{" "}
            <span>
              <i className="ri-user-fill"></i> 4
            </span>
          </h4>
          <p>2 mins Away | 15:24</p>
          <p className="text-gray-700 text-sm text-nowrap">
            Affordable, Comfortable Rides
          </p>
        </div>
        <h2 className="text-2xl font-bold text-center mr-2">$192.20</h2>
      </div>

      <div className=" flex items-center justify-start mt-5">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          className="w-28 h-20"
        />
        <div className="leading-tight pt-3">
          <h4 className="text-xl font-bold">
            UberGO{" "}
            <span>
              <i className="ri-user-fill"></i> 4
            </span>
          </h4>
          <p>2 mins Away | 15:24</p>
          <p className="text-gray-700 text-sm text-nowrap">
            Affordable, Comfortable Rides
          </p>
        </div>
        <h2 className="text-2xl font-bold text-center mr-2">$192.20</h2>
      </div>
    </div>
  );
};

export default Vehicles;
