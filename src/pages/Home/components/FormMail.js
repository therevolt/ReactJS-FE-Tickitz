import React, { Component } from "react";

export class FormMail extends Component {
  render() {
    return (
      <div className="margin-y-3 margin-x-5 sm-container-1">
        <div className="box-join display-flex flex-direction-col is-vertically-centered">
          <div>
            <h1 className="text-head margin-top-3">
              Be the vanguard of the
              <br /> <span className="findNowText joinArea">Moviegoers</span>
            </h1>
          </div>
          <div className="margin-y-3">
            <input className="input-email" type="text" placeholder="Type your email" />
            <input
              className="btn-submit-email margin-x-1 sm-margin-y-1"
              type="submit"
              value="Join now"
            />
          </div>
          <div className="margin-x-3">
            <p className="text-join padding-bottom-3">
              By joining you as a Tickitz member, <br />
              we will always send you the latest updates via email .
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FormMail;
