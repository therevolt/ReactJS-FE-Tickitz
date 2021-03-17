import React, { useState } from "react";
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import CardLogWith from "./components/CardLogWith";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
require("dotenv").config();

const Signup = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    first_name: "user",
    last_name: (Math.floor(Math.random() * 10000000) + 1).toString(),
    email: "",
    password: "",
    agree: false,
  });
  let history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, ...{ [id]: value } });
  };

  const handleShowPass = () => {
    setShow(!show);
  };

  const handleSubmit = () => {
    if (data.email.match(/@\w*.\w*/g)) {
      if (data.agree) {
        axios
          .post(`${process.env.REACT_APP_URL_API}/v1/users`, data)
          .then((result) => {
            if (result.data.status) {
              Swal.fire("SUCCESS", result.data.message, "success");
              history.push("/signin");
            } else {
              Swal.fire("SOMETHING WRONG!", result.data.message, "warning");
            }
          })
          .catch((err) => {
            if (err.response) {
              Swal.fire("ERROR", err.response.data.message, "error");
            }
          });
      } else {
        Swal.fire("HEY!", "you must agree", "warning");
      }
    } else {
      Swal.fire("HEY!", "user & pass cannot be empty", "info");
    }
  };

  return (
    <div className="custom">
      <div className="row">
        <div className="col-md-7 d-none d-md-block left">
          <div className="overlay">
            <div className="wrap">
              <img
                src="./assets/images/logo-white.png"
                alt="Ticketz"
                className="img-fluid img-signup"
              />
              <h1 className="mt-5 font-weight-bold text-white">Lets build your account</h1>
              <p className="sub-judul mt-3">
                To be a loyal moviegoer and access all of features,
                <br />
                your details are required.
              </p>
              <ul className="step">
                <li className="step text-white">Fill Aditional Detail</li>
                <li className="step">Activate Your Account</li>
                <li className="step">Done</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-5 right">
          <div className="wrap">
            <h4 className="font-weight-bold mb-3 d-none d-md-block">
              Fill your additional details
            </h4>
            <img
              className="mb-3 d-block d-md-none"
              src="./assets/images/logo.png"
              alt="logo"
              width="78"
              height="20"
            />
            <h4 className="font-weight-bold d-block d-md-none">Sign Up</h4>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Write your email"
                className="form-control"
                onChange={handleChange}
                value={data.email}
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <div className="input-group" id="show_hide_password">
                <input
                  id="password"
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Write your password"
                  className="form-control"
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
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="aggre"
                onClick={() => setData({ ...data, agree: !data.agree })}
              />
              <label className="form-check-label" for="aggre">
                I agree to terms & conditions
              </label>
            </div>
            <button className="btn btn-main btn-block mt-3" onClick={handleSubmit}>
              Join for free now
            </button>
            <p className="infor text-center mt-4">
              Do you already have an account?
              <Link to="/signin">
                <span className="font-weight-bold link">Log in</span>
              </Link>
            </p>
            <div className="divider">
              <hr />
              <span>Or</span>
              <hr />
            </div>
            <div className="row mt-4 sosmed">
              <CardLogWith text="Google" src="./assets/images/google-btn.png" />
              <CardLogWith text="Facebook" src="./assets/images/fb-btn.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
