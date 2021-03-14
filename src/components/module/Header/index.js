import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hr from "../../base/Hr";
import { connect } from "react-redux";

export class HeaderNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      search: false,
    };
  }
  handleSearch = () => {
    this.setState({ ...this.state, search: !this.state.search });
  };
  handleShow = () => {
    this.setState({ ...this.state, show: !this.state.show });
  };
  Logged = () => {
    return localStorage.getItem("logged") || this.props.logged;
  };
  render() {
    let log = this.Logged();
    return (
      <nav
        className={
          this.state.show
            ? "navbar navbar-expand-lg navbar-light bg-light mobile-menu"
            : "navbar navbar-expand-lg navbar-light bg-light"
        }
      >
        <div className="container">
          <Link to="/">
            <a className="navbar-brand" href="#">
              <img src="/assets/images/Tickitz 2.png" alt="main-logo" />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" onClick={this.handleShow}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item lg-display-none sm-margin-y-05">
                <div className="warped-menu display-flex is-vertically-centered border-gray border-rounded2 margin-y-1 w-50">
                  <img
                    className="margin-left-1"
                    src="/assets/images/bx_bx-search.png"
                    height="20px"
                    width="20px"
                    alt="search"
                  />
                  <input className="input-form no-border" type="text" placeholder="Search . . ." />
                </div>
              </li>
              <li className="nav-item lg-display-none">
                <Hr />
              </li>
              <li className="nav-item">
                <Link
                  to="/movies"
                  className="nav-link sm-text-center sm-margin-y-05 text-bold text-title"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item lg-display-none sm-margin-y-05">
                <Hr />
              </li>
              <li className="nav-item">
                <a className="nav-link sm-text-center sm-margin-y-05 text-bold text-title" href="#">
                  Cinemas
                </a>
              </li>
              <li className="nav-item lg-display-none sm-margin-y-05">
                <Hr />
              </li>
              <li className="nav-item">
                <a className="nav-link sm-text-center sm-margin-y-05 text-bold text-title" href="#">
                  Buy Ticket
                </a>
              </li>
              <li className="nav-item lg-display-none sm-margin-y-05">
                <Hr />
              </li>
              <span className="footer-nav sm-text-center text-placeholder lg-display-none">
                © 2020 Tickitz. All Rights Reserved.
              </span>
            </ul>
            <div>
              <select
                className="select font-size-5 hover-cursor-pointer sm-display-none"
                name="location"
                id="loc"
              >
                <option value="#">Location</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bogor">Bogor</option>
                <option value="Bandung">Bandung</option>
                <option value="Yogyakarta">Yogyakarta</option>
              </select>
            </div>
            <div className="margin-right-2 font-size-5 hover-cursor-pointer sm-display-none">
              {this.state.search ? (
                <div className="warped-menu display-flex is-vertically-centered border-gray border-rounded2">
                  <img
                    className="margin-left-1"
                    src="/assets/images/bx_bx-search.png"
                    height="20px"
                    width="20px"
                    alt="search"
                  />
                  <input
                    className="input-form no-border"
                    type="text"
                    placeholder="Search . . ."
                    onBlur={this.handleSearch}
                  />
                </div>
              ) : (
                <img
                  src="/assets/images/bx_bx-search.png"
                  height="20px"
                  width="20px"
                  alt="search"
                  onClick={this.handleSearch}
                />
              )}
            </div>
            {log ? (
              <div class="margin-right-2 font-size-5 hover-cursor-pointer sm-margin-right-0 sm-display-none">
                <Link to="/profile/3">
                  <img
                    src="/assets/images/Ellipse 11.png"
                    height="56px"
                    width="56px"
                    alt="search"
                  />
                </Link>
              </div>
            ) : (
              <div className="margin-right-2 font-size-6 hover-cursor-pointer sm-margin-right-0 sm-display-none">
                <Link to="/signup">
                  <input
                    className="btn-submit-solid sign-up border-rounded2"
                    type="submit"
                    value="Sign Up"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

const StateProps = (state) => {
  return {
    logged: state.logged,
  };
};

export default connect(StateProps)(HeaderNew);
