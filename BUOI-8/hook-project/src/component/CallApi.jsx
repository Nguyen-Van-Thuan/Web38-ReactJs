import React, { useEffect, useState } from "react";

const CallApi = () => {
  const URL_API = `https://fakestoreapi.com/users`;
  const [list, setList] = useState([]);

  useEffect(() => {
    // Khoi tao function getApi
    const getApi = async () => {
      try {
        const response = await fetch(URL_API);
        const data = await response.json();

        // console.log(data);
        setList(data);
      } catch (error) {
        console.log(error);
      }
    };

    // Thuc thi function getApi()
    getApi();
  }, []);

  console.log(list);
  return (
    <>
      {list.length > 0 &&
        list.map((value) => {
          console.log(value);
          return <h1 key={value.id}>{value.username}</h1>;
        })}
    </>
  );
};

export default CallApi;
