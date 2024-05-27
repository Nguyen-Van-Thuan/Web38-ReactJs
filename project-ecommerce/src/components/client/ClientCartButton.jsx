import React from "react";
import ClientCartPopup from "./ClientCartPopup";

const ClientCartButton = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
        className="btn btn-outline-dark"
        onClick={() => setModalShow(true)}
      >
        <i className="bi-cart-fill me-1" />
        Cart
        <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
      </button>
      <ClientCartPopup show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ClientCartButton;

// https://react-bootstrap.netlify.app/docs/components/modal
// https://react-bootstrap.netlify.app/docs/components/modal#sizing-modals-using-custom-css
