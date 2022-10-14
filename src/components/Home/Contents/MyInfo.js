import { settingStateFunc } from "../../../store/modules/settingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import style from "../../../styles/Home/Contents/myinfo.module.css";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

export default function MyInfo() {
  const settingState = useSelector((state) => {
    return state.settingState.value;
  });
  const dispatch = useDispatch();

  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState();
  const [userName, setUserName] = useState();
  const [userPhNum, setUserPhNum] = useState();

  const passwordLabel = useRef();
  const nameLabel = useRef();

  const passwordInput = useRef();
  const nameInput = useRef();
  const [userPwCheck, setUserPwCheck] = useState(false);
  const [userNameCheck, setUserNameCheck] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (settingState === true) {
      dispatch(settingStateFunc(false));
    }
    axios
      .get("http://localhost:4000/api/logingUserInfo", {
        params: {
          reqID: sessionStorage.userID,
        },
      })
      .then((res) => {
        setUserId(res.data[0].ID);
        setUserPw(res.data[0].PASSWORD);
        setUserName(res.data[0].NAME);
        setUserPhNum("0" + res.data[0].PHONENUM);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className={style.wrap}>
        <div className={style.wrapCenter}>
          <h1>MY INFO</h1>
          <div className={style.infoBox}>
            <label htmlFor="ID">ID</label>
            <input
              type="text"
              name="ID"
              id="ID"
              autoComplete="off"
              defaultValue={userId}
              disabled
              style={{ color: "rgb(30,30,30)" }}
            />
            <label ref={passwordLabel} htmlFor="PASSWORD">
              PASSWORD
            </label>
            <input
              ref={passwordInput}
              type="password"
              name="PASSWORD"
              id="PASSWORD"
              autoComplete="off"
              defaultValue={userPw}
              onKeyUp={(e) => {
                setUserPw(e.currentTarget.value);
                if (e.currentTarget.value === "") {
                  setUserPwCheck(false);
                  passwordLabel.current.innerText = "PASSWORD ❌";
                } else {
                  setUserPwCheck(true);
                  passwordLabel.current.innerText = "PASSWORD ⭕";
                }
              }}
            />
            <label ref={nameLabel} htmlFor="NAME">
              NAME
            </label>
            <input
              type="text"
              ref={nameInput}
              name="NAME"
              id="NAME"
              autoComplete="off"
              defaultValue={userName}
              onKeyUp={(e) => {
                setUserName(e.currentTarget.value);
                console.log(e.currentTarget.value);
                if (e.currentTarget.value === "") {
                  setUserNameCheck(false);
                  nameLabel.current.innerText = "NAME ❌";
                } else {
                  axios
                    .get("http://localhost:4000/api/signup/nameCheck", {
                      params: {
                        nameCheck: e.currentTarget.value,
                      },
                    })
                    .then((res) => {
                      console.log(res.data[0]);
                      if (res.data[0] === undefined) {
                        setUserNameCheck(true);
                        nameLabel.current.innerText = "NAME ⭕";
                      } else {
                        setUserNameCheck(false);
                        nameLabel.current.innerText = "NAME ❌";
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              }}
            />
            <label htmlFor="PHONENUMBER">PHONE-NUMBER</label>
            <input
              type="text"
              name="PHONENUMBER"
              id="PHONENUMBER"
              autoComplete="off"
              defaultValue={userPhNum}
              disabled
              style={{ color: "rgb(30,30,30)" }}
            />
            <button
              onClick={() => {
                if (userPwCheck === true && userNameCheck === true) {
                  axios
                    .get("http://localhost:4000/api/logingUserUpdate", {
                      params: {
                        reqID: userId,
                        reqPW: userPw,
                        reqNAME: userName,
                      },
                    })
                    .then((res) => {
                      console.log(res);
                      navigate("/home/intro");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                } else {
                  if (userPwCheck === false) {
                    passwordInput.current.focus();
                    alert("사용할 수 없는 PASSWORD입니다");
                  } else if (userNameCheck === false) {
                    nameInput.current.focus();
                    alert("사용할 수 없는 NAME입니다");
                  }
                }
              }}
            >
              변경
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
