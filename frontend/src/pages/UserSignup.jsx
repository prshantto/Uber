import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserSignup() {

  const navigate = useNavigate();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submitHandler(e) {
    e.preventDefault();

    const newUserData = {
      fullname: {
        firstname: firstname,
        lastname: lastname
      },
      email: email.toLowerCase(),
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`, newUserData);
    if (response.status === 201) {
      const data = response.data;
      localStorage.setItem('token', data.token);
      navigate('/login');
    } else {
      alert('Failed to register. Please try again.');
    }

    console.log(newUserData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }

  return (

       <div className="h-svh w-screen flex justify-between flex-col">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col justify-center items-start mt-8 ml-4 text-2xl gap-2"
      >
        <img
          className="w-24 mb-5"
          src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
          alt="uber logo"
        />
        <h3 className="font-bold ">Whats your name?</h3>
        <div className='flex gap-2 w-11/12'>
          <input
            required
            value={firstname}
            onChange={(e)=>{setFirstName(e.target.value)}}
            className="bg-[#EEEE] rounded h-12 w-1/2 p-3 text"
            type="text"
            placeholder="First name"
          />
          <input
            required
            value={lastname}
            onChange={(e)=>{setLastName(e.target.value)}}
            className="bg-[#EEEE] rounded h-12 p-3 w-1/2 text"
            type="text"
            placeholder="Last name" 
            />
        </div>

        <h3 className="font-bold ">Whats your email?</h3>
        <input
          required
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          className="bg-[#EEEE] rounded h-12 w-11/12 p-3 text"
          type="email"
          placeholder="example@email.com"
        />
        <h3 className="font-bold">Enter your password</h3>
        <input
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
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
          onClick={() => navigate("/login")}
        > already have an account?
          <span className="text-blue-700 mx-1"> login here </span>
        </div>
      <p className="text-[10px] ml-5 leading-4 w-10/12 my-2 text-gray-600">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>

      </form>

      <button
        onClick={() => navigate("/captain-register")}
        className="w-11/12 h-14 bg-green-500 rounded-lg m-4 font-bold text-lg flex items-center justify-center gap-2"
      >
        <img className="w-10 bg-opacity-0" src="https://freelogopng.com/images/all_img/1659761425uber-driver-logo-png.png" alt="" />
        Become Captain
      </button>
    </div>


  )
}

export default UserSignup