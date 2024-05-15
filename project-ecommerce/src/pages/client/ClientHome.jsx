import React, { useState } from "react";
import { useEffect } from "react";
import { URL_PRODUCT_LIST } from "../../components/Untils";
import axios from "axios";
import { Link } from "react-router-dom";

const ClientHome = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Call api
  useEffect(() => {
    const getApi = async () => {
      const response = await axios.get(URL_PRODUCT_LIST);
      // console.log(response);
      setData(response.data);
      setIsLoading(false);
    };
    getApi();
  }, [URL_PRODUCT_LIST]);

  if (isLoading) return <h1>Data loading...</h1>;
  console.log(data);

  return (
    <>
      {/* Banner*/}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>

      {/* Prouduct*/}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.length > 0 &&
              data.map((value) => {
                // console.log(value);
                return (
                  <>
                    <Link key={value.id} to={`/product/${value.id}`}>
                      <div className="col mb-5">
                        <div className="card h-100">
                          {/* Sale badge*/}
                          <div
                            className="badge bg-dark text-white position-absolute"
                            style={{ top: "0.5rem", right: "0.5rem" }}
                          >
                            Sale
                          </div>
                          {/* Product image*/}
                          <img
                            className="card-img-top"
                            src={value.image}
                            alt="..."
                          />
                          {/* Product details*/}
                          <div className="card-body p-4">
                            <div className="text-center">
                              {/* Product name*/}
                              <h5 className="fw-bolder">{value.title}</h5>
                              {/* Product reviews*/}
                              <div className="d-flex justify-content-center small text-warning mb-2">
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                                <div className="bi-star-fill" />
                              </div>
                              {/* Product price*/}
                              {value.price}
                            </div>
                          </div>
                          {/* Product actions*/}
                          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center">
                              <a
                                className="btn btn-outline-dark mt-auto"
                                href="#"
                              >
                                Add to cart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientHome;
