// useState
// 1. Xac dinh trang thai ban dau: initState = 0;
// 2. Action: Up(count + 1), Down(count - 1);

// useReducer
// 1. Xac dinh trang thai ban dau: initState = 0;
// 2. Action: Up(count + 1), Down(count - 1);
// 3. reducer -> function
// 4. dispath -> Kich hoat reducer


// Redux
// 1. Giong cac buoc useReducer
// 2. Bo sung store (Nha kho chung)


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../action/counterActions";

const Button = () => {
  // let count = 0;

  // Khai bao dispath
  const dispath = useDispatch();

  // Su dung store
  const count = useSelector(state => state.count);
  console.log(count);

  // Khai bao handleIncrement
  const handleIncrement = () => {
    dispath(increment());
  }

  // Khai bao handleDecrement
  const handleDecrement = () => {
    dispath(decrement());
  }
  return (
    <>
      <h3>Counter App</h3>
      <button onClick = {handleIncrement}>+</button>
      <h3>{count}</h3>
      <button onClick={handleDecrement}>-</button>
    </>
  );
};

export default Button;
