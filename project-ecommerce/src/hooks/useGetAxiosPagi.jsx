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
        // Lấy tổng số items từ header của phản hồi
        const totalItems = parseInt(response.headers["x-total-count"], 10);
        // Tính tổng số trang dựa trên tổng số items và số items mỗi trang
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
        // Cập nhật dữ liệu vào state
        setData(response.data);
        // Kết thúc tải dữ liệu
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
    data, // Dữ liệu từ API
    isLoading, // Trạng thái tải dữ liệu
    currentPage, // Trang hiện tại
    totalPages, // Tổng số trang
    setCurrentPage, // Hàm thay đổi trang hiện tại
    getApi, // Hàm để gọi API thủ công nếu cần
  };
};

export default useGetAxiosPagi;

// Note:

// const [isLoading, setIsLoading] = useState(false); -> State để theo dõi trạng thái tải dữ liệu
// const [data, setData] = useState([]); -> State để lưu trữ dữ liệu từ API
// const [currentPage, setCurrentPage] = useState(initialPage); -> State để theo dõi trang hiện tại
// const [totalPages, setTotalPages] = useState(1); -> State để lưu trữ tổng số trang

// status http request
// 200 OK: Khi xóa thành công, máy chủ có thể trả về dữ liệu xác nhận rằng sản phẩm đã bị xóa, có thể kèm theo các thông tin bổ sung khác.
// 204 No Content: Khi xóa thành công nhưng máy chủ không trả về bất kỳ dữ liệu nào trong phản hồi. Đây là cách thể hiện rằng yêu cầu đã được xử lý mà không cần gửi lại bất kỳ nội dung nào.
