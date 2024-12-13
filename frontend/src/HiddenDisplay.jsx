import React from "react";

function HiddenDisplay() {
  return (
    <div className="hidden md:block">
      <div className="h-screen w-screen flex justify-center items-center text-lg bg-gray-300 bg-opacity-40 backdrop-blur-xl">
        <div className="w-96 flex justify-center flex-wrap items-center text-center ">
          <img className="w-10 mx-5" src="./react.svg" alt="" />
          <img className="w-10 mx-5" src="/mobile.png" alt="" />
          <p className="col-span-2 my-3">
            This Website is only available on Android Smartphones.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HiddenDisplay;
