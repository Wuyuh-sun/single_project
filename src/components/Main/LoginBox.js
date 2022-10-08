import { useRef } from "react";
import { Link } from "react-router-dom";
import style from "../../styles/Main/login.module.css";

export default function Login() {
  const id = useRef();
  const password = useRef();
  return (
    <>
      <div className={style.wrap}>
        <div className={style.wrap_center}>
          <h1>LOGIN</h1>
          <form className={style.loginForm}>
            <div className={style.formBox1}>
              <input
                ref={id}
                type="text"
                id="ID"
                name="ID"
                placeholder="ID를 입력하세요"
              />
              <input
                ref={password}
                type="password"
                id="PASSWORD"
                name="PASSWORD"
                placeholder="PASSWORD를 입력하세요"
              />
            </div>
            <div className={style.formBox2}>
              <input
                type="submit"
                value="LOGIN"

                onClick={(e) => {
                  e.preventDefault();
                  // console.log("id:" + id.current.value + " & password:" + password.current.value)
                  if (!id.current.value) {
                    alert("id를 입력하세요");
                  } else {
                    if (!password.current.value) {
                      alert("password를 입력하세요");
                    } else {
                    }
                  }
                }}
              />
              <Link to="/signup">
                <button>SIGN UP</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
