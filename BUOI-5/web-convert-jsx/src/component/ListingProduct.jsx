import React from "react";
import Card from "./Card";

const ListingProduct = () => {
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      price: 549,
      thumbnail: "https://placehold.co/450x300",
    },
    {
      id: 2,
      title: "iPhone X",
      price: 799,
      thumbnail: "https://placehold.co/450x300",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      price: 399,
      thumbnail: "https://placehold.co/450x300",
    },
  ];

  // Check Products co ton tai sp hay khong
  if (products.length == 0) return <h1>Loading...</h1>;

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((item) => {
            // console.log(item);

            return (
              <div className="col mb-5" key={item.id}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ListingProduct;
