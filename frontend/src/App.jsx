// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import CaptainHome from "./pages/CaptainHome";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/Userlogin";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainLogin from "./pages/CaptainLogin";
import HiddenDisplay from "./HiddenDisplay";
import UserLogout from "./pages/UserLogout";
import CaptainLogout from "./pages/CaptainLogout";

function App() {
  const url = import.meta.env.VITE_BASE_URL;
  console.log(url);
  return (
    <>
      <div className="block md:hidden">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserSignup />} />
          <Route path="/logout" element={<UserLogout />} />
          <Route path="/captain-home" element={<CaptainHome />} />
          <Route path="/captain-register" element={<CaptainSignup />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/captain-logout" element={<CaptainLogout />} />
        </Routes>
      </div>

      <HiddenDisplay />
    </>
  );
}

export default App;
