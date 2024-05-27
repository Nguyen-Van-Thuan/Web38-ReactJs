import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getApi = async () => {
    const response = await axios.get(url);
    // console.log(response);
    setData(response.data);
    setIsLoading(false);
  };

  // Call api
  useEffect(() => {
    getApi();
  }, [url]);

  return { data, isLoading, getApi };
};

export default useAxios;
