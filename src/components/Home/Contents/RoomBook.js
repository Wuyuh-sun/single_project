import { settingStateFunc } from "../../../store/modules/settingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import style from "../../../styles/Home/Contents/roomBook.module.css";
import axios from "axios";

export default function RoomBook() {
  const settingState = useSelector((state) => {
    return state.settingState.value;
  });
  const dispatch = useDispatch();

  const [userID, setUserID] = useState();
  const [userName, setUserName] = useState();
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
        setUserName(res.data[0].NAME);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(settingStateFunc(false));
  }, []);

  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(date.getFullYear());
  const [month, setMonth] = useState(1 + date.getMonth());
  const [day, setDay] = useState(date.getDate());

  const [path, setPath] = useState("경일대학교/창의융합교육센터/스터디룸(1)");
  const [selectDay, setSelectDay] = useState(year + "-" + month + "-" + day);
  const [selectTimeText, setSelectTimeText] = useState();
  const [selectTimeNode, setSelectTimeNode] = useState();

  const [bookUserName, setBookUserName] = useState();
  const bookUserNameRef = useRef();

  const selectTime = useRef([]);

  useEffect(() => {
    if (settingState === true) {
      dispatch(settingStateFunc(false));
    }
  }, []);

  useEffect(() => {}, [path]);

  useEffect(() => {
    setSelectDay(year + "-" + month + "-" + day);
  }, [date]);

  useEffect(() => {
    selectTime.current.forEach((item, i) => {
      item.style = "";
      item.classList.remove("timeSelectorClicking");
      selectTime.current[i].bookReservationUserName = undefined;
    });
    setSelectTimeText(undefined);
    setSelectTimeNode(undefined);
    setBookUserName(undefined);
  }, [selectDay]);

  useEffect(() => {
  }, [path, selectDay, selectTimeText, selectTimeNode]);

  useEffect(() => {}, [selectDay]);

  function setDateAll(e) {
    setDate(e);
    setYear(e.getFullYear());
    setMonth(1 + e.getMonth());
    setDay(e.getDate());
  }
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/roombookread", {
        params: {
          PATH: path,
          DATE: selectDay,
        },
      })
      .then((res) => {
        res.data.forEach((item, i) => {
          selectTime.current[item.TIMEIDX].style.backgroundColor = "#ebd4d4";
          selectTime.current[item.TIMEIDX].bookReservationUserName = item.USERNAME;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [path, selectDay]);

  useEffect(()=>{
    // console.log(bookUserName);
    if(bookUserName === undefined){
      bookUserNameRef.current.style.display = "none";
    } else{
      bookUserNameRef.current.style.display = "block";
    }
  },[bookUserName])
  return (
    <>
      <div className={style.wrap}>
        <div className={style.nowRoomPath}>{path}</div>
        <div ref={bookUserNameRef} className={style.bookUserName}>예약자 - {bookUserName}</div>
        <div className={style.controller}>
          <div className={style.calendarWrap}>
            <Calendar
              calendarType="US"
              locale="en-GB"
              onChange={setDateAll}
              value={date}
            />
          </div>
          <div className={style.timeSelectorWrap}>
            <div className={style.timeSelectTitle}>시간 선택</div>
            <ul className={style.timeSelector}>
              <li
                ref={(el) => (selectTime.current[0] = el)}
                onClick={(e) => {
                  selectTime.current.forEach((item, i) => {
                    item.classList.remove("timeSelectorClicking");
                  });
                  e.currentTarget.classList.add("timeSelectorClicking");
                  setSelectTimeText(
                    selectTime.current[0].textContent.replace(/(\s*)/g, "")
                  );
                  setSelectTimeNode(0);
                  if(selectTime.current[0].bookReservationUserName === undefined){
                    setBookUserName(undefined);
                  } else{
                    setBookUserName(selectTime.current[0].bookReservationUserName);
                  }
                  
                }}
              >
                9 : 00 ~ 11 : 00
              </li>
              <li
                ref={(el) => (selectTime.current[1] = el)}
                onClick={(e) => {
                  selectTime.current.forEach((item, i) => {
                    item.classList.remove("timeSelectorClicking");
                  });
                  e.currentTarget.classList.add("timeSelectorClicking");
                  setSelectTimeText(
                    selectTime.current[1].textContent.replace(/(\s*)/g, "")
                  );
                  setSelectTimeNode(1);
                  if(selectTime.current[1].bookReservationUserName === undefined){
                    setBookUserName(undefined);
                  } else{
                    setBookUserName(selectTime.current[1].bookReservationUserName);
                  }
                  
                }}
              >
                11 : 00 ~ 12 : 00
              </li>
              <li
                ref={(el) => (selectTime.current[2] = el)}
                onClick={(e) => {
                  selectTime.current.forEach((item, i) => {
                    item.classList.remove("timeSelectorClicking");
                  });
                  e.currentTarget.classList.add("timeSelectorClicking");
                  setSelectTimeText(
                    selectTime.current[2].textContent.replace(/(\s*)/g, "")
                  );
                  setSelectTimeNode(2);
                  if(selectTime.current[2].bookReservationUserName === undefined){
                    setBookUserName(undefined);
                  } else{
                    setBookUserName(selectTime.current[2].bookReservationUserName);
                  }
                  
                }}
              >
                12 : 00 ~ 13 : 00
              </li>
              <li
                ref={(el) => (selectTime.current[3] = el)}
                onClick={(e) => {
                  selectTime.current.forEach((item, i) => {
                    item.classList.remove("timeSelectorClicking");
                  });
                  e.currentTarget.classList.add("timeSelectorClicking");
                  setSelectTimeText(
                    selectTime.current[3].textContent.replace(/(\s*)/g, "")
                  );
                  setSelectTimeNode(3);
                  if(selectTime.current[3].bookReservationUserName === undefined){
                    setBookUserName(undefined);
                  } else{
                    setBookUserName(selectTime.current[3].bookReservationUserName);
                  }
                  
                }}
              >
                13 : 00 ~ 15 : 00
              </li>
              <li
                ref={(el) => (selectTime.current[4] = el)}
                onClick={(e) => {
                  selectTime.current.forEach((item, i) => {
                    item.classList.remove("timeSelectorClicking");
                  });
                  e.currentTarget.classList.add("timeSelectorClicking");
                  setSelectTimeText(
                    selectTime.current[4].textContent.replace(/(\s*)/g, "")
                  );
                  setSelectTimeNode(4);
                  if(selectTime.current[4].bookReservationUserName === undefined){
                    setBookUserName(undefined);
                  } else{
                    setBookUserName(selectTime.current[4].bookReservationUserName);
                  }
                  
                }}
              >
                15 : 00 ~ 17 : 00
              </li>
              <li
                ref={(el) => (selectTime.current[5] = el)}
                onClick={(e) => {
                  selectTime.current.forEach((item, i) => {
                    item.classList.remove("timeSelectorClicking");
                  });
                  e.currentTarget.classList.add("timeSelectorClicking");
                  setSelectTimeText(
                    selectTime.current[5].textContent.replace(/(\s*)/g, "")
                  );
                  setSelectTimeNode(5);
                  if(selectTime.current[5].bookReservationUserName === undefined){
                    setBookUserName(undefined);
                  } else{
                    setBookUserName(selectTime.current[5].bookReservationUserName);
                  }
                  
                }}
              >
                17 : 00 ~ 18 : 00
              </li>
            </ul>
            <div className={style.buttonWrap}>
              <button
                onClick={() => {
                  if (
                    selectTimeText !== undefined &&
                    selectTimeNode !== undefined
                  ) {
                    axios
                      .get("http://localhost:4000/api/roombookexecution", {
                        params: {
                          BOOK: path + " " + selectDay + " " + selectTimeText,
                          PATH: path,
                          DATE: selectDay,
                          TIME: selectTimeText,
                          TIMEIDX: selectTimeNode,
                          ID: userID,
                          USERNAME: userName,
                        },
                      })
                      .then((res) => {
                        console.log(res);
                        if (res.data.code === "ER_DUP_ENTRY") {
                          alert("이미 예약이 완료된 시간입니다.");
                          // window.location.reload();
                        } else {
                          alert("예약되었습니다.");
                          window.location.reload();
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  } else {
                    alert("시간을 선택하고 예약해주세요");
                  }
                }}
              >
                예약하기
              </button>
              <button onClick={()=>{
                if (
                  selectTimeText !== undefined &&
                  selectTimeNode !== undefined
                ) {
                  axios
                    .get("http://localhost:4000/api/roombookcancel", {
                      params: {
                        PATH: path,
                        DATE: selectDay,
                        TIMEIDX: selectTimeNode,
                        ID: userID
                      },
                    })
                    .then((res) => {
                      console.log(res);
                      if (res.data.AFFECTEDROWS === 0) {
                        alert("본인이 예약한 시간만 취소할 수 있습니다.");
                        // window.location.reload();
                      } else {
                        alert("취소되었습니다.");
                        window.location.reload();
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                } else {
                  alert("시간을 선택하고 취소해주세요");
                }
              }}>예약취소</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
