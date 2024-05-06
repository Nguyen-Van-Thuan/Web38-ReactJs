import React from "react";
import ConponentA from "./component/ConponentA.jsx";
import ComponentB from "./component/ComponentB.jsx";
import MyContext from "./context/MyContext.jsx";
import useGetApi from "./hooks/useGetApi.jsx";

const App = () => {
  const name = "Web38!";
  const email = "web38@gmail.com 123";
  const age = 20;
  const url = `https://fakestoreapi.com/products`;

  const { data, loading, error } = useGetApi(url);
  console.log(data);

  if (loading == true) return <>...Loading</>;
  if (error) return console.log(error);

  return (
    <>
      <MyContext.Provider value={{ age, email }}>
        <ConponentA name={name} />
      </MyContext.Provider>
    </>
  );
};

export default App;
