import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { captainAtom } from "./Atoms";
import { useSetRecoilState } from "recoil";



function CaptainLogin() {
  const navigate = useNavigate();
  const setCaptainData = useSetRecoilState(captainAtom)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function submitHandler(e) {
    e.preventDefault();

    const captainloginData = {
      email: email.toLowerCase(),
      password: password
    }
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, captainloginData);
    
    if(response.status === 200) {
      const data = response.data;
      console.log(data);

      setCaptainData((prevUser) => [
        ...prevUser,
        {
          id: data.captain._id,
          fullname: data.captain.fullname,
          email: data.captain.email,
          vehicle: data.captain.vehicle,
          status: data.captain.status
        },
      ]);

      localStorage.setItem('token', data.token);
      localStorage.setItem('captain', JSON.stringify(data.captain));
      navigate('/captain-home');
    } else {
      alert("invalid username or password")
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className="h-svh w-screen flex justify-between flex-col">
      <form onSubmit={(e)=>{ submitHandler(e)}} className="flex flex-col justify-center items-start mt-2 ml-4 text-2xl gap-2">
        <img
          className="w-24"
          src="./uberdriver.svg"
          alt="uber logo"
        />
        <h3 className="font-bold ">Whats your email?</h3>
        <input
          required
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          className="bg-[#EEEE] rounded h-12 p-3 text"
          type="email"
          placeholder="example@mail.com"
        />
        <h3 className="font-bold">Enter your password</h3>
        <input
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          className="bg-[#EEEE] rounded h-12 p-3 text"
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
          onClick={() => navigate("/captain-register")}
        > Join us today!
          <span className="text-blue-700 mx-1"> Create account here </span>
        </div>
      <p className="text-[10px] ml-5 leading-4 w-10/12 my-2 text-gray-600">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>

      </form>

      <button
        onClick={() => navigate("/login")}
        className="w-11/12 h-14 bg-orange-500 rounded-lg m-4 font-bold text-lg flex items-center justify-center gap-4"
      >
        <img className="w-8 bg-opacity-0" src="https://freelogopng.com/images/all_img/1659761207uber-app-logo-png.png" alt="" />
        Continue as User
      </button>
    </div>
  );
}

export default CaptainLogin;
