import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/SignUpSuccess/Background";
import SignUpSuccessBox from "../components/SignUpSuccess/SignUpSuccessBox";

export default function SignUpSuccess(){
  let navigate = useNavigate();

  useEffect(()=>{
    if(sessionStorage.userID !== undefined){
      navigate("/home/intro");
    } 
  },[])
  return(
    <>
      <Background/>
      <SignUpSuccessBox/>
    </>
  )
}