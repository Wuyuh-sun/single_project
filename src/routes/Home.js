import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home(){
  const loginValue = useSelector((state) => state.login.value);
  let navigate = useNavigate();
  
  useEffect(()=>{
    if(sessionStorage.userID !== undefined){
      navigate("/home");
    } else{
      navigate("/");
    }
  },[])

  return(
    <>
    <h1>Home</h1>
    </>
  )
}