import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import style from "../../styles/Home/nav.module.css";
import SearchBox from "./Nav/SearchBox";
import SettingBox from "./Nav/SettingBox";
import { settingStateFunc } from "../../store/modules/settingSlice";
import InfoBox from "./Nav/InfoBox";
import RoomList from "./Nav/RoomList";

export default function Nav() {
  const settingState = useSelector((state) => {
    return state.settingState.value;
  });
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <>
      <div className={style.wrap}>
        <div className={style.header}>
          <Link to="/home/intro">
            <div className={style.logo} />
          </Link>
          <div
            className={style.setting}
            onClick={() => {
              if (settingState === true) {
                dispatch(settingStateFunc(false));
              } else {
                dispatch(settingStateFunc(true));
              }
            }}
          />
        </div>
        {location.pathname === "/home/intro" ? (
          <>
            {/* <SearchBox /> */}
            <RoomList />
          </>
        ) : location.pathname === "/home/roombook" ? (
          <>
            {/* <SearchBox /> */}
            <RoomList />
          </>
        ) : (
          <InfoBox />
        )}
      </div>
      <SettingBox />
    </>
  );
}
