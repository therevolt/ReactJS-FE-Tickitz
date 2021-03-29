import React, { useEffect, useState } from "react";
import Hr from "../../../../components/base/Hr";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import Swal from "sweetalert2";

const Content = (props) => {
  const [data, setData] = useState(null);
  const history = useHistory();
  // eslint-disable-next-line
  useEffect(async () => {
    if (!data) {
      setData(props.redux.order);
    } else {
      Swal.fire("YUHU!", "Select Movie First!", "warning");
      history.push("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="background-grey box-shadow">
      {data && (
        <div className="display-flex margin-x-5 sm-flex-direction-col sm-margin-x-0 padding-bottom-3">
          <div className="main-panel display-flex flex-direction-col margin-top-3 sm-margin-top-0">
            <div>
              <p className="font-size-4 text-title text-bold sm-display-none margin-x-05">
                Payment Info
              </p>
            </div>
            <div className="background-white border-rounded2 w-95 margin-x-1 sm-margin-x-0 sm-w-100 sm-border-none sm-shadow-bottom">
              <div className="margin-y-2 sm-margin-y-05">
                <div className="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <div>
                    <p className="text-placeholder">Date & time</p>
                  </div>
                  <div>
                    <p className="text-bold">{data.playing_time}</p>
                  </div>
                </div>

                <div className="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <Hr />
                </div>

                <div className="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <div>
                    <p className="text-placeholder">Movie title</p>
                  </div>
                  <div>
                    <p className="text-bold">{data.movie}</p>
                  </div>
                </div>

                <div className="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <Hr />
                </div>

                <div className="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <div>
                    <p className="text-placeholder">Cinema name</p>
                  </div>
                  <div>{data && <p className="text-bold">{data.cinema}</p>}</div>
                </div>

                <div className="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <Hr />
                </div>

                <div className="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <div>
                    <p className="text-placeholder">Number of tickets</p>
                  </div>
                  <div>
                    <p className="text-bold">{data.seat_choosed.length} pieces</p>
                  </div>
                </div>

                <div className="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row sm-display-none">
                  <Hr />
                </div>

                <div className="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row">
                  <div>
                    <p className="text-placeholder">Total payment</p>
                  </div>
                  <div>
                    <p className="text-bold font-size-5">${data.seat_choosed.length * 10},00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-size-4 text-title text-bold margin-y-2 margin-x-05">
              Choose a Payment Method
            </div>
            <div className="background-white border-rounded2 w-95 margin-x-1 sm-margin-x-05">
              <div className="margin-y-2 display-flex flex-direction-col flex-content-center is-vertically-centered">
                <div className="grid grid-template-columns-4 sm-grid-template-columns-3">
                  <div
                    style={{ width: "120px", height: "60px" }}
                    className="border-gray border-rounded2 padding-x-1 padding-y-1 sm-padding-x-05 mx-4 mt-3"
                  >
                    <img className="icon-payment" src="/assets/images/google-pay.png" alt="" />
                  </div>
                  <div
                    style={{ width: "120px", height: "60px" }}
                    className="border-gray border-rounded2 padding-x-1 padding-y-1 sm-padding-x-05 mx-4 mt-3"
                  >
                    <img className="icon-payment" src="/assets/images/visa.png" alt="" />
                  </div>
                  <div
                    style={{ width: "120px", height: "60px" }}
                    className="border-gray border-rounded2 ps-1 padding-y-1 sm-padding-x-05 mx-4 mt-3"
                  >
                    <img className="icon-payment" src="/assets/images/gopay.png" alt="" />
                  </div>
                  <div
                    style={{ width: "120px", height: "60px" }}
                    className="border-gray border-rounded2 px-5 pt-2 sm-padding-x-05 mx-4 mt-3"
                  >
                    <img className="icon-payment" src="/assets/images/paypal.png" alt="" />
                  </div>
                  <div
                    style={{ width: "120px", height: "60px" }}
                    className="border-gray border-rounded2 ps-1 padding-y-1 sm-padding-x-05 mx-4 mt-3"
                  >
                    <img className="icon-payment" src="/assets/images/dana.png" alt="" />
                  </div>
                  <div
                    style={{ width: "120px", height: "60px" }}
                    className="border-gray border-rounded2 padding-x-1 padding-y-1 sm-padding-x-05 mx-4 mt-3"
                  >
                    <img className="icon-payment" src="/assets/images/bca.png" alt="" />
                  </div>
                  <div
                    style={{ width: "120px", height: "60px" }}
                    className="border-gray border-rounded2 ps-4-5 pt-2 sm-padding-x-05 mx-4 mt-3"
                  >
                    <img className="icon-payment" src="/assets/images/bri.png" alt="" />
                  </div>
                  <div
                    style={{ width: "120px", height: "60px" }}
                    className="border-gray border-rounded2 padding-x-1 padding-y-1 sm-padding-x-05 mx-4 mt-3"
                  >
                    <img className="icon-payment" src="/assets/images/ovo.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="line margin-x-2">
                <div className="text-divider">Or</div>
              </div>
              <div>
                <p className="text-placeholder text-align padding-y-3">
                  Pay via cash. <span className="text-primary text-bold">See how it work</span>
                </p>
              </div>
            </div>
            <div className="display-flex flex-content-between margin-right-2 margin-y-2 margin-x-1 sm-display-none">
              <input
                className="btn-submit-transparent border-rounded2 text-bold"
                type="submit"
                value="Change your movie"
              />
              <input
                className="btn-submit-solid border-rounded2 text-bold margin-left-2"
                type="submit"
                value="Checkout now"
              />
            </div>
          </div>
          <div className="side-panel display-flex flex-direction-col margin-top-3 sm-margin-top-0 w-95 margin-x-1 sm-margin-x-05">
            <div>
              <p className="font-size-4 text-title text-bold w-40">Personal Info</p>
            </div>
            <div className="detail-order display-flex flex-direction-col background-white border-rounded2 w-30em sm-w-100">
              <div className="table-detail display-flex flex-direction-col margin-top-1">
                <div className="display-flex flex-direction-col flex-content-between margin-x-2">
                  <p>Full Name</p>
                  <input
                    className="input-form"
                    type="text"
                    value={`${props.user.first_name} ${props.user.last_name}`}
                  />
                </div>
                <div className="display-flex flex-direction-col flex-content-between margin-x-2">
                  <p>Email</p>
                  <input className="input-form" type="email" value={props.user.email} />
                </div>
                <div className="display-flex flex-direction-col flex-content-between margin-x-2">
                  <p>Phone Number</p>
                  <div className="display-flex border-gray border-rounded2 w-100 tel">
                    <div className="padding-y-1 w-10 padding-x-1">
                      <input
                        className="plus-62 w-100 h-100 no-border no-bg border-right padding-right-05"
                        type="text"
                        value="+62"
                        disabled
                      />
                    </div>
                    <input className="input-form no-border" type="tel" value="81445687121" />
                  </div>
                </div>
              </div>
              <div className="background-warning display-flex flex-direction-row margin-x-2 is-vertically-centered flex-content-start margin-y-2 sm-w-80">
                <div className="margin-x-2 display-flex is-vertically-centered flex-content-start py-3">
                  <img src="/assets/images/clarity_warning-standard-solid.png" alt="" />
                  <span className="margin-x-1">Fill your data correctly.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="margin-y-2 w-95 sm-w-94">
            <input
              type="submit"
              className="btn-submit-solid lg-display-none text-bold border-rounded2 margin-x-1"
              value="Pay your order"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const DispatchProps = (dispatch) => {
  return {
    OrderState: (state) => dispatch({ type: "SET_ORDER", order: state }),
  };
};

const StateProps = (state) => {
  return { redux: state };
};

export default connect(StateProps, DispatchProps)(Content);
