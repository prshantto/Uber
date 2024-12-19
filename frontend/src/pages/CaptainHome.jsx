// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CaptainHome() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const captain = JSON.parse(localStorage.getItem("captain"));

  // useEffect(()=>{
  //   if(!token){
  //       navigate('/captain-login');
  //   }
  // }, [token]);

  if (!token || !captain) {
    window.location.href = "http://localhost:5173/captain-login";
  }

  return (
    <div>
      Welcome {captain.fullname.firstname} {captain.fullname.lastname}
      <button
        className='h-10 w-32 bg-slate-500'
        onClick={() => navigate("/logout")}
      >
        Logout
      </button>
    </div>
  );
}

export default CaptainHome;
