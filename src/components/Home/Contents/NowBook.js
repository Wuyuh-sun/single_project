import { settingStateFunc } from "../../../store/modules/settingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "../../../styles/Home/Contents/nowbook.module.css";
import axios from "axios";

export default function NowBook() {
  const settingState = useSelector((state) => {
    return state.settingState.value;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (settingState === true) {
      dispatch(settingStateFunc(false));
    }
  }, []);

  const [space, setSpace] = useState();
  const [buliding, setBuliding] = useState();
  const [room, setRoom] = useState();
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/userroombookread", {
        params: {
          ID: sessionStorage.userID,
        },
      })
      .then((res) => {
        setSpace(res.data[0].PATH.split('/')[0])
        setBuliding(res.data[0].PATH.split('/')[1])
        setRoom(res.data[0].PATH.split('/')[2])
        setDateTime(String(res.data[0].DATE) + " / " + String(res.data[0].TIME));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className={style.wrap}>
        <div className={style.wrapCenter}>
          <h1>현재 예약 조회</h1>
          <div className={style.nowBookBox}>
            <label htmlFor="SPACE">SPACE</label>
            <input type="text" id="SPACE" name="SPACE" defaultValue={space} readOnly/>
            <label htmlFor="BUILDING">BUILDING</label>
            <input type="text" id="BUILDING" name="BUILDING" defaultValue={buliding} readOnly/>
            <label htmlFor="ROOM">ROOM</label>
            <input type="text" id="ROOM" name="ROOM" defaultValue={room} readOnly/>
            <label htmlFor="TIME">DATE / TIME</label>
            <input type="text" id="TIME" name="TIME" defaultValue={dateTime} readOnly/>
            <button>취소</button>
          </div>
        </div>
      </div>
    </>
  );
}
