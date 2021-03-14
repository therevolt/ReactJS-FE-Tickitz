import React, { useEffect, useState } from "react";
import HeaderNew from "../../components/module/Header";
import Footer from "../../components/module/Footer";
import Hr from "../../components/base/Hr";
import ProgressBar from "@ramonak/react-progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";
require("dotenv").config();

export default function Profile() {
  let { id } = useParams();
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(data);
    setData({ ...data, ...{ [id]: value } });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}:${process.env.REACT_APP_PORT_API}/v1/users/${id}`)
      .then((result) => {
        if (result.data.status) {
          setData(result.data.data[0]);
        } else {
          alert("data null");
        }
      });
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
        localStorage.removeItem("logged");
        history.push("/");
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_URL_API}:${process.env.REACT_APP_PORT_API}/v1/users/${id}`, {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
      })
      .then((result) => {
        if (result.data.status) {
          Swal.fire("Success", "Updated Data Successfuly", "success");
        } else {
          Swal.fire("ERROR!", result.data.message, "error");
        }
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <HeaderNew />
      <div class="absolute-container bg-grey">
        {data && (
          <div className="container mb-3">
            <div class="row pt-5 d-flex">
              <div class="col-lg-3 d-flex flex-column bg-white me-5 border-rounded2">
                <div className="d-flex px-4 justify-content-between pt-4">
                  <span className="fs-4">Info</span>
                  <span className="fs-4 fw-bold" style={{ color: "#5F2EEA" }}>
                    ...
                  </span>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src="/assets/images/profile.png" className="py-4" />
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

              <div class="col-8 bg-white border-rounded2">
                <div className="py-4">
                  <ul class="nav nav-pills mb-3 px-4" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
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
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
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
                  <div class="tab-content pt-3 px-4 d-flex" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
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
                            <div class="display-flex border-gray border-rounded2 w-100 tel">
                              <div class="padding-y-1 w-10 padding-x-1">
                                <input
                                  class="plus-62 w-100 h-100 no-border no-bg border-right padding-right-05"
                                  type="text"
                                  value="+62"
                                  disabled
                                />
                              </div>
                              <input
                                class="input-form no-border tels"
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
                              />
                              <div className="input-group-append">
                                <a href="#" onClick={handleShowPass}>
                                  <FontAwesomeIcon icon={show ? faEye : faEyeSlash} />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 d-flex flex-column">
                            <label htmlFor="last_name">Confirm Password</label>
                            <div className="input-group" id="show_hide_password">
                              <input
                                id="password"
                                type={show2 ? "text" : "password"}
                                name="password"
                                placeholder="Write your password"
                                className="form-control input-form"
                                onChange={handleChange}
                              />
                              <div className="input-group-append">
                                <a href="#" onClick={handleShowPass2}>
                                  <FontAwesomeIcon icon={show2 ? faEye : faEyeSlash} />
                                </a>
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
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      ...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div class="margin-y-3 sm-container bg-white">
          <Footer />
        </div>
      </div>
    </>
  );
}
