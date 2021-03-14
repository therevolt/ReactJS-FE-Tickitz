import React, { Component } from "react";
import { Link } from "react-router-dom";
export class CardCinemas extends Component {
  render() {
    return (
      <div class="border-rounded padding-y-1 margin-x-05 cinema sm-margin-bottom-1">
        <div class="display-flex is-vertically-centered flex-direction-row sm-flex-direction-col">
          <div class="display-flex flex-direction-col is-vertically-centered flex-content-center sm-margin-bottom-1">
            <img alt="ebv" src={this.props.image} width="106px" height="40px" />
          </div>
          <div class="display-flex flex-direction-col sm-text-center">
            <h5 class="font-size-3 text-title margin-bottom-05 sm-display-none">
              {this.props.cinema}
            </h5>
            <span>{this.props.location}</span>
          </div>
        </div>
        <hr class="hr margin-y-2 margin-x-1" />
        <div class="grid grid-template-columns-4 margin-x-1">
          <div class="text-title margin-05">08:30am</div>
          <div class="text-title margin-05">10:30am</div>
          <div class="text-placeholder margin-05">12:00pm</div>
          <div class="text-title margin-05">02:00pm</div>
          <div class="text-placeholder margin-05">04:30pm</div>
          <div class="text-title margin-05">07:00pm</div>
          <div class="text-title margin-05">08:30pm</div>
        </div>
        <div class="display-flex flex-direction-row is-vertically-centered margin-y-1 margin-x-1">
          <div class="display-flex flex-content-start font-size-5">Price</div>
          <div class="display-flex flex-content-end font-size-5 text-title text-bold">
            $10.00/seat
          </div>
        </div>
        <div class="display-flex flex-direction-row is-vertically-centered margin-y-2 margin-x-1">
          <div class="display-flex">
            <Link to={`/order/${this.props.id}`}>
              <button class="background-primary text-white padding-1 border-rounded2 text-bold font-size-6 no-border hover-cursor-pointer no-outline">
                Book Now
              </button>
            </Link>
          </div>
          <div class="display-flex text-bold display-flex flex-content-end">
            <Link to="/order">
              <button class="text-primary background-white padding-1 border-rounded2 text-bold font-size-6 no-border hover-cursor-pointer no-outline">
                Add To Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CardCinemas;
