import React, { Component } from "react";

export class NowShowing extends Component {
  render() {
    return (
      <div className="bg-grey sm-container">
        <div className="display-flex margin-x-5 flex-direction-col sm-container-1">
          <div className="nav-showing display-flex flex-content-between is-vertically-centered">
            <div>
              <p className="color-blue">Now Showing</p>
              <hr size="5" />
            </div>
            <div>
              <span>view all</span>
            </div>
          </div>
          <div className="element-showing display-flex margin-y-3 flex-content-between sm-overflow">
            <div className="card-showing border-rounded2">
              <img className="padding-y-1" src="./assets/images/Rectangle 119.png" alt="" />
            </div>
            <div className="card-showing border-rounded2">
              <img className="padding-y-1" src="./assets/images/lionking.png" alt="" />
            </div>
            <div className="card-showing border-rounded2">
              <img className="padding-y-1" src="./assets/images/jhon-wick.png" alt="" />
            </div>
            <div className="card-showing border-rounded2">
              <img className="padding-y-1" src="./assets/images/Rectangle 119.png" alt="" />
            </div>
            <div className="card-showing border-rounded2">
              <img className="padding-y-1" src="./assets/images/lionking.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NowShowing;
