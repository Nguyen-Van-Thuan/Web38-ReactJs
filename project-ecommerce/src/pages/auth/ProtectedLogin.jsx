// Giong nhu buc tuong nha, bao ve ngoi nha

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedLogin = ({ element }) => {

  // Dua tren token (isAuth) ton tai hay chua
  let isAuth = JSON.parse(localStorage.getItem("isAuth"));

  return isAuth ? element :  <Navigate to="/login"/>

};

export default ProtectedLogin;


// element -> <Layout/> nhan tu props
// Navigate 1 component co chuc nang chuyen huong ve router hoac component khac. Va no co san trong react