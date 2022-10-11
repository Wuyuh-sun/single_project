import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Signup from "./routes/SignUp";
import Home from "./routes/Home";
import Login from "./routes/Login";
import SignUpSuccess from "./routes/SignUpSuccess";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signUpSuccess" element={<SignUpSuccess />} />
          <Route path="/home/*" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
