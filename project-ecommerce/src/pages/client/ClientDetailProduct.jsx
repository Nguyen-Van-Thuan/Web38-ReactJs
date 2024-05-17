import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL_PRODUCT_LIST } from "../../components/Untils";
import axios from "axios";
import useAxios from "../../hooks/useAxios";
import ClientRelatedProject from "../../components/client/ClientRelatedProject";

const ClientDetailProduct = () => {
  // De lay duoc id tren url
  // useParams -> hook cho phep lay duoc tham so id truyen tu router tren url browser

  const idProduct = useParams();
  // console.log(idProduct); tra ve object

  // Sau khi co id -> lay duoc trang detail bang link listing + id
  let urlProductDetail = URL_PRODUCT_LIST + `/${idProduct.id}`;

  // Su dung custom call api
  const { data, isLoading } = useAxios(urlProductDetail);
  if (isLoading == true) return <h1>Dang lay du lieu ...</h1>;

  // console.log(data);

  return (
    <>
      {/* Product section*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={data.image}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder">{data.title}</h1>
              <div className="fs-5 mb-5">
                <span>{data.price}</span>
              </div>
              <p className="lead">
                {data.content}
              </p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  defaultValue={1}
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related items section*/}
      <ClientRelatedProject/>
    </>
  );
};

export default ClientDetailProduct;

// url: product -> listing

//url: product/1
//url: product/2
//url: product/3
