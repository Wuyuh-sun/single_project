import { settingStateFunc } from "../../../store/modules/settingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { roomStateFunc } from "../../../store/modules/roomSlice";
import style from "../../../styles/Home/Contents/lastbook.module.css";
import axios from "axios";

export default function LastBook() {
  const settingState = useSelector((state) => {
    return state.settingState.value;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (settingState === true) {
      dispatch(settingStateFunc(false));
    }
  }, []);

  const [lastBookData, setLastBookData] = useState();
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/userlastbookread5", {
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
      <div className={style.wrap}>
        <div className={style.wrapCenter}>
          <h1>최근 예약 조회</h1>
          <div className={style.lastBookBox}>
            {lastBookData !== undefined
              ? lastBookData.map((item, i) => {
                  // console.log(item);
                  return (
                    <Link key={i} to="/home/roombook">
                      <div
                        className={style.lastBookWrap}
                        onClick={() => {
                          sessionStorage.setItem(
                            "room",
                            `${item.PATH.split("/")[2]}`
                          );
                          dispatch(roomStateFunc(`${item.PATH.split("/")[2]}`));
                        }}
                      >
                        <div className={style.path}>{item.PATH}</div>
                        <div className={style.dateTime}>
                          {item.DATE} / {item.TIME}
                        </div>
                      </div>
                    </Link>
                  );
                })
              : false}
          </div>
        </div>
      </div>
    </>
  );
}
