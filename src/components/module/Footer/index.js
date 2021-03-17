import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="pt-2">
        <div className="display-flex flex-direction-row margin-x-3 margin-top-5 margin-bottom-5 sm-margin-x-05 sm-flex-direction-col sm-container">
          <div className="display-flex flex-direction-col margin-x-5 sm-margin-x-05 sm-container-1">
            <img src="/assets/images/Tickitz 2.png" alt="big-logo" width="180px" height="72px" />
            <p className="text-placeholder font-size-6 synopsys">
              Stop waiting in line. Buy tickets <br />
              conveniently, watch movies quietly.
            </p>
          </div>
          <div className="display-flex flex-direction-col">
            <div className="display-flex flex-direction-row sm-flex-direction-row sm-flex-direction-col">
              <div className="display-flex flex-direction-col sm-margin-bottom-1 margin-x-5 sm-margin-x-05 sm-container-1">
                <h6 className="font-size-5 margin-bottom-1">Explore</h6>
                <div className="grid grid-template-columns-1 sm-grid-template-columns-3">
                  <div className="margin-bottom-05">Cinemas</div>
                  <div className="margin-bottom-05">Movies List</div>
                  <div className="margin-bottom-05">My Ticket</div>
                  <div className="margin-bottom-05">Notification</div>
                </div>
              </div>
              <div className="display-flex flex-direction-col sm-margin-bottom-1 margin-x-5 sm-margin-x-05 sm-container-1">
                <h6 className="font-size-5 margin-bottom-1">Our Sponsor</h6>
                <div className="sponsor-icon grid grid-template-columns-1 sm-grid-template-columns-3">
                  <div>
                    <img src="/assets/images/ebv.id.png" height="50px" width="auto" alt="ebv" />
                  </div>
                  <div>
                    <img
                      src="/assets/images/CineOne21.png"
                      height="50px"
                      width="auto"
                      alt="cineone"
                    />
                  </div>
                  <div>
                    <img src="/assets/images/hiflix.png" height="50px" width="auto" alt="hiflix" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="display-flex flex-direction-col margin-x-5 sm-margin-x-05 sm-container-1">
            <h6 className="font-size-5 margin-bottom-1">Follow Us</h6>
            <div className="display-flex flex-direction-col sm-flex-direction-row">
              <div className="display-flex flex-direction-row margin-bottom-05">
                <div className="margin-right-05 sm-margin-right-0">
                  <img src="/assets/images/eva_facebook-outline.png" alt="fb" />
                </div>
                <div className="sm-display-none">Tickitz Cinema id</div>
              </div>
              <div className="display-flex flex-direction-row margin-bottom-05">
                <div className="margin-right-05 sm-margin-right-0">
                  <img src="/assets/images/bx_bxl-instagram.png" alt="ig" />
                </div>
                <div className="sm-display-none">tickitz.id</div>
              </div>
              <div className="display-flex flex-direction-row margin-bottom-05">
                <div className="margin-right-05 sm-margin-right-0">
                  <img src="/assets/images/eva_twitter-outline.png" alt="twitter" />
                </div>
                <div className="sm-display-none">tickitz.id</div>
              </div>
              <div className="display-flex flex-direction-row margin-bottom-05">
                <div className="margin-right-05 sm-margin-right-0">
                  <img src="/assets/images/feather_youtube.png" alt="yt" />
                </div>
                <div className="sm-display-none">Tickitz Cinema id</div>
              </div>
            </div>
          </div>
        </div>

        <footer className="margin-bottom-5 display-flex flex-content-center is-vertically-centered">
          © 2020 Tickitz. All Rights Reserved.
        </footer>
      </div>
    );
  }
}

export default Footer;
