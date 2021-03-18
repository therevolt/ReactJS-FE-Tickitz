import React, { useEffect, useState } from "react";
import HeaderNew from "../../components/module/Header";
import Footer from "../../components/module/Footer";
import Hr from "../../components/base/Hr";
import ProgressBar from "@ramonak/react-progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { connect } from "react-redux";
require("dotenv").config();

const Profile = (props) => {
  let history = useHistory();
  const user = props.user ? props.user.id : JSON.parse(localStorage.getItem("user")).id;
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, ...{ [id]: value } });
  };

  useEffect(() => {
    if (user) {
      axios
        .get(`${process.env.REACT_APP_URL_API}/v1/users/${user}`)
        .then((result) => {
          if (result.data.status) {
            setData({
              first_name: result.data.data[0].first_name,
              last_name: result.data.data[0].last_name,
              email: result.data.data[0].email,
            });
          } else {
            alert("data null");
          }
        })
        .catch((err) => {
          console.log(err);
          history.push("/");
        });
    } else {
      history.push("/signup");
    }
    // eslint-disable-next-line
  }, []);

  const handleShowPass = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handleShowPass2 = (e) => {
    e.preventDefault();
    setShow2(!show2);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        history.push("/");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      Swal.fire("ERROR!", "Passwords Do Not Match", "warning");
    } else {
      axios
        .put(`${process.env.REACT_APP_URL_API}/v1/users/${user}`, {
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          password: data.password,
        })
        .then((result) => {
          if (result.data.status) {
            Swal.fire("Success", "Updated Data Successfuly", "success");
            setData({ ...data, password: "", confirmPassword: "" });
          } else {
            Swal.fire("ERROR!", result.data.message, "error");
          }
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  return (
    <>
      <HeaderNew />
      <div className="absolute-container bg-grey">
        {data && (
          <div className="container mb-3">
            <div className="row pt-5 d-flex">
              <div className="col-lg-3 d-flex flex-column bg-white me-5 border-rounded2">
                <div className="d-flex px-4 justify-content-between pt-4">
                  <span className="fs-4">Info</span>
                  <span className="fs-4 fw-bold" style={{ color: "#5F2EEA" }}>
                    ...
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src="/assets/images/profile.png" className="py-4" alt="" />
                  <p className="fw-bold" style={{ marginBottom: "0px" }}>
                    {data ? `${data.first_name} ${data.last_name}` : "Users2021"}
                  </p>
                  <p>JavaScript Enthusiast</p>
                </div>
                <Hr />
                <p className="text-secondary" style={{ marginTop: "20px", marginLeft: "15px" }}>
                  Loyalty Points
                </p>
                <div className="d-flex flex-column align-items-center pb-5">
                  <img
                    src="/assets/images/card_r.png"
                    alt=""
                    style={{ width: "270px", paddingTop: "10px" }}
                  />
                  <p>213 Point To Master</p>
                  <ProgressBar completed={60} width="200px" bgcolor="#5F2EEA" />
                  <button
                    className="btn btn-danger"
                    style={{ width: "120px", marginTop: "30px" }}
                    onClick={handleLogout}
                  >
                    LOG OUT
                  </button>
                </div>
              </div>

              <div className="col-8 bg-white border-rounded2">
                <div className="py-4">
                  <ul className="nav nav-pills mb-3 px-4" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Account Settings
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Order History
                      </button>
                    </li>
                  </ul>
                  <Hr />
                  <div className="tab-content pt-3 px-4 d-flex" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div>
                        <h5 className="pb-3 pt-5">Details Information</h5>
                        <Hr />
                        <div className="row pt-5">
                          <div className="col-6 d-flex flex-column">
                            <label htmlFor="first_name">First Name</label>
                            <input
                              className="input-form"
                              id="first_name"
                              type="text"
                              value={data.first_name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-6 d-flex flex-column">
                            <label htmlFor="last_name">Last Name</label>
                            <input
                              className="input-form"
                              id="last_name"
                              type="text"
                              value={data.last_name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-6 d-flex flex-column pt-4">
                            <label htmlFor="first_name">E-mail</label>
                            <input
                              className="input-form"
                              id="email"
                              type="text"
                              value={data.email}
                              onChange={handleChange}
                            ></input>
                          </div>
                          <div className="col-6 d-flex flex-column pt-4">
                            <label htmlFor="last_name">Phone Number</label>
                            <div className="display-flex border-gray border-rounded2 w-100 tel">
                              <div className="padding-y-1 w-10 padding-x-1">
                                <input
                                  className="plus-62 w-100 h-100 no-border no-bg border-right padding-right-05"
                                  type="text"
                                  value="+62"
                                  disabled
                                />
                              </div>
                              <input
                                className="input-form no-border tels"
                                type="tel"
                                value="81445687121"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5">
                        <h5 className="pb-3 pt-5">Details Information</h5>
                        <Hr />
                        <div className="row pt-5">
                          <div className="col-6 d-flex flex-column">
                            <label htmlFor="first_name">New Password</label>
                            <div className="input-group" id="show_hide_password">
                              <input
                                id="password"
                                type={show ? "text" : "password"}
                                name="password"
                                placeholder="Write your password"
                                className="form-control input-form"
                                onChange={handleChange}
                                value={data.password}
                              />
                              <div className="input-group-append">
                                <span onClick={handleShowPass}>
                                  <FontAwesomeIcon icon={show ? faEye : faEyeSlash} />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 d-flex flex-column">
                            <label htmlFor="last_name">Confirm Password</label>
                            <div className="input-group" id="show_hide_password">
                              <input
                                id="confirmPassword"
                                type={show2 ? "text" : "password"}
                                name="password"
                                placeholder="Write your password"
                                className="form-control input-form"
                                onChange={handleChange}
                                value={data.confirmPassword}
                              />
                              <div className="input-group-append">
                                <span onClick={handleShowPass2}>
                                  <FontAwesomeIcon icon={show2 ? faEye : faEyeSlash} />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn-submit-solid border-rounded2 mt-5"
                          onClick={handleSubmit}
                        >
                          Update changes
                        </button>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="card history border-rounded2">
                        <div className="d-flex py-4 px-4 justify-content-between">
                          <div className="d-flex flex-column">
                            <p className="text-placeholder mb-0">Tuesday, 07 July 2020 - 04:30pm</p>
                            <p className="text-bold fs-3">Spiderman</p>
                          </div>
                          <img src="/assets/images/CineOne21.png" alt="" />
                        </div>
                        <Hr />
                        <div className="card-body">
                          <div className="d-flex justify-content-between px-2">
                            <span
                              className="btn btn-success"
                              style={{ backgroundColor: "#00BA88", border: "none" }}
                            >
                              Ticket in active
                            </span>
                            <div className="d-flex flex-nowrap align-self-center">
                              <span className="text-placeholder flex-nowrap show-details">
                                Show Details
                              </span>
                              <img src="/assets/images/ic_round-navigate-next.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card history border-rounded2">
                        <div className="d-flex py-4 px-4 justify-content-between">
                          <div className="d-flex flex-column">
                            <p className="text-placeholder mb-0">Tuesday, 07 July 2020 - 04:30pm</p>
                            <p className="text-bold fs-3">Spiderman</p>
                          </div>
                          <img src="/assets/images/ebv.id.png" alt="" />
                        </div>
                        <Hr />
                        <div className="card-body">
                          <div className="d-flex justify-content-between px-2">
                            <span className="btn btn-secondary">Ticket used</span>
                            <div className="d-flex flex-nowrap align-self-center">
                              <span className="text-placeholder flex-nowrap show-details">
                                Show Details
                              </span>
                              <img src="/assets/images/ic_round-navigate-next.png" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="margin-y-3 sm-container bg-white">
          <Footer />
        </div>
      </div>
    </>
  );
};

const StateProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(StateProps)(Profile);
