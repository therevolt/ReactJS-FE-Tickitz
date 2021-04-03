import React, { useEffect, useState } from "react";
import "./signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import axiosApiInstance from "../../helper/axiosInstance";
require("dotenv").config();

const ConfirmReset = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    password: "",
  });
  const [load, setLoad] = useState(false);
  let history = useHistory();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  useEffect(() => {
    if (!query.get("token")) {
      history.push("/");
    } // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, ...{ [id]: value } });
  };

  const handleShowPass = () => {
    setShow(!show);
  };

  const handleSubmit = () => {
    if (data.password) {
      setLoad(true);
      axiosApiInstance
        .post(
          `${process.env.REACT_APP_URL_API}/v1/users/confirmReset?token=${query.get("token")}`,
          data
        )
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
      Swal.fire("HEY!", "Password Cannot Be Empty", "info");
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
            <h4 className="font-weight-bold mb-3 d-none d-md-block">Fill your new password</h4>
            <img
              className="mb-3 d-block d-md-none"
              src="./assets/images/logo.png"
              alt="logo"
              width="78"
              height="20"
            />
            <h4 className="font-weight-bold d-block d-md-none pt-4">New Password</h4>
            <div className="form-group mt-5">
              <label for="password">New Password</label>
              <div className="input-group" id="show_hide_password">
                <input
                  id="password"
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="Write your new password"
                  className="form-control"
                  onChange={handleChange}
                  value={data.password}
                  disabled={load}
                />
                <div className="input-group-append">
                  <span onClick={handleShowPass}>
                    <FontAwesomeIcon icon={show ? faEye : faEyeSlash} />
                  </span>
                </div>
              </div>
            </div>
            <button
              className="btn btn-main btn-block mt-3 w-100"
              onClick={handleSubmit}
              disabled={load}
            >
              {load ? <div class="spinner-grow" role="status"></div> : "Set New Password"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmReset;
