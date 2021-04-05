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
import { getMovies, getMoviesHome } from "../../configs/redux/action/movies";
import HelmetTitle from "../../components/base/Helmet";

class Home extends Component {
  componentDidMount() {
    this.props.getMovies();
    this.props.getMoviesHome();
  }

  render() {
    return (
      <div className="showInAnimation">
        <Header />
        <HelmetTitle title="Home - Tickitz Web" />
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
            {this.props.movies_home && <Upcoming />}
            <FormMail />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movie.movie,
    movies_home: state.movie.movie_home,
    load: state.movie.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getMoviesHome: () => {
    dispatch(getMoviesHome());
  },
  getMovies: () => {
    dispatch(getMovies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
