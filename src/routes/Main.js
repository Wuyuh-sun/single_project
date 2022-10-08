import { useEffect} from "react";
import axios from "axios";
import Background from "../components/Main/Background";
import Login from "../components/Main/LoginBox";
import { useSelector, useDispatch } from "react-redux";
import { loginState } from "../store/modules/loginSlice";

export default function Main() {
  const loginState = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/test")
      .then((res) => {
        if (res) {
          console.log("서버 데이터를 받아올 수 있습니다.");
          console.log("root계정 data ↓↓↓↓");
          console.log(res.data[0]);
        }
      })
      .catch();
  }, []);

  return (
    <>
      <Background></Background>
      <Login></Login>
    </>
  );
}
