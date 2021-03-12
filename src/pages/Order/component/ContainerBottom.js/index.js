import React, { Component } from "react";

export class ContainerBottom extends Component {
  render() {
    return (
      <div class="lg-display-none background-grey is-vertically-centered">
        <div class="display-flex margin-x-1 flex-direction-col">
          <div>
            <p class="text-title text-bold">Choose Your Seat</p>
          </div>
          <div>
            <img
              class="img-seat-mobile border-rounded2"
              src="./assets/images/seat_mobile.PNG"
              alt=""
            />
          </div>
        </div>
        <div class="display-flex flex-direction-col margin-x-1 background-white margin-top-1 is-vertically-centered border-rounded2">
          <div class="display-flex flex-content-between margin-x-2 border-gray border-rounded2 margin-top-2">
            <select class="seat-item background-grey margin-x-1 margin-y-1" name="" id="">
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
            <select class="seat-item background-grey margin-x-1 margin-y-1" name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div class="display-flex flex-content-between margin-x-2 margin-y-1 border-gray border-rounded2">
            <select class="seat-item background-grey margin-x-1 margin-y-1" name="" id="">
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
            <select class="seat-item background-grey margin-x-1 margin-y-1" name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div class="display-flex flex-content-between margin-x-2 border-gray border-rounded2">
            <select class="seat-item background-grey margin-x-1 margin-y-1" name="" id="">
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
            <select class="seat-item background-grey margin-x-1 margin-y-1" name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div>
            <input
              class="btn-submit-transparent border-rounded2 w-100 text-bold"
              type="submit"
              value="Add new seat"
            />
          </div>
        </div>
        <div class="btn-checkout display-flex is-vertically-centered margin-y-2">
          <div>
            <input
              class="btn-submit-solid border-rounded2 font-size-6"
              type="submit"
              value="Checkout now"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerBottom;
