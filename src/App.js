import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./styles/App.css";

import Main from "./routes/Main";
import Signup from "./routes/SignUp";
import Home from "./routes/Home";

function App() {
  
  const [loginState, setLoginState] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
