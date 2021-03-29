import React, { Component } from "react";
import Header from "../../components/module/Header";
import ContainerTop from "./components/ContainerTop";
import NowShowing from "./components/NowShowing";
import Upcoming from "./components/Upcoming";
import FormMail from "./components/FormMail";
import Footer from "../../components/module/Footer";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "../../assets/css/Main.css";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="absolute-container">
          {this.props.load ? (
            <Skeleton height={500} />
          ) : (
            <>
              <ContainerTop />
              <NowShowing />
            </>
          )}
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

const mapStateToProps = (state) => {
  return {
    load: state.movie.loading,
  };
};

export default connect(mapStateToProps)(Home);
