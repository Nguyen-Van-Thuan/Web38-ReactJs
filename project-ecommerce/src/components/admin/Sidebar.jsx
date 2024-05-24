import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {

  // Dang xuat user
  const navigate = useNavigate();
  const handleLogout = () => {
    //Xoa toan bo thong tin user (token) trong locaStorage
    localStorage.clear();
    navigate("/login");
  };

  // "active" Sidebar
  const location = useLocation();
  // console.log(location.pathname);


  const isActive = (path) => {
    return (location.pathname === path) ? "nav-link active" : "nav-link"
  }


  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-3 d-md-block sidebar collapse"
    >
      <div className="position-sticky py-4 px-3 sidebar-sticky">
        <ul className="nav flex-column h-100">
          <li className="nav-item">
            <Link
              // className="nav-link active"
              className={isActive("/dashboad")}
              aria-current="page"
              to="/dashboad"
            >
              <i className="bi-house-fill me-2" />
              Tổng quan
            </Link>
          </li>
          <li className="nav-item">
            <Link className={isActive("/dashboad/product")} to="/dashboad/product">
              <i className="bi-house-fill me-2" />
              Sản phẩm
            </Link>
          </li>
          <li className="nav-item">
            <Link className={isActive("/dashboad/profile")} to="/dashboad/profile">
              <i className="bi-house-fill me-2" />
              Hồ sơ
            </Link>
          </li>
          <li className="nav-item">
            <Link className={isActive("/dashboad/setting")} to="/dashboad/setting">
              <i className="bi-house-fill me-2" />
              Cài đặt
            </Link>
          </li>
          <li className="nav-item">
            <Link className={isActive("/dashboad/help")} to="/dashboad/help">
              <i className="bi-house-fill me-2" />
              Trung tâm Trợ giúp
            </Link>
          </li>
          <li
            className="nav-item border-top mt-auto pt-2"
            onClick={handleLogout}
          >
            <i className="bi-box-arrow-left me-2" />
            Đăng xuất
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;


// useLocation(); la 1 hook -> lấy url hiện đang có của trang trên browser