import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Content from "../components/Home/Content";
import Nav from "../components/Home/Nav";

export default function Home() {
  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.userID === undefined) {
      navigate("/");
    } else {
      navigate("/home/intro");
    }
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/*" element={<Content />} />
      </Routes>
    </>
  );
}
