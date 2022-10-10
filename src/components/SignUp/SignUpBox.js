import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../../styles/SignUp/signup.module.css";

export default function SignUpBox() {
  const ID = useRef();
  const PASSWORD = useRef();
  const NAME = useRef();
  const PHONENUMBER = useRef();
  const formBox1 = useRef();

  const [idCheckState, setIdCheckState] = useState();
  const [nameCheckState, setNameCheckState] = useState();
  const [phNumCheckState, setPhNumCheckState] = useState();

  let navigate = useNavigate();

  function inputCheck(inputName, childNodesIdx) {
    if (!inputName.current.value) {
      formBox1.current.childNodes[
        childNodesIdx
      ].innerText = `${inputName.current.id}을(를) 입력하세요`;
      formBox1.current.childNodes[childNodesIdx].style.display = "block";
    } else {
      formBox1.current.childNodes[childNodesIdx].style.display = "none";
    }
  }
  const checkPhonenumber = (e) => {
    // '-' 입력 시
    var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    // 숫자만 입력시
    var regExp2 = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    // 형식에 맞는 경우 true 리턴
    // console.log('핸드폰번호 유효성 검사 :: ', regExp2.test(e.target.value))
    if (regExp2.test(e.target.value)) {
      axios
        .get("http://localhost:4000/api/signup/phNumCheck", {
          params: {
            phNumCheck: e.target.value,
          },
        })
        .then((res) => {
          if (res.data.length === 0) {
            setPhNumCheckState(true);
            formBox1.current.childNodes[7].innerText = `사용할 수 있는 휴대폰 번호입니다.`;
            formBox1.current.childNodes[7].style.color = "lime";
            formBox1.current.childNodes[7].style.display = "block";
          } else {
            setPhNumCheckState(false);
            formBox1.current.childNodes[7].innerText = `중복되는 번호가 있습니다. 다른 번호를 입력해주세요.`;
            formBox1.current.childNodes[7].style.color = "red";
            formBox1.current.childNodes[7].style.display = "block";
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setPhNumCheckState(false);
      formBox1.current.childNodes[7].innerText = `휴대폰 번호 10~11자리를 정확히 입력해주세요.`;
      formBox1.current.childNodes[7].style.color = "red";
      formBox1.current.childNodes[7].style.display = "block";
    }
  };

  return (
    <>
      <div className={style.wrap}>
        <div className={style.wrap_center}>
          <h1>SIGN UP</h1>
          <form className={style.signUpForm}>
            <div className={style.formBox1} ref={formBox1}>
              <input
                ref={ID}
                type="text"
                id="ID"
                name="ID"
                placeholder="ID를 입력하세요"
                autoComplete="off"
                onKeyUp={(e) => {
                  axios
                    .get("http://localhost:4000/api/signup/idCheck", {
                      params: {
                        idCheck: e.currentTarget.value,
                      },
                    })
                    .then((res) => {
                      if (res.data.length === 0) {
                        setIdCheckState(true);
                        formBox1.current.childNodes[1].innerText = `사용할 수 있는 ID입니다`;
                        formBox1.current.childNodes[1].style.color = "lime";
                        formBox1.current.childNodes[1].style.display = "block";
                      } else {
                        setIdCheckState(false);
                        formBox1.current.childNodes[1].innerText = `사용할 수 없는 ID입니다`;
                        formBox1.current.childNodes[1].style.color = "red";
                        formBox1.current.childNodes[1].style.display = "block";
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              />
              <small>ID를 입력하세요</small>
              <input
                ref={PASSWORD}
                type="password"
                id="PASSWORD"
                name="PASSWORD"
                placeholder="PASSWORD를 입력하세요"
              />
              <small>PASSWORD를 입력하세요</small>
              <input
                ref={NAME}
                type="text"
                id="NAME"
                name="NAME"
                placeholder="NAME을 입력하세요"
                autoComplete="off"
                onKeyUp={(e) => {
                  axios
                    .get("http://localhost:4000/api/signup/nameCheck", {
                      params: {
                        nameCheck: e.currentTarget.value,
                      },
                    })
                    .then((res) => {
                      if (res.data.length === 0) {
                        setNameCheckState(true);
                        formBox1.current.childNodes[5].innerText = `사용할 수 있는 NAME입니다`;
                        formBox1.current.childNodes[5].style.color = "lime";
                        formBox1.current.childNodes[5].style.display = "block";
                      } else {
                        setNameCheckState(false);
                        formBox1.current.childNodes[5].innerText = `사용할 수 없는 NAME입니다`;
                        formBox1.current.childNodes[5].style.color = "red";
                        formBox1.current.childNodes[5].style.display = "block";
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              />
              <small>NAME을 입력하세요</small>
              <input
                ref={PHONENUMBER}
                type="text"
                id="PHONE-NUMBER"
                name="PHONE-NUMBER"
                placeholder="PHONE-NUMBER를 입력하세요(-제외)"
                autoComplete="off"
                onKeyUp={checkPhonenumber}
              />
              <small>PHONE-NUMBER를 입력하세요</small>
            </div>
            <div className={style.formBox2}>
              <Link to="/signup">
                <button
                  onClick={() => {
                    inputCheck(ID, 1);
                    inputCheck(PASSWORD, 3);
                    inputCheck(NAME, 5);
                    inputCheck(PHONENUMBER, 7);
                    if (
                      ID.current.value &&
                      PASSWORD.current.value &&
                      NAME.current.value &&
                      PHONENUMBER.current.value &&
                      idCheckState &&
                      nameCheckState &&
                      phNumCheckState
                    ) {
                      console.log("전부 입력");
                      axios.get("http://localhost:4000/api/signup/createuser",{
                        params:{
                          createId: ID.current.value,
                          createPw: PASSWORD.current.value,
                          createName: NAME.current.value,
                          createPhNum: PHONENUMBER.current.value,
                        },
                      })
                      .then((res)=>{
                        console.log(res.data);
                        sessionStorage.setItem("signUpUserID", ID.current.value);
                        sessionStorage.setItem("signUpUserPW", PASSWORD.current.value);
                        navigate("/signUpSuccess");
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                    } else {
                      if (!idCheckState) {
                        ID.current.focus();
                        formBox1.current.childNodes[1].innerText = `사용할 수 없는 ID입니다`;
                        formBox1.current.childNodes[1].style.color = "red";
                        formBox1.current.childNodes[1].style.display = "block";
                      } else if (!nameCheckState) {
                        NAME.current.focus();
                        formBox1.current.childNodes[5].innerText = `사용할 수 없는 ID입니다`;
                        formBox1.current.childNodes[5].style.color = "red";
                        formBox1.current.childNodes[5].style.display = "block";
                      } else if (!phNumCheckState) {
                        PHONENUMBER.current.focus();
                        formBox1.current.childNodes[7].innerText = `사용할 수 없는 번호입니다`;
                        formBox1.current.childNodes[7].style.color = "red";
                        formBox1.current.childNodes[7].style.display = "block";
                      }
                    }
                  }}
                >
                  SIGN UP
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
