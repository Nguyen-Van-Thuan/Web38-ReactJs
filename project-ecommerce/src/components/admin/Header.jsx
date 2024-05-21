import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Import các hình ảnh
import google from "../../assets/images/social/search.png";
import spotify from "../../assets/images/social/spotify.png";
import telegram from "../../assets/images/social/telegram.png";
import snapchat from "../../assets/images/social/snapchat.png";
import tiktok from "../../assets/images/social/tiktok.png";
import youtube from "../../assets/images/social/youtube.png";
import profileImage from "../../assets/images/medium-shot-happy-man-smiling.jpg";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* TOP BAR */}
      <header className="navbar sticky-top flex-md-nowrap">
        <div className="col-md-3 col-lg-3 me-0 px-3 fs-6">
          <Link className="navbar-brand" to="/">
            Ecommer Project
          </Link>
        </div>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <form
          className="custom-form header-form ms-lg-3 ms-md-3 me-lg-auto me-md-auto order-2 order-lg-0 order-md-0"
          action="#"
          method="get"
          role="form"
        >
          <input
            className="form-control"
            name="search"
            type="text"
            placeholder="Tìm kiếm"
            aria-label="Search"
          />
        </form>
        <div className="navbar-nav me-lg-2">
          <div className="nav-item text-nowrap d-flex align-items-center">
            <div className="dropdown ps-3">
              <Link
                className="nav-link dropdown-toggle text-center"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="navbarLightDropdownMenuLink"
              >
                <i className="bi-bell" />
                <span className="position-absolute start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-lg-end notifications-block-wrap bg-white shadow"
                aria-labelledby="navbarLightDropdownMenuLink"
              >
                <small>Notifications</small>
                <li className="notifications-block border-bottom pb-2 mb-2">
                  <Link
                    className="dropdown-item d-flex  align-items-center"
                    to="#"
                  >
                    <div className="notifications-icon-wrap bg-success">
                      <i className="notifications-icon bi-check-circle-fill" />
                    </div>
                    <div>
                      <span>Your account has been created successfuly.</span>
                      <p>12 days ago</p>
                    </div>
                  </Link>
                </li>
                <li className="notifications-block border-bottom pb-2 mb-2">
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to="#"
                  >
                    <div className="notifications-icon-wrap bg-info">
                      <i className="notifications-icon bi-folder" />
                    </div>
                    <div>
                      <span>Please check. We have sent a Daily report.</span>
                      <p>10 days ago</p>
                    </div>
                  </Link>
                </li>
                <li className="notifications-block">
                  <Link
                    className="dropdown-item d-flex align-items-center"
                    to="#"
                  >
                    <div className="notifications-icon-wrap bg-danger">
                      <i className="notifications-icon bi-question-circle" />
                    </div>
                    <div>
                      <span>Account verification failed.</span>
                      <p>1 hour ago</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown ps-1">
              <Link
                className="nav-link dropdown-toggle text-center"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi-three-dots-vertical" />
              </Link>
              <div className="dropdown-menu dropdown-menu-social bg-white shadow">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-4">
                      <Link className="dropdown-item text-center" to="#">
                        <img
                          src={google}
                          className="profile-image img-fluid"
                          alt="Google"
                        />
                        <span className="d-block">Google</span>
                      </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <Link className="dropdown-item text-center" to="#">
                        <img
                          src={spotify}
                          className="profile-image img-fluid"
                          alt="Spotify"
                        />
                        <span className="d-block">Spotify</span>
                      </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <Link className="dropdown-item text-center" to="#">
                        <img
                          src={telegram}
                          className="profile-image img-fluid"
                          alt="Telegram"
                        />
                        <span className="d-block">Telegram</span>
                      </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <Link className="dropdown-item text-center" to="#">
                        <img
                          src={snapchat}
                          className="profile-image img-fluid"
                          alt="Snapchat"
                        />
                        <span className="d-block">Snapchat</span>
                      </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <Link className="dropdown-item text-center" to="#">
                        <img
                          src={tiktok}
                          className="profile-image img-fluid"
                          alt="Tiktok"
                        />
                        <span className="d-block">Tiktok</span>
                      </Link>
                    </div>
                    <div className="col-lg-4 col-md-4 col-4">
                      <Link className="dropdown-item text-center" to="#">
                        <img
                          src={youtube}
                          className="profile-image img-fluid"
                          alt="Youtube"
                        />
                        <span className="d-block">Youtube</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown px-3">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={profileImage}
                  className="profile-image img-fluid"
                  alt="Profile"
                />
              </Link>
              <ul className="dropdown-menu bg-white shadow">
                <li>
                  <div className="dropdown-menu-profile-thumb d-flex">
                    <img
                      src={profileImage}
                      className="profile-image img-fluid me-3"
                      alt="Profile"
                    />
                    <div className="d-flex flex-column">
                      <small>Thomas</small>
                      <Link to="#">thomas@site.com</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link className="dropdown-item" to="profile.html">
                    <i className="bi-house-fill me-2" />
                    Hồ sơ
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="setting.html">
                    <i className="bi-house-fill me-2" />
                    Cài đặt
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="help-center.html">
                    <i className="bi-question-circle me-2" />
                    Help
                  </Link>
                </li>
                <li
                  className="border-top mt-3 pt-2 mx-4"
                  onClick={handleLogout}
                >
                  <i className="bi-box-arrow-left me-2" />
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
