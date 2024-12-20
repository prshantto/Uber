// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-svh w-full flex justify-between flex-col bg-cover bg-[url(https://media.istockphoto.com/id/1303663831/photo/3d-rendering-of-street-asphalt-with-puddles-and-traffic-lights-at-night.jpg?s=612x612&w=0&k=20&c=7p3zteEahO2rjbgrKdR9AZ8hoBsBi86EzbO6LktJgXk=)]">
        <img
          className="w-40 p-6"
          src="https://freelogopng.com/images/all_img/1659768779uber-logo-white.png"
        />
        <div className="h-40 w-full bg-white flex flex-col items-center justify-around rounded-t-2xl">
          <h3 className="text-3xl font-bold pt-2">Get Started With Uber</h3>
          <button
            className="w-11/12 h-1/2 bg-black text-white rounded-2xl text-2xl font-bold"
            onClick={() => navigate("/login")}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
