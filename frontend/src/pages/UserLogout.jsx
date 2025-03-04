import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const UserLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      });
    navigate("/login");
  }, [token, navigate]);

  return <div>User Logedout Sucessfully</div>;
};

export default UserLogout;
