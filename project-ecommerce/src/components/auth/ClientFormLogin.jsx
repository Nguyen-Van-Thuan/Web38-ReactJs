import axios from "axios";
import React, { useEffect, useState } from "react";
import { URL_LOGIN } from "../Untils";
import { useNavigate } from "react-router-dom";

const ClientFormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    //B1: Bo load lai khi bam submit mac dinh cua browser
    e.preventDefault();

    //B2: Xac dinh gia tri cua user gui len api
    let infoUser = {
      email: email,
      password: password,
    };

    /* 
      B3: Xu dung axios gui thong tin nguoi dung den database, de login hay khong ?
      - Note: Su dung POST gui du lieu len database so sanh
      - post su dung aysn/await axios.post("url", "du lieu can gui len");
    
    */
    try {
      setLoading(true);
      const response = await axios.post(URL_LOGIN, infoUser);
      let userDatabase = response.data.user;

      //B4:  Lu tru token cua user vao localStorage
      if (userDatabase) {
        setLoading(false);
        localStorage.setItem("isAuth", JSON.stringify(userDatabase.token));

        // 4.1: Chuyen huong nguoi dung sang login
        navigation("/dashboad");
      }
    } catch (error) {
      alert("Dang nhap that bai!");
      console.log(error);
    }
  };

  // Check xem user dang nhap hay chua dua vao isAuth localStorage
  useEffect(() => {
    // lay duoc isAuth trong localStorge
    let isAuth = JSON.parse(localStorage.getItem("isAuth"));
    // Neu ton tai isAuth thi chuyen huong luon ve dashboad
    if (isAuth) return navigation("/dashboad");
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="row gy-2 overflow-hidden">
        <div className="col-12">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)} //Lay thong tin email nguoi dung nhap vao
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </div>
        </div>
        <div className="col-12">
          <div className="d-grid my-3">


            {loading === true ? (
              <button disabled>Đang đăng nhâp...</button>
            ) : (
              <button className="btn btn-primary btn-lg" type="submit">
                Log in
              </button>
            )}
            
          </div>
        </div>
        <div className="col-12">
          <p className="m-0 text-secondary text-center">
            Don't have an account?{" "}
            <a href="#!" className="link-primary text-decoration-none">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </form>
  );
};

export default ClientFormLogin;

// user dang nhap: test@test.com
// pass: test

// useNavigate() chuyen huong toi router khac
