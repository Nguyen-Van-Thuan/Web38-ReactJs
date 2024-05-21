import React from "react";
import Pagination from "../../components/admin/Pagination";

const Wallet = () => {
  return (
    <>
      <div className="title-group mb-3">
        <h1 className="h2 mb-0">Sản phẩm</h1>
      </div>
      <div className="row my-4">
        <div className="col-lg-12 col-12">
          <div className="custom-block bg-white">
            <h5 className="mb-4">Thêm mới</h5>
            <div className="table-responsive">
              <table className="account-table table">
                <thead>
                  <tr>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Danh mục</th>
                    <th scope="col">Hành động</th>
                    <th scope="col">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">Sản phẩm 1</td>
                    <td scope="row">200.000 vnđ</td>
                    <td scope="row">Quần áo</td>
                    <td scope="row">
                      <span className="badge text-bg-primary">Chỉnh sửa</span>
                    </td>
                    <td scope="row">
                      <span className="badge text-bg-danger">Xoá sản phẩm</span>
                    </td>
                  </tr>
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
