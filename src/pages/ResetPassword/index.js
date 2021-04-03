import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
require("dotenv").config();

const ResetPassword = () => {
  const [data, setData] = useState({
    first_name: "user",
    last_name: (Math.floor(Math.random() * 10000000) + 1).toString(),
    email: "",
    password: "",
    agree: false,
  });
  const [load, setLoad] = useState(false);
  let history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, ...{ [id]: value } });
  };

  const handleSubmit = () => {
    if (data.email.match(/@\w*.\w*/g)) {
      setLoad(true);
      axios
        .post(`${process.env.REACT_APP_URL_API}/v1/users/reset`, data)
        .then((result) => {
          if (result.data.status) {
            Swal.fire("SUCCESS", result.data.message, "success");
            history.push("/signin");
          } else {
            Swal.fire("SOMETHING WRONG!", result.data.message, "warning");
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
      Swal.fire("HEY!", "Email Cannot Be Empty", "info");
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
          <div className="my-5 py-5 mx-5">
            <h4 className="font-weight-bold mb-3 d-none d-md-block">Fill your complete email</h4>
            <img
              className="mb-3 d-block d-md-none"
              src="./assets/images/logo.png"
              alt="logo"
              width="78"
              height="20"
            />
            <h4 className="font-weight-bold d-block d-md-none pt-4">Forgot password</h4>
            <span className="text-placeholder">we'll send a link to your email shortly</span>
            <div className="form-group mt-4">
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Write your email"
                className="form-control"
                onChange={handleChange}
                value={data.email}
                disabled={load}
              />
            </div>
            <button
              className="btn btn-main btn-block mt-3 w-100"
              onClick={handleSubmit}
              disabled={load}
            >
              {load ? <div class="spinner-grow" role="status"></div> : "Reset My Password"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
