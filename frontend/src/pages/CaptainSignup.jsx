import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function CaptainSignup() {
  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [color, setColor] = useState("");
  const [capacity, setCapacity] = useState("");
  const [type, setType] = useState("Vehicle Type");
  const [numberPlate, setNumberPlate] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    const newCaptainData = {
        fullname:{
            firstname: firstname,
            lastname: lastname,
        },
        email : email,
        password: password,
       
        vehicle: {
            color: color,
            capacity:capacity,
            plate:numberPlate,
            type:type
        },
    }

    console.log(newCaptainData)

    const responses = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, newCaptainData);
    if (responses.status === 201) {
      const data = responses.data;

      localStorage.setItem('token', data.token);
      navigate("/captain-login");
    } else {
      alert("Failed to register. Please try again.");
    }


    console.log(newCaptainData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setCapacity("");
    setColor("");
    setType("");
    setNumberPlate("");
  }

  return (
    <div className="h-svh w-full">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="h-screen flex flex-col justify-start items-start ml-4 text-lg gap-0.5"
      >
        <img className="w-24" src="./uberdriver.svg" alt="uber logo" />
        <h3 className="font-bold ">Whats your name?</h3>
        <div className="flex gap-2 w-11/12">
          <input
            required
            value={firstname}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            className="bg-[#EEEE] rounded h-12 w-1/2 p-3 text"
            type="text"
            placeholder="First name"
          />
          <input
            required
            value={lastname}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            className="bg-[#EEEE] rounded h-12 p-3 w-1/2 text"
            type="text"
            placeholder="Last name"
          />
        </div>

        <h3 className="font-bold ">Whats your email?</h3>
        <input
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-[#EEEE] rounded h-12 w-11/12 p-3 text"
          type="email"
          placeholder="example@email.com"
        />
        <h3 className="font-bold">Enter your Vehicle details</h3>
        <div className="w-11/12 grid grid-cols-2 gap-2">
          <input
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            type="text"
            placeholder="colour"
            className="bg-[#EEEE] rounded h-12 p-3 text "
          />
          <input
            value={capacity}
            onChange={(e) => {
              setCapacity(e.target.value);
            }}
            type="number"
            placeholder="capacity"
            className="bg-[#EEEE] rounded h-12 p-3 text"
          />
          <input
            value={numberPlate}
            onChange={(e) => {
              setNumberPlate(e.target.value);
            }}
            type="text"
            placeholder="registration no."
            className="bg-[#EEEE] rounded h-12 p-3 text "
          />
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
            className="bg-[#EEEE] rounded h-12 p-2 text-lg"
          >
            <option value="Vehicle Type" disabled>
              Vehicle Type
            </option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="mercedes">mercedes</option>
            <option value="Luxury">Luxury</option>
          </select>
        </div>
        <h3 className="font-bold">Enter your password</h3>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="bg-[#EEEE] rounded h-12 w-11/12 p-3 text"
          type="password"
          placeholder="password"
        />
        <button
          className="w-11/12 h-14 bg-black text-white font-bold rounded-lg mx-2 mt-5"
          type="submit"
        >
          Continue
        </button>
        <div
          className=" text-sm w-full text-center font-bold"
          onClick={() => navigate("/captain-login")}
        > already have an account?
          <span className="text-blue-700 mx-1">login here </span>
        </div>
      <p className="text-[10px] ml-5 leading-4 w-10/12 my-2 text-gray-600">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>

      </form>

    </div>
  );
}

export default CaptainSignup;
