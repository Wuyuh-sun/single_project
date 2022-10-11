import { Route, Routes } from "react-router-dom";
import style from "../../styles/Home/content.module.css";
import Intro from "./Contents/Intro";
import MyInfo from "./Contents/MyInfo";
import NowBook from "./Contents/NowBook";
import LastBook from "./Contents/LastBook";
import RoomBook from "./Contents/RoomBook";
export default function Content() {
  return (
    <>
      <div className={style.wrap}>
        <Routes>
          <Route path="/intro" element={<Intro />} />
          <Route path="/myinfo" element={<MyInfo />} />
          <Route path="/nowbook" element={<NowBook />} />
          <Route path="/lastbook" element={<LastBook />} />
          <Route path="/roombook" element={<RoomBook />} />
        </Routes>
      </div>
    </>
  );
}
