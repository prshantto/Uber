// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem("token");
        localStorage.removeItem("captain");
      }
    });

  useEffect(() => {
    navigate("/captain-login");
  }, [token, navigate]);

  return <div>User Logedout Sucessfully</div>;
};

export default CaptainLogout;
