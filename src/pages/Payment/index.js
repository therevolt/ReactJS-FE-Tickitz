import React, { Component } from "react";
import Header from "../../components/module/Header";
import HeaderMobile from "../../components/module/HeaderMobile";
import Footer from "../../components/module/Footer";
import "../../assets/css/Main.css";
import Content from "./components/Content";

class Payment extends Component {
  render() {
    return (
      <>
        <Header />
        <HeaderMobile />
        <div class="absolute-container">
          <Content />
          <div class="margin-y-3 sm-container">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default Payment;
