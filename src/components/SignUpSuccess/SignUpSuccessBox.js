import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../../styles/SignUpSuccess/signUpSuccess.module.css";

export default function SignUpSuccessBox() {
  const signUpSessionID = sessionStorage.signUpUserID;
  const signUpSessionPW = sessionStorage.signUpUserPW;

  return (
    <>
      <div className={style.wrap}>
        <div className={style.wrap_center}>
          <h1>
            <p>SIGN UP</p>
            <p>SUCCESS</p>
          </h1>
          <form action="">
            <input type="hidden" name="ID" value={signUpSessionID} />
            <input type="hidden" name="PASSWORD" value={signUpSessionPW} />
            <Link to="/home/intro">
              <button className={style.button} onClick={()=>{
                sessionStorage.setItem("userID", signUpSessionID);
                sessionStorage.removeItem("signUpUserID");
                sessionStorage.removeItem("signUpUserPW");
              }}>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
