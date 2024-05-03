import React, { useReducer } from "react";

const TodoList = () => {

  const initSate = [];
  const ADD_ACTION = 'ADD_TODO';

  const reducer = (state, action) => {
    // state: trang thai cua cai ung dung
    // action: hanh dong cua ong nguoi dung len ung dung cua minh
    // console.log(state);
    // console.log(action);

    switch(action){ //action = ADD_TODO
      case "ADD_TODO":
        return [...state, "Hello 500 anh em lop web38!"];
      default:
         throw new Error("Hanh dong khong hop le");
    }
  }

  const [list, dispath] = useReducer(reducer, initSate);

  console.log(list);

  return (
    <>
      <ul>
        {/* <li>Hello 500 anh em lop web38!</li> */}
        {list.length > 0 && list.map((value, index)=>{
          return <li key={index}>{value}</li>
        })}
      </ul>
      <button onClick={()=> dispath(ADD_ACTION)}>Add Todo</button>
    </>
  );
};

export default TodoList;


// ...state: spread operator -> cu phap es6 -> sao chep lai gia tri mang ban dau
