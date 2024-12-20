// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const token = localStorage.getItem("token");
  if (!token || !user) {
    window.location.href = "http://localhost:5173/login";
  }

  return (
    <div>
      Welcome {user.fullname.firstname} {user.fullname.lastname}
      <button
        className="h-10 w-32 bg-slate-500"
        onClick={() => navigate("/logout")}
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
