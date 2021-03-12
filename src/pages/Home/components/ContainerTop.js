import React, { Component } from "react";
export class ContainerTop extends Component {
  render() {
    return (
      <>
        <div className="display-flex flex-direction-col margin-x-5 margin-y-3 sm-container sm-margin-y-3">
          <div className="display-flex is-vertically-centered sm-flex-direction-col">
            <div className="container-head w-50 flex-content-center sm-container-1">
              <h1 className="text-head">
                Nearest Cinema, Newest Movie,
                <br />
                <span className="findNowText">Find out now!</span>
              </h1>
            </div>
            <div>
              <div className="margin-left-5 sm-container-1">
                <img
                  className="margin-top-6 margin-bottom-1 box-shadow border-rounded2"
                  src="./assets/images/Rectangle 35.png"
                  alt=""
                />
                <img
                  className="margin-top-3 margin-bottom-3 margin-x-1 box-shadow border-rounded2"
                  src="./assets/images/Rectangle 34.png"
                  alt=""
                />
                <img
                  className="margin-top-1 margin-bottom-6 box-shadow border-rounded2"
                  src="./assets/images/Rectangle 33.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContainerTop;
