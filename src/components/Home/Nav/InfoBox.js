import { Link } from "react-router-dom";
import style from "../../../styles/Home/Nav/infoBox.module.css";

export default function InfoBox() {
  return (
    <>
      <ul className={style.wrap}>
        <Link to="/home/myinfo">
          <li>계정 상세 정보</li>
        </Link>
        <Link to="/home/nowbook">
          <li>현재 예약 조회</li>
        </Link>
        <Link to="/home/lastbook">
          <li>최근 예약 조회</li>
        </Link>
      </ul>
    </>
  );
}
