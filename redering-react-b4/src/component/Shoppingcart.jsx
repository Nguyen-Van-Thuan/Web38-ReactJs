import React from "react";

const Shoppingcart = ({ cart }) => {
  // console.log(cart);

  // Neu cart khong ton tai chay vao day
  if (cart.length == 0) return "Gio hang rong!";

  // Neu cart ton tai
  return (
    <ul>

      {cart.map((item) => {
        return <li key={item}>{item}</li>;
      })}

      {/* {cart.map((item) =>  <li>{item}</li>)} */}
    </ul>
  );
};

export default Shoppingcart;
