import React from "react";
import { useSelector } from "react-redux";

const DisplayValue = () => {
  // lay trang thai tu store hien thi ra ui
  // Phai log state de hieu kho (store) co nhung trang thai gi -> state.calculator.value
  const counter = useSelector((state) => state.calculator.value);

  return <h1>{counter}</h1>;
};

export default DisplayValue;
