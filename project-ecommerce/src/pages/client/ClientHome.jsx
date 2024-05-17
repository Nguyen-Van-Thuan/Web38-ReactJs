import React, { useState } from "react";
import { useEffect } from "react";
import { URL_PRODUCT_LIST } from "../../components/Untils";
import axios from "axios";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const ClientHome = () => {
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // // Call api
  // useEffect(() => {
  //   const getApi = async () => {
  //     const response = await axios.get(URL_PRODUCT_LIST);
  //     // console.log(response);
  //     setData(response.data);

  //     // goi du lieu xong doi isLoading -> fasle
  //     setIsLoading(false);
  //   };
  //   getApi();
  // }, [URL_PRODUCT_LIST]);


  // Opmail + su dung custom hook useAciox() -> call api
  const {data, isLoading} = useAxios(URL_PRODUCT_LIST);

  if (isLoading == true) return <h1>Dang lay du lieu ...</h1>;

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
              data.map((value, index) => {
                // console.log(value);
                return (
                  <div className="col mb-5" key={value.id} >
                    <div className="card h-100">
                      <Link to={`/product/${value.id}`}>
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
                            {/* Product price*/}
                            {value.price} Vnd
                          </div>
                        </div>
                      </Link>

                      {/* Product actions*/}
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <a className="btn btn-outline-dark mt-auto" href="#">
                            Them gio hang
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientHome;

// HTML khong cho phep the a long the a
/*
  <a>
    <a></a>
  </a>

  => Loi

*/
