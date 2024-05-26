import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { URL_PRODUCT_LIST } from "../../components/Untils";
import Pagination from "../../components/common/Pagination";
import useGetAxiosPagi from "../../hooks/useGetAxiosPagi";

const Wallet = () => {
  const { data, isLoading, getApi, currentPage, totalPages, setCurrentPage } =
    useGetAxiosPagi(URL_PRODUCT_LIST);

  // Xóa sản phẩm
  const handleDelete = async (id) => {
    const urlDelete = URL_PRODUCT_LIST + `/` + id;

    try {
      const response = await axios.delete(urlDelete);
      if (response.status === 200 || response.status === 204) {
        alert("xoa thanh cong!");
        getApi();
      }
    } catch (error) {
      alert("xoa that bai");
      console.log(error);
    }
  };

  if (isLoading === true) return <h4>Đang lấy dữ liệu...</h4>;

  return (
    <>
      <div className="title-group mb-3">
        <h1 className="h2 mb-0">Sản phẩm</h1>
      </div>
      <div className="row my-4">
        <div className="col-lg-12 col-12">
          <div className="custom-block bg-white">
            <Link to="/dashboad/product/add-product">
              <Button className="mb-4" variant="success">
                Thêm mới
              </Button>{" "}
            </Link>

            <div className="table-responsive">
              <table className="account-table table">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Danh mục</th>
                    <th scope="col">Hành động</th>
                    <th scope="col">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length <= 0 && (
                    <tr>
                      <td colSpan={6}>Chưa có sản phẩm nào.</td>
                    </tr>
                  )}
                  {data.length > 0 &&
                    data.map((value) => {
                      return (
                        <tr key={value.id}>
                          <td>{value.id}</td>
                          <td scope="row">
                            {value.title || "Không có dữ liệu"}
                          </td>
                          <td scope="row">
                            {value.price || "Không có dữ liệu"}
                          </td>
                          <td scope="row">
                            {value.category || "Không có dữ liệu"}
                          </td>
                          <td scope="row">
                            <Link to={`/dashboad/product/edit/${value.id}`}>
                              <Button variant="warning">Chỉnh sửa</Button>
                            </Link>
                          </td>

                          <td scope="row">
                            <Button
                              variant="danger"
                              onClick={() => handleDelete(value.id)}
                            >
                              Xoá SP
                            </Button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;

// Documentation Pagination: https://www.npmjs.com/package/json-server/v/0.17.4#paginate
