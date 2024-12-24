// import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LocationSuggestions from "../components/LocationSuggestions";
import Vehicles from "../components/Vehicles";
import ConfirmRide from "../components/ConfirmRide";
import FindDriver from "../components/FindDriver";

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
  const vehicleRef = useRef(null);
  const [vehiclePanel, setvehiclePanel] = useState(false);
  const confirmRideRef = useRef(null);
  const [confirmRidePanel, setconfirmRidePanel] = useState(false);
  const findDriverRef = useRef(null);
  const [findDriverPanel, setfindDriverPanel] = useState(false);

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

  useGSAP(
    function () {
      if (vehiclePanel === true) {
        gsap.to(vehicleRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmRidePanel === true) {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );

  useGSAP(
    function () {
      if (findDriverPanel === true) {
        gsap.to(findDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(findDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [findDriverPanel]
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

          <div ref={suggestionRef} className="w-full bg-white overflow-hidden">
            <LocationSuggestions
              setShowSuggestion={setShowSuggestion}
              setvehiclePanel={setvehiclePanel}
            />
          </div>
        </div>
      </div>

      <div
        ref={vehicleRef}
        className=" h-[50vh] w-full bg-[#eee] fixed bottom-0 rounded-t-3xl translate-y-full"
      >
        <Vehicles
          setvehiclePanel={setvehiclePanel}
          setconfirmRidePanel={setconfirmRidePanel}
        />
      </div>

      <div
        ref={confirmRideRef}
        className=" h-[62vh] w-full bg-white fixed bottom-0 rounded-t-3xl translate-y-full flex flex-col items-center justify-start"
      >
        <ConfirmRide
          setconfirmRidePanel={setconfirmRidePanel}
          setfindDriverPanel={setfindDriverPanel}
        />
      </div>

      <div
        ref={findDriverRef}
        className=" h-[55vh] w-full bg-white fixed bottom-0 rounded-t-3xl translate-y-full flex flex-col items-center justify-start"
      >
        <FindDriver setconfirmRidePanel={setconfirmRidePanel} />
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
