import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import CardLogWith from "./components/CardLogWith";
import axios from "axios";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import Swal from "sweetalert2";
require("dotenv").config();

const Signin = (props) => {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    agree: false,
  });

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
          .post(
            `${process.env.REACT_APP_URL_API}:${process.env.REACT_APP_PORT_API}/v1/users/login`,
            data
          )
          .then((result) => {
            console.log(result.data);
            if (result.data.status) {
              Swal.fire(result.data.message);
              props.LoginUser();
              localStorage.setItem("logged", true);
              history.replace("/");
            } else {
              Swal.fire(result.data.message);
            }
          })
          .catch((err) => {
            if (err.response) {
              Swal.fire("ERROR", err.response.data.message, "error");
            }
          });
      } else {
        Swal.fire("you must agree");
      }
    } else {
      Swal.fire("nooo");
    }
  };

  return (
    <div className="custom">
      <div className="row">
        <div className="col-md-7 d-none d-md-block left">
          <div className="overlay">
            <div className="wrap">
              <img src="./assets/images/logo-white.png" alt="Ticketz" className="img-fluid" />
              <h1 className="sub-text mt-5 font-weight-bold text-white">wait, watch, wow!</h1>
            </div>
          </div>
        </div>
        <div className="col-md-5 right">
          <div className="wrap">
            <h1 className="font-weight-bold mb-3 d-none d-md-block">Sign In</h1>
            <img
              className="mb-3 d-block d-md-none"
              src="./assets/images/logo.png"
              alt="logo"
              width="78"
              height="20"
            />
            <h1 className="font-weight-bold mb-3 d-block d-md-none">Sign In</h1>
            <p className="text-placeholder">
              Sign in with your data that you entered during your registration
            </p>
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
                  <a href="#" onClick={handleShowPass}>
                    <FontAwesomeIcon icon={show ? faEye : faEyeSlash} />
                  </a>
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
              Sign In
            </button>
            <p className="infor text-center mt-4">
              Forgot your password?
              <a href="" className="font-weight-bold link">
                Reset now
              </a>
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

const DispatchProps = (dispatch) => {
  return {
    LoginUser: () => dispatch({ type: "LOGIN_USER" }),
  };
};

const StateProps = (state) => {
  return state;
};

export default connect(StateProps, DispatchProps)(Signin);
