// useState
// 1. Xac dinh trang thai ban dau: initState = 0;
// 2. Action: Up(count + 1), Down(count - 1);

// useReducer
// 1. Xac dinh trang thai ban dau: initState = 0;
// 2. Action: Up(count + 1), Down(count - 1);
// 3. reducer -> function
// 4. dispath -> Kich hoat reducer

import { useReducer } from "react";

const Counter = () => {
  const initState = 0;

  const UP_ACTION = "UP";
  const DOW_ACTION = "DOWN";

  // function reducer -> xu ly logic, co san
  const reducer = (state, action) => {
    // state: Trang thai hien tai cua component (count)
    // action: Hanh dong nguoi dung bam vao nut button (UP or DOWN)

    console.log("reducer runing...");
    console.log(state);
    console.log(action);

    switch (action) {
      case "UP":
        return state + 1;
      case "DOWN":
        return state - 1;
      default:
        return console.log("Hanh dong khong duoc phep!");
    }
  };

  // const [count, setCount] = useState(0);
  const [count, dispath] = useReducer(reducer, initState);

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() => {
          dispath(DOW_ACTION);
          // setCount(count - 1);
        }}
      >
        Down --
      </button>
      <button
        onClick={() => {
          dispath(UP_ACTION);
          // setCount(count + 1);
        }}
      >
        Up ++
      </button>
    </>
  );
};

export default Counter;

// Redux
