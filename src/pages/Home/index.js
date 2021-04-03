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
import { getMovies } from "../../configs/redux/action/movies";

class Home extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

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
            {this.props.movies && <Upcoming />}
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
    movies: state.movie.movie,
    load: state.movie.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getMovies: () => {
    dispatch(getMovies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
