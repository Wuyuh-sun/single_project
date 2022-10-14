import { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Content from "../components/Home/Content";
import Nav from "../components/Home/Nav";

export default function Home() {
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (sessionStorage.userID === undefined) {
      navigate("/");
    }
    if (location.pathname === "/home" || location.pathname === "/home/") {
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
