import axios from "axios";
import { useEffect } from "react";
import style from "../../../styles/Home/Nav/roomList.module.css";

export default function RoomList() {
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/defaultroomlist")
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ul className={style.wrap}></ul>
    </>
  );
}
