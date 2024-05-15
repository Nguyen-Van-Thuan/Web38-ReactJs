import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  // Call api
  useEffect(() => {
    const getApi = async () => {
      const response = await axios.get(url);
      // console.log(response);
      setData(response.data);
      setIsLoading(false);
    };
    getApi();
  }, [url]);

  return { data, isLoading };
};

export default useAxios;
