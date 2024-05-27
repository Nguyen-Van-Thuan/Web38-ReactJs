import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { URL_PRODUCT_LIST } from "../../components/Untils";
import Pagination from "../../components/admin/Pagination";
import useAxios from "../../hooks/useAxios";

const Wallet = () => {
  // Get api product
  const { data, isLoading, getApi } = useAxios(URL_PRODUCT_LIST);
  let [isDelete, setIsDelete] = useState(false);

  const handleDelete = async (id) => {
    try {
      // Xac dinh url muon xoa
      const URL_DELETE = URL_PRODUCT_LIST + "/" + id;
      setIsDelete(true);
      // Xoa san pham
      const response = await axios.delete(URL_DELETE);
      if (response.status == 200 || response.status) {
        alert("xoa thanh cong");
        getApi();
        setIsDelete(false);
      }
    } catch (error) {
      setIsDelete(false);
      console.log(error);
      alert("xoa that bai");
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
                      <td colSpan={5}>Chưa có sản phẩm nào.</td>
                    </tr>
                  )}
                  {data.length > 0 &&
                    data.map((value) => {
                      // console.log(value);
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
                            {isDelete == true ? (
                              <Button
                                variant="danger"
                                disabled
                              >
                                Đang cập nhât
                              </Button>
                            ) : (
                              <Button
                                variant="danger"
                                onClick={() => handleDelete(value.id)}
                              >
                                Xoá SP
                              </Button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
