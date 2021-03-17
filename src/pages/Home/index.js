import React, { Component } from "react";
import Header from "../../components/module/Header";
import ContainerTop from "./components/ContainerTop";
import NowShowing from "./components/NowShowing";
import Upcoming from "./components/Upcoming";
import FormMail from "./components/FormMail";
import Footer from "../../components/module/Footer";
import "../../assets/css/Main.css";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="absolute-container">
          <ContainerTop />
          <NowShowing />
          <div className="margin-y-3 sm-container">
            <Upcoming />
            <FormMail />
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
