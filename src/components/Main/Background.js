import { Link } from "react-router-dom";
import style from "../../styles/Main/background.module.css";

export default function Background() {
  return (
    <>
      <div className={style.wrap}>
        <Link to="/">
          <div className={style.logo}></div>
        </Link>
        <div className={style.wrap_effect}></div>
      </div>
    </>
  );
}
