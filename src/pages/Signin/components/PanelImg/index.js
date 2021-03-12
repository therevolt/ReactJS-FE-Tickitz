import React, { Component } from "react";

export class PanelImg extends Component {
  render() {
    return (
      <>
        <img className="tickitz" src="./assets/images/Tickitz 1.png" alt="" />
        <div className="panel-banner">
          <div className="img-banner">
            <div className="logo">
              <img src="./assets/images/tickitz.png" alt="" />
              <span>wait, watch, wow!</span>
            </div>
            <img className="bg" src="./assets/images/bg.png" alt="" srcset="" />
          </div>
        </div>
      </>
    );
  }
}

export default PanelImg;
