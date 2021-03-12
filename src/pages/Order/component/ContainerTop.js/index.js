import React, { Component } from "react";

export class ContainerTop extends Component {
  render() {
    return (
      <div class="background-grey box-shadow sm-display-none">
        <div class="display-flex margin-x-5 sm-flex-direction-col">
          <div class="main-panel display-flex flex-direction-col margin-top-3">
            <div>
              <p class="font-size-4 text-title text-bold sm-display-none">Movie Selected</p>
            </div>
            <div class="background-white border-rounded2 w-95 sm-display-none">
              <div class="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row">
                <div>
                  <p class="font-size-4 text-title text-bold">Spider-Man: Homecoming</p>
                </div>
                <div>
                  <input
                    class="btn-submit-grey text-bold font-size-6 hover-cursor-pointer"
                    type="submit"
                    value="Change movie"
                  />
                </div>
              </div>
            </div>
            <div class="font-size-4 text-title text-bold margin-y-2">Choose Your Seat</div>
            <div>
              <img class="seat-img border-rounded2" src="./assets/images/seat.PNG" alt="" />
            </div>
            <div class="display-flex flex-content-between margin-y-2 w-95">
              <input
                class="btn-submit-transparent border-rounded2 text-bold hover-cursor-pointer"
                type="submit"
                value="Change your movie"
              />
              <input
                class="btn-submit-solid border-rounded2 text-bold hover-cursor-pointer"
                type="submit"
                value="Checkout now"
              />
            </div>
          </div>
          <div class="side-panel display-flex flex-direction-col margin-top-3 sm-display-none">
            <div>
              <p class="font-size-4 text-title text-bold w-40">Order Info</p>
            </div>
            <div class="detail-order display-flex flex-direction-col background-white border-rounded2">
              <img class="img-order" src="./assets/images/CineOne21.png" alt="" />
              <p class="cinema-text">CineOne21 Cinema</p>
              <div class="table-detail display-flex flex-direction-col margin-top-3">
                <div class="display-flex flex-direction-row flex-content-between margin-x-2">
                  <p>Movie selected</p>
                  <p class="text-bold">Spider-Man: Homecoming</p>
                </div>
                <div class="display-flex flex-direction-row flex-content-between margin-x-2">
                  <p>Tuesday, 07 July 2020</p>
                  <p class="text-bold">02:00pm</p>
                </div>
                <div class="display-flex flex-direction-row flex-content-between margin-x-2">
                  <p>One ticket price</p>
                  <p class="text-bold">$10</p>
                </div>
                <div class="display-flex flex-direction-row flex-content-between margin-x-2">
                  <p>Seat choosed</p>
                  <p class="text-bold">C4, C5, C6</p>
                </div>
              </div>
              <hr size="4" />
              <div class="display-flex flex-direction-row flex-content-between margin-x-2">
                <p class="text-bold font-size-5">Total Payment</p>
                <p class="text-bold font-size-5 text-primary">$30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerTop;
