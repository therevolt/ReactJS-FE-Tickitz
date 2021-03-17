import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ContainerBottom extends Component {
  render() {
    return (
      <div className="lg-display-none background-grey is-vertically-centered">
        <div className="display-flex margin-x-1 flex-direction-col">
          <div>
            <p className="text-title text-bold">Choose Your Seat</p>
          </div>
          <div>
            <img
              className="img-seat-mobile border-rounded2"
              src="/assets/images/seat_mobile.PNG"
              alt=""
            />
          </div>
        </div>
        <div className="display-flex flex-direction-col margin-x-1 background-white margin-top-1 is-vertically-centered border-rounded2">
          <div className="display-flex flex-content-between margin-x-2 border-gray border-rounded2 margin-top-2">
            <select className="seat-item background-grey margin-x-1 margin-y-1" name="" id="">
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
            <select className="seat-item background-grey margin-x-1 margin-y-1" name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="display-flex flex-content-between margin-x-2 margin-y-1 border-gray border-rounded2">
            <select className="seat-item background-grey margin-x-1 margin-y-1" name="" id="">
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
            <select className="seat-item background-grey margin-x-1 margin-y-1" name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="display-flex flex-content-between margin-x-2 border-gray border-rounded2">
            <select className="seat-item background-grey margin-x-1 margin-y-1" name="" id="">
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
            <select className="seat-item background-grey margin-x-1 margin-y-1" name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div>
            <input
              className="btn-submit-transparent border-rounded2 text-bold btn-order"
              type="submit"
              value="Add new seat"
            />
          </div>
        </div>
        <div className="btn-checkout display-flex is-vertically-centered margin-y-2">
          <div>
            <Link to={`/payment/${this.props.id}`}>
              <input
                className="btn-submit-solid border-rounded2 font-size-6 btn-order"
                type="submit"
                value="Checkout now"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerBottom;
