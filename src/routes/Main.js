import style from "../styles/Main/main.module.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import axios from "axios";
export default function Main() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/test")
      .then((res) => {
        if (res) {
          console.log("서버 데이터를 받아올 수 있습니다.");
          console.log("root계정 data ↓↓↓↓");
          console.log(res.data[0]);
        }
      })
      .catch();
  }, []);

  const id = useRef();
  const password = useRef();

  return (
    <>
      <div className={style.wrap}>
        <h1>LOGIN</h1>
        <form className={style.loginForm}>
          <label htmlFor="ID">ID</label>
          <input ref={id} type="text" id="ID" name="ID" />
          <label htmlFor="PASSWORD">PASSWORD</label>
          <input ref={password} type="password" id="PASSWORD" name="PASSWORD" />
          <input
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              // console.log("id:" + id.current.value + " & password:" + password.current.value)
              if (!id.current.value) {
                alert("id를 입력하세요");
              } else {
                if(!password.current.value){
                  alert("password를 입력하세요")
                } else{
                  
                }
              }
            }}
          />
          <Link to="/signup">
            <button>회원가입</button>
          </Link>
          <Link to="/adminSignup">
            <button>관리자 회원가입</button>
          </Link>
        </form>
      </div>
    </>
  );
}
