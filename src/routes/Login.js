import Background from "../components/Login/Background";
import LoginBox from "../components/Login/LoginBox";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  let navigate = useNavigate();

  useEffect(()=>{
    if(sessionStorage.userID !== undefined){
      navigate("/home");
    } 
  },[])
  
  return (
    <>
      <Background></Background>
      <LoginBox></LoginBox>
    </>
  );
}
