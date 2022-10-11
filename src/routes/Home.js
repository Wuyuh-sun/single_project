import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Home/Nav";

export default function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.userID !== undefined) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Nav/>
    </>
  );
}
