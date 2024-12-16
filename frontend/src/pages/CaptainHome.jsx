// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CaptainHome() {
  const navigate = useNavigate();

  const captain = JSON.parse(localStorage.getItem("captain"));

  return (
    <div>
      Welcome {captain.fullname.firstname} {captain.fullname.lastname}
      <button className="h-10 w-32 bg-slate-500" onClick={() => navigate('/logout')}>Logout</button>
    </div>
  );
}

export default CaptainHome;