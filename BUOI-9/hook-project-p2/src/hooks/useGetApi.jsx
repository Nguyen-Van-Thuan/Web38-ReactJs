import axios from "axios";
import React, { useEffect, useState } from "react";

const useGetApi = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const getApi = async () => {
      try {
        const response = await axios.get(url);
        // Cap nhat du lieu tu server -> ve data
        setData(response.data);
        setLoading(false);
        setError(response.data.error); //Co loi tu server
      } catch (error) {
        setError(error);
      }
    }

    getApi();

  }, [url]); //[url] -> useEffect chay khi url thay doi

  return {data, loading, error}
};

export default useGetApi;


//Loading: true -> dang lay
// Loading: false -> lay xong roi