import React, { useEffect, useRef, useState } from "react";
import HeaderNew from "../../components/module/Header";
import Footer from "../../components/module/Footer";
import Hr from "../../components/base/Hr";
import ProgressBar from "@ramonak/react-progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import FormData from "form-data";
import axiosApiInstance from "../../helper/axiosInstance";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
require("dotenv").config();

const Profile = () => {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [data, setData] = useState(null);
  const [profile, setProfile] = useState(true);
  const [profileTemp, setProfileTemp] = useState(null);
  const [ticket, setTicket] = useState(null);
  const [load, setLoad] = useState(false);
  const inputImg = useRef(null);
  const state = useSelector((state) => state.user.user);
  const form = new FormData();
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    const { id, value } = e.target;
    if (id === "avatar") {
      let file = e.target.files[0];
      setData({ ...data, avatar: URL.createObjectURL(file) });
      setProfileTemp(file);
    } else {
      setData({ ...data, ...{ [id]: value } });
    }
  };

  useEffect(() => {
    setLoad(true);
    if (!data) {
      setData(state);
    }

    if (!ticket) {
      axiosApiInstance.get(`${process.env.REACT_APP_URL_API}/v1/tickets`).then((result) => {
        const sortData = result.data.data.sort((a, b) => {
          return new Date(b.playing_time) - new Date(a.playing_time);
        });
        setTicket(sortData);
        setLoad(false);
      });
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
        dispatch({ type: "LOGIN_USER", payload: "" });
        history.push("/");
        window.scrollTo(0, 0);
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      Swal.fire("ERROR!", "Passwords Do Not Match", "warning");
    } else {
      delete data.token;
      delete data.refreshToken;
      delete data.created_at;
      delete data.updated_at;
      // eslint-disable-next-line
      Object.keys(data).map((keys) => {
        if (keys !== "avatar") {
          form.append(keys, data[keys]);
        } else {
          if (profileTemp) {
            form.append("avatar", profileTemp, profileTemp.name);
          }
        }
      });
      axiosApiInstance
        .put(`${process.env.REACT_APP_URL_API}/v1/users/${data.id}`, form)
        .then((result) => {
          if (result.data.status) {
            Swal.fire("Success", "Updated Data Successfuly", "success");
            dispatch({ type: "LOGIN_USER", payload: result.data.data[0] });
            setData({ ...data, password: "", confirmPassword: "" });
            window.location.reload();
          } else {
            Swal.fire("ERROR!", result.data.message, "error");
          }
        })
        .catch((err) => {
          Swal.fire("ERROR!", err, "error");
        });
    }
  };

  const handleHideInfo = () => {
    setProfile(!profile);
  };

  const onClickAvatar = () => {
    inputImg.current.click();
  };

  return (
    <>
      <HeaderNew />
      <div className="absolute-container bg-grey">
        {data && (
          <div className="container mb-3">
            <div className="row pt-5 d-flex">
              <div
                className="col-lg-3 d-flex flex-column bg-white me-5 border-rounded2"
                style={{ height: profile ? "fit-content" : "5rem" }}
              >
                <div className="d-flex px-4 justify-content-between pt-4">
                  <span className="fs-4">Info</span>
                  <span
                    className="fs-4 fw-bold"
                    style={{ color: "#5F2EEA", cursor: "pointer" }}
                    onClick={handleHideInfo}
                  >
                    ...
                  </span>
                </div>
                <div style={{ display: profile ? "block" : "none" }}>
                  <div className="d-flex flex-column align-items-center">
                    <div className="wraper-image position-relative">
                      <input
                        type="file"
                        id="avatar"
                        onChange={handleChange}
                        ref={inputImg}
                        hidden
                      />
                      <img
                        src={data.avatar}
                        className="py-4 img-profile"
                        alt=""
                        onClick={onClickAvatar}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Click To Change Avatar"
                      />
                      <div class="middle-profile br-50 py-4" onClick={onClickAvatar}>
                        <div class="text">Click To Change</div>
                      </div>
                    </div>
                    <p className="fw-bold" style={{ marginBottom: "0px" }}>
                      {data ? `${data.first_name} ${data.last_name}` : ""}
                    </p>
                    <p>{data.role === "user" ? "Moviegoers" : "Admin/Developers"}</p>
                  </div>
                  <Hr />
                  <p className="text-secondary" style={{ marginTop: "20px", marginLeft: "15px" }}>
                    Loyalty Points
                  </p>
                  <div className="d-flex flex-column align-items-center pb-5">
                    <div className="d-flex flex-column card-loyalty pz-4 position-relative">
                      <div className="d-flex">
                        <span className="pt-2 text-bold text-white fs-6">
                          {data.role === "user" ? "Moviegoers" : "Developers."}
                        </span>
                        <img
                          className="position-absolute top-0 end-0 me-4 pe-2 mt-2"
                          src="/assets/images/star.png"
                          alt=""
                        />
                      </div>
                      <span className="pt-4 text-white fw-lighter">
                        <span className="fs-3 fw-bold">{data.role === "user" ? "320" : "∞"}</span>{" "}
                        Point
                      </span>
                    </div>
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
                                id="phone_number"
                                type="tel"
                                value={data.phone_number}
                                onChange={handleChange}
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
                      className="tab-pane fade position-relative"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      {load ? (
                        <Skeleton height={300} width={700} />
                      ) : (
                        <div className="ticket-page mt-5">
                          {ticket &&
                            ticket.map((item, i) => {
                              return (
                                <div
                                  className={
                                    i !== 0
                                      ? "card history border-rounded2 mt-4"
                                      : "card history border-rounded2"
                                  }
                                >
                                  <div className="d-flex py-4 px-4 justify-content-between">
                                    <div className="d-flex flex-column">
                                      <p className="text-placeholder mb-0">
                                        {moment(item.playing_time).format("LLLL")} <br />
                                        {moment(item.playing_time).fromNow()}
                                      </p>
                                      <p className="text-bold fs-3">{item.movies}</p>
                                    </div>
                                    <img src={item.cinemas} alt="cinema" width="100px" />
                                  </div>
                                  <Hr />
                                  <div className="card-body">
                                    <div className="d-flex justify-content-between px-2">
                                      <span
                                        className="btn btn-success"
                                        style={{ backgroundColor: "#00BA88", border: "none" }}
                                      >
                                        {item.status === "active"
                                          ? "Ticket in active"
                                          : "Ticket used"}
                                      </span>
                                      <div className="d-flex flex-nowrap align-self-center">
                                        <span className="text-placeholder flex-nowrap show-details">
                                          Show Details
                                        </span>
                                        <img
                                          src="/assets/images/ic_round-navigate-next.png"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      )}
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

export default Profile;
