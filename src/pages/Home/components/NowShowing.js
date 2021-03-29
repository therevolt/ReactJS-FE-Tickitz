import React, { Component } from "react";

export class NowShowing extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
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
            <div
              className={`card-showing border-rounded2 d-flex flex-column align-items-center ${
                this.state.show && "h-auto"
              }`}
              onMouseEnter={() => this.setState({ ...this.state, show: true })}
              onMouseLeave={() => this.setState({ ...this.state, show: false })}
            >
              <img className="padding-y-1" src="./assets/images/Rectangle 119.png" alt="" />
              {this.state.show && (
                <>
                  <span>Spiderman</span>
                  <span>Drama, Drama, Drama</span>
                  <button className="btn-submit-transparent w-auto border-rounded2 px-4 h-auto py-1">
                    Details
                  </button>
                  <button className="btn-primary no-border border-rounded2 px-4 py-2 my-2">
                    Book Now
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NowShowing;
