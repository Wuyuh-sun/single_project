import { settingStateFunc } from "../../../store/modules/settingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "../../../styles/Home/Contents/myinfo.module.css";
import axios from "axios";

export default function MyInfo() {
  const settingState = useSelector((state) => {
    return state.settingState.value;
  });
  const dispatch = useDispatch();

  const [userId, setUserId] = useState();
  const [userPw, setUserPw] = useState();
  const [userName, setUserName] = useState();
  const [userPhNum, setUserPhNum] = useState();

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
            <input type="text" name="ID" id="ID" autoComplete="off" value={userId}/>
            <label htmlFor="PASSWORD">PASSWORD</label>
            <input
              type="password"
              name="PASSWORD"
              id="PASSWORD"
              autoComplete="off"
              value={userPw}
            />
            <label htmlFor="NAME">NAME</label>
            <input type="text" name="NAME" id="NAME" autoComplete="off" 
            value={userName}/>
            <label htmlFor="PHONENUMBER">PHONE-NUMBER</label>
            <input
              type="text"
              name="PHONENUMBER"
              id="PHONENUMBER"
              autoComplete="off"
              value={userPhNum}
            />
            <button>확인</button>
          </div>
        </div>
      </div>
    </>
  );
}
