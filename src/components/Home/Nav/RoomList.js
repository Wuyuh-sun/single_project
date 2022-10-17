import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { roomStateFunc } from "../../../store/modules/roomSlice";
import style from "../../../styles/Home/Nav/roomList.module.css";

export default function RoomList() {
  const [FRoomData, setFRoomData] = useState();

  const [BRoomHandler, setBRoomHandler] = useState(false);
  const [RRoomHandler, setRRoomHandler] = useState(false);

  const BRoom = useRef();
  const RRoom = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/defaultroomlist")
      .then((res) => {
        // console.log(res.data);
        setFRoomData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!BRoomHandler) {
      BRoom.current.style.height = "0";
    } else {
      BRoom.current.style.height = "auto";
    }
    if (!RRoomHandler) {
      RRoom.current.style.height = "0";
    } else {
      RRoom.current.style.height = "auto";
    }
  }, [BRoomHandler, RRoomHandler]);

  return (
    <>
      <ul className={style.wrap}>
        <li
          className={style.F_room}
          onClick={(e) => {
            if (!BRoomHandler) {
              setBRoomHandler(true);
            } else {
              setBRoomHandler(false);
            }
          }}
        >
          경일대학교
        </li>
        <ul ref={BRoom} className={style.B_roomWrap}>
          <li className={style.B_room}>중앙도서관</li>
          <li className={style.B_room}>산학협력관</li>
          <li
            className={style.B_room}
            onClick={(e) => {
              if (!RRoomHandler) {
                setRRoomHandler(true);
              } else {
                setRRoomHandler(false);
              }
            }}
          >
            창의융합교육센터
          </li>
          <ul ref={RRoom} className={style.R_roomWrap}>
            <Link to="/home/roombook">
              <li
                className={style.R_room}
                onClick={() => {
                  sessionStorage.setItem("room", "스터디룸(1)");
                  dispatch(roomStateFunc("스터디룸(1)"));
                }}
              >
                스터디룸(1)
              </li>
            </Link>
            <Link to="/home/roombook">
              <li
                className={style.R_room}
                onClick={() => {
                  sessionStorage.setItem("room", "스터디룸(2)");
                  dispatch(roomStateFunc("스터디룸(2)"));
                }}
              >
                스터디룸(2)
              </li>
            </Link>
            <Link to="/home/roombook">
              <li
                className={style.R_room}
                onClick={() => {
                  sessionStorage.setItem("room", "스터디룸(3)");
                  dispatch(roomStateFunc("스터디룸(3)"));
                }}
              >
                스터디룸(3)
              </li>
            </Link>
            <Link to="/home/roombook">
              <li
                className={style.R_room}
                onClick={() => {
                  sessionStorage.setItem("room", "캡스톤디자인실습실(1)");
                  dispatch(roomStateFunc("캡스톤디자인실습실(1)"));
                }}
              >
                캡스톤디자인실습실(1)
              </li>
            </Link>
            <Link to="/home/roombook">
              <li
                className={style.R_room}
                onClick={() => {
                  sessionStorage.setItem("room", "캡스톤디자인실습실(2)");
                  dispatch(roomStateFunc("캡스톤디자인실습실(2)"));
                }}
              >
                캡스톤디자인실습실(2)
              </li>
            </Link>
          </ul>
        </ul>
        <li className={style.F_room}>대구가톨릭대학교</li>
        <li className={style.F_room}>국립긍오공과대학교</li>
        <li className={style.F_room}>국립안동대학교</li>
      </ul>
    </>
  );
}
