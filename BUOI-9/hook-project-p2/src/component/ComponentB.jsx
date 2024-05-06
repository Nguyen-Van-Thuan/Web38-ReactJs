import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const ComponentB = ({ name }) => {
  const list = useContext(MyContext);
  console.log(list);

  return (
    <>
      <div>{name}</div>
      <div>{list.email}</div>
    </>
  );
};

export default ComponentB;
