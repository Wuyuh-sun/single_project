import Background from "../components/Main/Background";
import Login from "../components/Main/LoginBox";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Main() {
  const loginValue = useSelector((state) => state.login.value);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(()=>{
    if(sessionStorage.userID !== undefined){
      navigate("/home");
    } 
  },[])
  
  return (
    <>
      <Background></Background>
      <Login></Login>
    </>
  );
}
