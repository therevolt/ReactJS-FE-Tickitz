import React, { Component } from "react";
import Hr from "../../../../components/base/Hr";

export class Content extends Component {
  render() {
    console.log(this.props);
    return (
      <div class="background-grey box-shadow">
        <div class="display-flex margin-x-5 sm-flex-direction-col sm-margin-x-0 padding-bottom-3">
          <div class="main-panel display-flex flex-direction-col margin-top-3 sm-margin-top-0">
            <div>
              <p class="font-size-4 text-title text-bold sm-display-none margin-x-05">
                Payment Info
              </p>
            </div>
            <div class="background-white border-rounded2 w-95 margin-x-1 sm-margin-x-0 sm-w-100 sm-border-none sm-shadow-bottom">
              <div class="margin-y-2 sm-margin-y-05">
                <div class="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <div>
                    <p class="text-placeholder">Date & time</p>
                  </div>
                  <div>
                    <p class="text-bold">Tuesday, 07 July 2020 at 02:00pm</p>
                  </div>
                </div>

                <div class="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <Hr />
                </div>

                <div class="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <div>
                    <p class="text-placeholder">Movie title</p>
                  </div>
                  <div>
                    <p class="text-bold">{this.props.data.name}</p>
                  </div>
                </div>

                <div class="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <Hr />
                </div>

                <div class="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <div>
                    <p class="text-placeholder">Cinema name</p>
                  </div>
                  <div>
                    <p class="text-bold">CineOne21 Cinema</p>
                  </div>
                </div>

                <div class="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <Hr />
                </div>

                <div class="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <div>
                    <p class="text-placeholder">Number of tickets</p>
                  </div>
                  <div>
                    <p class="text-bold">3 pieces</p>
                  </div>
                </div>

                <div class="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <Hr />
                </div>

                <div class="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row">
                  <div>
                    <p class="text-placeholder">Total payment</p>
                  </div>
                  <div>
                    <p class="text-bold font-size-5">$30,00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="font-size-4 text-title text-bold margin-y-2 margin-x-05">
              Choose a Payment Method
            </div>
            <div class="background-white border-rounded2 w-95 margin-x-1 sm-margin-x-05">
              <div class="margin-y-2 display-flex flex-direction-col flex-content-center is-vertically-centered">
                <div class="grid grid-template-columns-4 sm-grid-template-columns-3">
                  <img
                    class="icon-payment border-gray border-rounded2 padding-x-2 padding-y-1 margin-y-1 sm-padding-x-05"
                    src="/assets/images/google-pay.png"
                    alt=""
                  />
                  <img
                    class="icon-payment border-gray border-rounded2 padding-x-2 padding-y-1 margin-y-1 sm-padding-x-05"
                    src="/assets/images/visa.png"
                    alt=""
                  />
                  <img
                    class="icon-payment border-gray border-rounded2 padding-x-2 padding-y-1 margin-y-1 sm-padding-x-05"
                    src="/assets/images/gopay.png"
                    alt=""
                  />
                  <img
                    class="icon-payment border-gray border-rounded2 padding-x-2 padding-y-1 margin-y-1 sm-padding-x-05"
                    src="/assets/images/paypal.png"
                    alt=""
                  />
                  <img
                    class="icon-payment border-gray border-rounded2 padding-x-2 padding-y-1 margin-y-1 sm-padding-x-05"
                    src="/assets/images/dana.png"
                    alt=""
                  />
                  <img
                    class="icon-payment border-gray border-rounded2 padding-x-2 padding-y-1 margin-y-1 sm-display-none"
                    src="/assets/images/bca.png"
                    alt=""
                  />
                  <img
                    class="icon-payment border-gray border-rounded2 padding-x-2 padding-y-1 margin-y-1 sm-display-none"
                    src="/assets/images/bri.png"
                    alt=""
                  />
                  <img
                    class="icon-payment border-gray border-rounded2 padding-x-2 padding-y-1 margin-y-1 sm-padding-x-05"
                    src="/assets/images/ovo.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="line margin-x-2">
                <div class="text-divider">Or</div>
              </div>
              <div>
                <p class="text-placeholder text-align padding-y-3">
                  Pay via cash. <span class="text-primary text-bold">See how it work</span>
                </p>
              </div>
            </div>
            <div class="display-flex flex-content-between margin-right-2 margin-y-2 margin-x-1 sm-display-none">
              <input
                class="btn-submit-transparent border-rounded2 text-bold"
                type="submit"
                value="Change your movie"
              />
              <input
                class="btn-submit-solid border-rounded2 text-bold margin-left-2"
                type="submit"
                value="Checkout now"
              />
            </div>
          </div>
          <div class="side-panel display-flex flex-direction-col margin-top-3 sm-margin-top-0 w-95 margin-x-1 sm-margin-x-05">
            <div>
              <p class="font-size-4 text-title text-bold w-40">Personal Info</p>
            </div>
            <div class="detail-order display-flex flex-direction-col background-white border-rounded2 w-30em sm-w-100">
              <div class="table-detail display-flex flex-direction-col margin-top-1">
                <div class="display-flex flex-direction-col flex-content-between margin-x-2">
                  <p>Full Name</p>
                  <input
                    class="input-form"
                    type="text"
                    value={`${this.props.user.first_name} ${this.props.user.last_name}`}
                  />
                </div>
                <div class="display-flex flex-direction-col flex-content-between margin-x-2">
                  <p>Email</p>
                  <input class="input-form" type="email" value={this.props.user.email} />
                </div>
                <div class="display-flex flex-direction-col flex-content-between margin-x-2">
                  <p>Phone Number</p>
                  <div class="display-flex border-gray border-rounded2 w-100 tel">
                    <div class="padding-y-1 w-10 padding-x-1">
                      <input
                        class="plus-62 w-100 h-100 no-border no-bg border-right padding-right-05"
                        type="text"
                        value="+62"
                        disabled
                      />
                    </div>
                    <input class="input-form no-border" type="tel" value="81445687121" />
                  </div>
                </div>
              </div>
              <div class="background-warning display-flex flex-direction-row margin-x-2 is-vertically-centered flex-content-start margin-y-2 sm-w-80">
                <div class="margin-x-2 display-flex is-vertically-centered flex-content-start">
                  <img src="/assets/images/clarity_warning-standard-solid.png" alt="" />
                  <p class="margin-x-1">Fill your data correctly.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="margin-y-2 w-95 sm-w-94">
            <input
              type="submit"
              class="btn-submit-solid lg-display-none text-bold border-rounded2 margin-x-1"
              value="Pay your order"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
