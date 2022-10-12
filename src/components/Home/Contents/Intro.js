import { useRef } from "react";
import style from "../../../styles/Home/Contents/intro.module.css";

export default function Intro() {
  const wrap = useRef();

  return (
    <>
      <div ref={wrap} className={style.wrap}>
        <div className={style.wrapCenter}>
          <h1>Welcome to ROOMBOOK :)</h1>
          <h2>왼쪽의 메뉴를 통해 시설을 <br />예약해주세요</h2>
          <div className={style.recentBox}>

          </div>
        </div>
      </div>
    </>
  );
}
