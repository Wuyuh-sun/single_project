import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { settingStateFunc } from "../../../store/modules/settingSlice";
import style from "../../../styles/Home/Nav/settingBox.module.css";

export default function SettingBox() {
  const settingState = useSelector((state) => {
    return state.settingState.value;
  });
  const dispatch = useDispatch();

  const [userID, setUserID] = useState();
  const [userPW, setUserPW] = useState();

  let navigate = useNavigate();

  // User정보 가져오기
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/logingUserInfo", {
        params: {
          reqID: sessionStorage.userID,
        },
      })
      .then((res) => {
        setUserID(res.data[0].ID);
        setUserPW(res.data[0].PASSWORD);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(settingStateFunc(false));
  }, []);

  //Setting창 활성화/비활성화
  useEffect(() => {
    if (settingState === true) {
      wrap.current.style.display = "flex";
    } else {
      wrap.current.style.display = "none";
    }
  }, [settingState]);

  const wrap = useRef();

  return (
    <>
      <div ref={wrap} className={style.wrap}>
        <div className={style.contentBox1}>
          <div>내 정보</div>
          <div>ID : {userID}</div>
          <div>NAME : {userPW}</div>
          <button
            onClick={() => {
              sessionStorage.removeItem("userID");
              navigate("/");
            }}
          >
            LOGOUT
          </button>
        </div>
        <div className={style.contentBox2}>
          <Link to="/home/userinfo">
            <button>계정 상세 정보</button>
          </Link>
          <Link to="/home/nowbook">
            <button>현재 예약 조회</button>
          </Link>
          <Link to="/home/lastbook">
            <button>최근 예약 조회</button>
          </Link>
        </div>
      </div>
    </>
  );
}
