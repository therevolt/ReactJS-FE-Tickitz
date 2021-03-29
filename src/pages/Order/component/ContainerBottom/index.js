import React, { Component } from "react";
import { Link } from "react-router-dom";
import SeatMobile from "../SeatMobile";

export class ContainerBottom extends Component {
  render() {
    return (
      <div className="lg-display-none background-grey">
        <SeatMobile />
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
