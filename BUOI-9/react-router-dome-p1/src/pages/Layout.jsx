import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const Layout = () => {
  return (
    <>
      <h1>TP DUNG CHUNG</h1>
      <Header/>
      <Outlet/>
    </>
  );
};

export default Layout;
