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

function App() {
  const url = import.meta.env.VITE_BASE_URL;
  console.log(url);
  return (
    <>
      <div className="block md:hidden">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserSignup />} />
          <Route path="/captain-register" element={<CaptainSignup />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/captain-home" element={<CaptainHome />} />
        </Routes>
      </div>

      <HiddenDisplay />
    </>
  );
}

export default App;
