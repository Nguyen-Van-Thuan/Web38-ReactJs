import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  console.log(currentPage); //Vi tri trang hien tai
  // console.log(totalPages); //Tong so trang = 3

  // Bien tong trang thanh 1 mang cac so [1,2,3]
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // console.log(pageNumbers);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center mb-0">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span aria-hidden="true">Prev</span>
          </button>
        </li>

        {pageNumbers.map((value) => {
          return (
            <li
              className={`page-item ${value === currentPage ? "active" : ""}`}
              key={value}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(value)}
              >
                {value}
              </button>
            </li>
          );
        })}

        <li className="page-item">
          <button
            className="page-link"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span aria-hidden="true">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

{
  /* <li className="page-item active" aria-current="page">
  <a className="page-link" href="#">
    1
  </a>
</li>
<li className="page-item">
  <a className="page-link" href="#">
    2
  </a>
</li>
<li className="page-item">
  <a className="page-link" href="#">
    3
  </a>
</li>
<li className="page-item">
  <a className="page-link" href="#">
    4
  </a>
</li> */
}
