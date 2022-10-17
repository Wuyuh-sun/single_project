import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import style from "../../../styles/Home/Contents/intro.module.css";
import { settingStateFunc } from "../../../store/modules/settingSlice";
import { useDispatch, useSelector } from "react-redux";
import { roomStateFunc } from "../../../store/modules/roomSlice";
import axios from "axios";

export default function Intro() {
  const settingState = useSelector((state) => {
    return state.settingState.value;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (settingState === true) {
      dispatch(settingStateFunc(false));
    }
  }, []);

  const wrap = useRef();

  const [lastBookData, setLastBookData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/userlastbookread3", {
        params: {
          ID: sessionStorage.userID,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setLastBookData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div ref={wrap} className={style.wrap}>
        <div className={style.wrapCenter}>
          <h1>Welcome to ROOMBOOK :)</h1>
          <h2>
            왼쪽의 메뉴를 통해 시설을 <br />
            예약해주세요
          </h2>
          <div className={style.recentBox}>
            <h2>Recently</h2>
            <ul>
              {lastBookData !== undefined
                ? lastBookData.map((item, i) => {
                    // console.log(item);
                    return (
                      <Link key={i} to="/home/roombook">
                        <li
                          className={style.lastBookWrap}
                          onClick={() => {
                            sessionStorage.setItem(
                              "room",
                              `${item.PATH.split("/")[2]}`
                            );
                            dispatch(
                              roomStateFunc(`${item.PATH.split("/")[2]}`)
                            );
                          }}
                        >
                          <div className={style.path}>
                            {i + 1}. {item.PATH}
                          </div>
                          <div className={style.dateTime}>
                            {item.DATE} / {item.TIME}
                          </div>
                        </li>
                      </Link>
                    );
                  })
                : false}
              {/* <Link to="#">
                <li>1. 경일대학교/창의융합교육센터/스터디룸(1)</li>
              </Link>
              <Link to="#">
                <li>2. 경일대학교/창의융합교육센터/스터디룸(2)</li>
              </Link>
              <Link to="#">
                <li>3. 경일대학교/창의융합교육센터/스터디룸(3)</li>
              </Link> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
