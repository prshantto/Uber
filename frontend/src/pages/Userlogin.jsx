import React from 'react'
import { useNavigate } from 'react-router-dom';

function Userlogin() {

  const navigate = useNavigate();
  return (
    <div className='h-svh w-screen'>
      <form className='flex flex-col justify-center items-start mt-8 ml-4 text-2xl gap-2'>
        <h3 className='font-bold '>Whats your email?</h3>
        <input className="bg-[#EEEE] rounded h-12 p-2 text" type="text" placeholder='example@mail.com' />
        <h3 className='font-bold'>Enter your password</h3>
        <input className="bg-[#EEEE] rounded h-12 p-2 text" type="password" placeholder='password' />
        <button className="w-11/12 h-14 bg-black text-white font-bold rounded-lg mx-2 mt-5" type="submit">Continue</button>
        {/* <p onClick={() => navigate('/register')}>neu user?</p> */}
      </form>
      <button className="block mb-4 mt-2 text-center w-full text-nowrap text-blue-700 underline" onClick={() => navigate('/register')}>new user?</button>

      <hr className='w-2/5 inline-flex ml-5 pb-1' /> <span className='mx-2 text-gray-400'>or</span> <hr className='w-2/5 inline-flex pb-1' />

      <button className="w-11/12 h-14 bg-[#EEEE] rounded-lg mx-4 my-1 mt-4 font-bold text-lg" type="submit">Continue With Google</button>
      <button className="w-11/12 h-14 bg-[#EEEE] rounded-lg mx-4 my-1 font-bold text-lg" type="submit">Continue With Facebook</button>
      <button className="w-11/12 h-14 bg-[#EEEE] rounded-lg mx-4 my-1 font-bold text-lg" type="submit">Continue With Apple</button>

    </div>
  )
}

export default Userlogin