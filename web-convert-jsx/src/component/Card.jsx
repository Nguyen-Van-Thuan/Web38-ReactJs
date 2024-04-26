import React from "react";
import Button from "./Button";

const Card = ({item}) => {
  let nameButon = "View options";
  console.log(item);

  return (
    <>
      <div className="card h-100">
        <img
          className="card-img-top"
          src={item.thumbnail}
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{item.title}</h5>
            {item.price}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">

            <Button nameButon={nameButon} age={20}/> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
