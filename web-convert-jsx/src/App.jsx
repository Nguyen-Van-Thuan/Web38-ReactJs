import React from "react";
import Navigation from "./component/Navigation";
import "./assets/styles.css";
import Header from "./component/Header";
import ListingProduct from "./component/ListingProduct";
import Footer from "./component/Footer";
import Welcome from "./component/Welcome";

const App = () => {

  return (
    <>
      <Navigation />
      <Header />
      <ListingProduct/>
      <Footer/>
      <Welcome username={123}/>
    </>
  );
};

export default App;
