import axios from "axios";
import { useEffect, useState } from "react";

const useGetAxiosPagi = (url, initialPage = 1, itemsPerPage = 8) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  const getApi = async (page = initialPage) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${url}?_page=${page}&_limit=${itemsPerPage}`
      );
      if (response.status === 200 || response.status === 204) {
        const totalItems = parseInt(response.headers["x-total-count"], 10);
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
        setData(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      alert("Goi du lieu that bai!");
      console.log(error);
      setIsLoading(false);
    }
  };

  // Call api
  useEffect(() => {
    getApi(currentPage);
  }, [url, currentPage, itemsPerPage]);

  return {
    data,
    isLoading,
    currentPage,
    totalPages,
    setCurrentPage,
    getApi,
  };
};

export default useGetAxiosPagi;

// initialPage là trang đầu tiên mà bạn muốn bắt đầu khi component được render lần đầu
// itemsPerPage là số lượng sản phẩm được hiển thị trên mỗi trang
// x-total-count
