import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../../styles/Login/login.module.css";

export default function LoginBox() {
  const id = useRef();
  const password = useRef();

  let navigate = useNavigate();

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
                autoComplete="off"
              />
              <small>ID를 입력하세요</small>
              <input
                ref={password}
                type="password"
                id="PASSWORD"
                name="PASSWORD"
                placeholder="PASSWORD를 입력하세요"
              />
              <small>PASSWORD를 입력하세요</small>
            </div>
            <div className={style.formBox2}>
              <input
                type="submit"
                value="LOGIN"
                onClick={(e) => {
                  e.preventDefault();
                  const small_1 = id.current.parentNode.childNodes[1];
                  const small_2 = password.current.parentNode.childNodes[3];
                  if (!id.current.value) {
                    if (!password.current.value) {
                      small_1.innerText = "ID를 입력하세요";
                      small_1.style.display = "block";
                      small_2.innerText = "PASSWORD를 입력하세요";
                      small_2.style.display = "block";
                    } else {
                      small_1.innerText = "ID를 입력하세요";
                      small_1.style.display = "block";
                      small_2.style.display = "none";
                    }
                  } else {
                    if (!password.current.value) {
                      small_1.style.display = "none";
                      small_2.innerText = "PASSWORD를 입력하세요";
                      small_2.style.display = "block";
                    } else {
                      small_1.style.display = "none";
                      small_2.style.display = "none";
                      axios
                        .get("http://localhost:4000/api/login", {
                          params: {
                            userid: id.current.value,
                            userpw: password.current.value,
                          },
                        })
                        .then((res) => {
                          if (res.data.length === 0) {
                            alert("login 실패");
                            small_2.innerText =
                              "ID와 PASSWORD를 다시 확인해주세요.";
                            small_2.style.display = "block";
                          } else {
                            console.log(res.data[0]);
                            sessionStorage.setItem("userID", res.data[0].id);
                            navigate("/home");
                          }
                        })
                        .catch((err) => {
                          console.log(err);
                        });
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
