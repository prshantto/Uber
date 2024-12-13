import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/Userlogin";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainLogin from "./pages/CaptainLogin";
import HiddenDisplay from "./HiddenDisplay";

function App() {
  const url = import.meta.env.VITE_API_URL;
  const dbString = import.meta.env.VITE_DB_STRING
  console.log(url, dbString);
  return (
    <>
      <div className="block md:hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserSignup />} />
          <Route path="/captain-register" element={<CaptainSignup />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
        </Routes>
      </div>

      <HiddenDisplay />
    </>
  );
}

export default App;
