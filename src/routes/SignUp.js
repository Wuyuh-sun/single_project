import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/SignUp/Background";
import SignUpBox from "../components/SignUp/SignUpBox";

export default function SignUp() {
  let navigate = useNavigate();

  useEffect(()=>{
    if(sessionStorage.userID !== undefined){
      navigate("/home/intro");
    } 
  },[])
  return (
    <>
    <Background/>
    <SignUpBox/>
    </>
  );
}
