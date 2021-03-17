import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ContainerTop extends Component {
  render() {
    return (
      <div className="background-grey box-shadow sm-display-none">
        <div className="display-flex margin-x-5 sm-flex-direction-col">
          <div className="main-panel display-flex flex-direction-col margin-top-3">
            <div>
              <p className="font-size-4 text-title text-bold sm-display-none">Movie Selected</p>
            </div>
            <div className="background-white border-rounded2 w-95 sm-display-none">
              <div
                className="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row"
                style={{ padding: "30px 0px" }}
              >
                <div>
                  <p className="font-size-4 text-title text-bold">{this.props.title}</p>
                </div>
                <div>
                  <Link to="/">
                    <input
                      className="btn-submit-grey text-bold font-size-6 hover-cursor-pointer"
                      type="submit"
                      value="Change movie"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="font-size-4 text-title text-bold margin-y-2">Choose Your Seat</div>
            <div>
              <img className="seat-img border-rounded2" src="/assets/images/seat.PNG" alt="" />
            </div>
            <div className="display-flex flex-content-between margin-y-2 w-95">
              <Link to="/movies">
                <input
                  className="btn-submit-transparent border-rounded2 text-bold hover-cursor-pointer"
                  type="submit"
                  value="Change your movie"
                />
              </Link>
              <Link to={`/payment/${this.props.id}`}>
                <input
                  className="btn-submit-solid border-rounded2 text-bold hover-cursor-pointer"
                  type="submit"
                  value="Checkout now"
                />
              </Link>
            </div>
          </div>
          <div className="side-panel display-flex flex-direction-col margin-top-3 sm-display-none">
            <div>
              <p className="font-size-4 text-title text-bold w-40">Order Info</p>
            </div>
            <div className="detail-order display-flex flex-direction-col background-white border-rounded2">
              <img className="img-order" src="/assets/images/CineOne21.png" alt="" />
              <p className="cinema-text">CineOne21 Cinema</p>
              <div className="table-detail display-flex flex-direction-col margin-top-3">
                <div className="display-flex flex-direction-row flex-content-between margin-x-2">
                  <p>Movie selected</p>
                  <p className="text-bold">{this.props.title}</p>
                </div>
                <div className="display-flex flex-direction-row flex-content-between margin-x-2">
                  <p>Tuesday, 07 July 2020</p>
                  <p className="text-bold">02:00pm</p>
                </div>
                <div className="display-flex flex-direction-row flex-content-between margin-x-2">
                  <p>One ticket price</p>
                  <p className="text-bold">$10</p>
                </div>
                <div className="display-flex flex-direction-row flex-content-between margin-x-2">
                  <p>Seat choosed</p>
                  <p className="text-bold">C4, C5, C6</p>
                </div>
              </div>
              <hr size="4" />
              <div className="display-flex flex-direction-row flex-content-between margin-x-2">
                <p className="text-bold font-size-5">Total Payment</p>
                <p className="text-bold font-size-5 text-primary">$30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerTop;
