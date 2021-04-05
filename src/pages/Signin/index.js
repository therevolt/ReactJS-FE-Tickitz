import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import CardLogWith from "./components/CardLogWith";
import axios from "axios";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import HelmetTitle from "../../components/base/Helmet";
require("dotenv").config();

const Signin = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
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
      setLoad(true);
      axios
        .post(`${process.env.REACT_APP_URL_API}/v1/users/login`, data)
        .then((result) => {
          if (result.data.status) {
            Swal.fire("GREAT!", result.data.message, "success");
            dispatch({ type: "LOGIN_USER", payload: result.data.data[0] });
            localStorage.setItem(
              "user",
              JSON.stringify({
                id: result.data.data[0].id,
                token: result.data.data[0].token,
                refreshToken: result.data.data[0].refreshToken,
              })
            );
            history.replace("/");
          } else {
            Swal.fire("HMMMMM...", result.data.message, "warning");
          }
          setLoad(false);
        })
        .catch((err) => {
          if (err.response) {
            Swal.fire("ERROR", err.response.data.message, "error");
          }
          setLoad(false);
        });
    } else {
      Swal.fire("HEY!", "user & pass cannot be empty", "info");
    }
  };

  return (
    <div className="custom showInAnimation">
      <HelmetTitle title="Sign In - Tickitz Web" />
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
                  <span onClick={handleShowPass}>
                    <FontAwesomeIcon icon={show ? faEye : faEyeSlash} />
                  </span>
                </div>
              </div>
            </div>
            <button className="btn btn-main btn-block mt-3" onClick={handleSubmit} disabled={load}>
              {load ? (
                <div class="spinner-grow" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </button>
            <p className="infor text-center mt-4">
              Forgot your password?
              <Link to="/reset" className="font-weight-bold link text-decoration-none">
                {" "}
                Reset now
              </Link>
              <br />
              Not Have Account?
              <Link to="/signup" className="font-weight-bold link text-decoration-none">
                {" "}
                Register Now
              </Link>
            </p>
            <div className="divider-sign">
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

export default Signin;
