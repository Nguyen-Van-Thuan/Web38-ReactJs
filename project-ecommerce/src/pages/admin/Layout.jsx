import React from "react";
import Header from "../../components/admin/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import Footer from "../../components/admin/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          {/* SIDEBAR MENU  */}
          <Sidebar />

          {/* MAIN CONTENT */}
          <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
            <Outlet />

            {/* Footer */}
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;

// alt + shirt + f => format code