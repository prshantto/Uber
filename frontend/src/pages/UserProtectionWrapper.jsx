import React from 'react'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types


const UserProtectionWrapper = ({children}) => {

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  if (!token) (
    navigate('/login')
  ) // else continue with children component's rendering

  return (
    <>
    {children}
    </>
  )
}

export default UserProtectionWrapper