import React from "react";
import { Modal } from "react-bootstrap";

const ClientCartPopup = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Giỏ hàng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section className="h-100 gradient-custom">
          <div className="container">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Số lượng - 2 sản phẩm</h5>
                  </div>
                  <div className="card-body">
                    {/* Single item */}
                    <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        {/* Image */}
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                          <a href="#!">
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            />
                          </a>
                        </div>
                        {/* Image */}
                      </div>
                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        {/* Data */}
                        <p>
                          <strong>Blue denim shirt</strong>
                        </p>
                        <p>Color: blue</p>
                        <p>Size: M</p>
                        <button
                          type="button"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-primary btn-sm me-1 mb-2"
                          data-mdb-tooltip-init=""
                          title="Remove item"
                        >
                          <i className="fas fa-trash" />
                        </button>
                        <button
                          type="button"
                          data-mdb-button-init=""
                          data-mdb-ripple-init=""
                          className="btn btn-danger btn-sm mb-2"
                          data-mdb-tooltip-init=""
                          title="Move to the wish list"
                        >
                          <i className="fas fa-heart" />
                        </button>
                        {/* Data */}
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        {/* Quantity */}
                        <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                          <button
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-primary px-3 me-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          >
                            -{/* <i className="fas fa-minus" /> */}
                          </button>
                          <div data-mdb-input-init="" className="form-outline">
                            <input
                              id="form1"
                              min={0}
                              name="quantity"
                              defaultValue={1}
                              type="number"
                              className="form-control"
                            />
                            {/* <label className="form-label" htmlFor="form1">
                              Quantity
                            </label> */}
                          </div>
                          <button
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-primary px-3 ms-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            +{/* <i className="fas fa-plus" /> */}
                          </button>
                        </div>
                        {/* Quantity */}
                        {/* Price */}
                        <p className="text-start text-md-center">
                          <strong>$17.99</strong>
                        </p>
                        {/* Price */}
                      </div>
                    </div>
                    {/* Single item */}
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <p>
                      <strong>Dự kiến giao hàng</strong>
                    </p>
                    <p className="mb-0">12/10/2024 - 14/10/2024</p>
                  </div>
                </div>
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body">
                    <p>
                      <strong>Chúng tôi chấp nhận</strong>
                    </p>
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                    />
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                    />
                    <img
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Đơn hàng</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Sản phẩm
                        <span>$53.98</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Vận chuyển
                        <span>Miễn phí</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Tổng tiền</strong>
                          <strong>
                            <p className="mb-0">(Đã bao gồm VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>$53.98</strong>
                        </span>
                      </li>
                    </ul>
                    <button
                      type="button"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Tiến hành thanh toán
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
};

export default ClientCartPopup;

// https://mdbootstrap.com/docs/standard/extended/shopping-carts
