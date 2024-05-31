import axios from "axios";
import { useEffect, useState } from "react";

const useGetAxiosPagi = (url, initialPage = 1, itemsPerPage = 8) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage); //-> State để theo dõi trang hiện tại
  const [totalPages, setTotalPages] = useState(1); //-> State để lưu trữ tổng số trang

  const getApi = async (page = initialPage) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${url}?_page=${page}&_limit=${itemsPerPage}`
      );
      if (response.status === 200 || response.status === 204) {
        const totalItems = parseInt(response.headers["x-total-count"], 10); //-> Lấy tổng số items từ header của phản hồi

        setTotalPages(Math.ceil(totalItems / itemsPerPage)); //-> Tính tổng số trang dựa trên tổng số items và số items mỗi trang

        setData(response.data); // -> Cập nhật dữ liệu vào state

        setIsLoading(false); // -> Kết thúc tải dữ liệu
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
    data, // Dữ liệu từ API
    isLoading, // Trạng thái tải dữ liệu
    currentPage, // Trang hiện tại
    totalPages, // Tổng số trang
    setCurrentPage, // Hàm thay đổi trang hiện tại
    getApi, // Hàm để gọi API thủ công nếu cần
  };
};

export default useGetAxiosPagi;

// status http request
// 200 OK: Thành công, máy chủ có thể trả về dữ liệu xác nhận rằng sản phẩm đã bị xóa, có thể kèm theo các thông tin bổ sung khác.
// 204 No Content:Thành công nhưng máy chủ không trả về bất kỳ dữ liệu nào trong phản hồi.
