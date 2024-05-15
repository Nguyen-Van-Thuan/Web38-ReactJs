import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./CalculatorSlice";

const Calculator = () => {
  // gui hanh dong tu ui len -> store (reducer) -> state
  const dispath = useDispatch();

  return (
    <>
      <button onClick={() => dispath(increment(1))}>+</button>
      <button onClick={()=>dispath(decrement(2))}>-</button>
    </>
  );
};

export default Calculator;
