import React from "react";
import ClientHeader from "../../components/client/ClientHeader";
import ClientFooter from "../../components/client/ClientFooter";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <>
      <ClientHeader />
      <Outlet />
      <ClientFooter />
    </>
  );
};

export default ClientLayout;
