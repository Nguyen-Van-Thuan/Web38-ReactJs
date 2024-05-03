import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowApi = () => {
  const URL_API = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  useEffect(() => {

    const getApi = async () => {
      const data = await axios.get(URL_API);

      setData(data.data);
    }
    getApi();

  },[]);
  console.log(data);

  return (
    <>
      <h1>Hien thi title tu API</h1>
      <ul>
        {data.length > 0 && data.map((value)=>{
          console.log(value);
          return (
            <li key={value.id}>{value.title}</li>
          )
        })}
      </ul>
    </>
  );
};

export default ShowApi;

// B1: Cai dat vien axios
// B2: su dung useEffect() thuc hien call api

// Trong useEffect(()=> { code logic }, depedencies) -> Cu phap day du cua useEffect

  // -> TH1: Dependencies khong truyen vao gia tri gi -> useEffect chay vo tan
  // -> TH2: Dependencies la 1 mang rong [] -> useEffect chay 1 lan
  // -> TH3: Dependencies la 1 mang, nhung ben trong co gia tri cu the -> Bien thay doi useEffect chay lai, k thay doi thi giu nguyen
