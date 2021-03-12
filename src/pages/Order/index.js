import React, { Component } from "react";
import Header from "../../components/module/Header";
import HeaderMobile from "../../components/module/HeaderMobile";
import Footer from "../../components/module/Footer";
import "../../assets/css/Main.css";
import ContainerTop from "./component/ContainerTop.js";
import ContainerBottom from "./component/ContainerBottom.js";

class Order extends Component {
  render() {
    return (
      <>
        <Header />
        <HeaderMobile />
        <div class="absolute-container">
          <ContainerTop />
          <ContainerBottom />
          <div class="margin-y-3 sm-container">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default Order;
