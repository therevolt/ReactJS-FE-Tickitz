import React, { Component } from "react";
import Header from "../../components/module/Header";
import HeaderMobile from "../../components/module/HeaderMobile";
import Footer from "../../components/module/Footer";
import "../../assets/css/Main.css";
import "./Custom.css";
import ContainerTop from "./component/ContainerTop";
import ContainerSelect from "./component/ContainerSelect";
import ContainerContent from "./component/ContainerContent";
import ViewMore from "./component/ViewMore";

class Payment extends Component {
  render() {
    return (
      <>
        <Header />
        <HeaderMobile />
        <div class="absolute-container">
          <ContainerTop />
          <ContainerSelect />
          <ContainerContent />
          <ViewMore />
          <div class="margin-y-3 sm-container">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default Payment;
