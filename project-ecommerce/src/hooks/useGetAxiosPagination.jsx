import axios from "axios";
import React, { useEffect, useState } from "react";

const useGetAxiosPagination = (url, initialPage = 1, itemsPerPage = 5) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(initialPage); //-> State để theo dõi trang hiện tại
  const [totalPages, setTotalPages] = useState(1); //-> State để lưu trữ tổng số trang

  const getApi = async (currentPage = initialPage) => {
    // console.log(page);

    let params = `?_page=${currentPage}&_limit=${itemsPerPage}`;
    const response = await axios.get(url + params);

    if (response.status === 200 || response.status === 204) {
      // console.log(response);

      // Tinh tong so trang Page listing
      let totalItems = parseInt(response.headers["x-total-count"]); //Tong SP trong db
      // console.log(totalItems/itemsPerPage);
      setTotalPages(totalItems/itemsPerPage);

      setData(response.data);
      setIsLoading(false);
    }
  };

  // Call api
  useEffect(() => {
    getApi(currentPage);
  }, [url, currentPage]);

  return { data, isLoading, getApi, totalPages, setCurrentPage, currentPage };
};

export default useGetAxiosPagination;


// Note:
// Lay tong so trang tu api -> hien so trang o page listing
//  = tong so luong / so pham 1 trang.