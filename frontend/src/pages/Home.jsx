/* eslint-disable no-unused-vars */
// import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LocationSuggestions from "../components/LocationSuggestions";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  const token = localStorage.getItem("token");
  if (!token || !user) {
    window.location.href = "http://localhost:5173/login";
  }

  const [ShowSuggestion, setShowSuggestion] = useState(false);
  const [pickUp, setpickUp] = useState("");
  const [destination, setdestination] = useState("");
  const suggestionRef = useRef(null);
  const arrowRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (ShowSuggestion === true) {
        gsap.to(suggestionRef.current, {
          height: "75%",
        });
        gsap.to(arrowRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(suggestionRef.current, {
          height: "0%",
        });
        gsap.to(arrowRef.current, {
          opacity: 0,
        });
      }
    },
    [ShowSuggestion]
  );

  return (
    <>
      <div className="h-screen w-screen">
        <img
          className="w-28 h-10 m-5 absolute"
          src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
        />

        {/* temporary image */}
        <div className="w-full h-full bg-red-500">
          <img
            className="w-full h-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          />
        </div>

        <div className="w-full h-full absolute top-0 flex flex-col justify-end">
          <form
            onSubmit={submitHandler}
            className=" bg-white text-xl px-5 py-8 h-[25%] rounded-t-3xl "
          >
            <div className="flex justify-between px-3">
              <h3 className="text-2xl font-bold">Find a Ride</h3>
              <DownOutlined
                ref={arrowRef}
                onClick={() => setShowSuggestion(false)}
              />
            </div>
            <div className="line h-16 border border-l-2 border-black absolute mt-8 ml-5"></div>
            <input
              onClick={() => setShowSuggestion(true)}
              value={pickUp}
              onChange={(e) => setpickUp(e.target.value)}
              className="p-2 w-full h-12 bg-[#eee] mt-3 rounded-lg pl-10"
              type="text"
              placeholder="Enter your Pick-up location"
            />
            <input
              onClick={() => setShowSuggestion(true)}
              value={destination}
              onChange={(e) => setdestination(e.target.value)}
              className="p-2 w-full h-12 bg-[#eee] mt-3 rounded-lg pl-10"
              type="text"
              placeholder="Enter your destination"
            />
          </form>

          <div ref={suggestionRef} className="w-full bg-white">
            <LocationSuggestions />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

// Welcome {user.fullname.firstname} {user.fullname.lastname}
//       <button
//         className="h-10 w-32 bg-slate-500"
//         onClick={() => navigate("/logout")}
//       >
//         Logout
//       </button>
