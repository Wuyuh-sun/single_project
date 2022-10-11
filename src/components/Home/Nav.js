import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "../../styles/Home/nav.module.css";
import SearchBox from "./Nav/SearchBox";
import SettingBox from "./Nav/SettingBox";
import { settingStateFunc } from "../../store/modules/settingSlice";

export default function Nav() {
  const settingState = useSelector((state) => {
    return state.settingState.value;
  });
  const dispatch = useDispatch();

  return (
    <>
      <div className={style.wrap}>
        <div className={style.header}>
          <Link to="/home">
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
        <SearchBox />
      </div>
      <SettingBox />
    </>
  );
}
