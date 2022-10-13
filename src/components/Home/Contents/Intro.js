import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import style from "../../../styles/Home/Contents/intro.module.css";
import { settingStateFunc } from "../../../store/modules/settingSlice";
import { useDispatch, useSelector } from "react-redux";

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
              <Link to="#">
                <li>1. 경일대학교/창의융합교육센터/스터디룸(1)</li>
              </Link>
              <Link to="#">
                <li>2. 경일대학교/창의융합교육센터/스터디룸(2)</li>
              </Link>
              <Link to="#">
                <li>3. 경일대학교/창의융합교육센터/스터디룸(3)</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
