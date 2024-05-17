import React from "react";
import ClientFormLogin from "../../components/auth/ClientFormLogin";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      {/* Login 13 - Bootstrap Brain Component */}
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <h3 className="text-center">
                    <Link to="/">
                      e commerce
                    </Link>
                  </h3>
                  <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                    Sign in to your account
                  </h2>
                  <ClientFormLogin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
