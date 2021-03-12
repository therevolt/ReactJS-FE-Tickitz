import React, { useState } from "react";
import axios from "axios";

const PanelForm = () => {
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, ...{ [id]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data) {
      alert("Form Cannot Be Empty!");
    } else {
      axios
        .post("http://localhost:6000/v1/users/login", data)
        .then((result) => {
          alert(result.data.message);
        })
        .catch((err) => {
          if (err.response) {
            alert(err.response.data.message);
          }
        });
    }
  };

  const handleUnsetButton = (e) => {
    e.preventDefault();
    alert("Button Not Set!");
  };

  const handleUnsetLink = (e) => {
    e.preventDefault();
    alert("Link Not Set!");
  };

  return (
    <div className="container my-3 mt-5">
      <div className="title">
        <div>
          <h1 className="fw-bold">Sign In</h1>
          <p>Sign in with your data that you entered during your registration</p>
        </div>
      </div>
      <div className="form">
        <div>
          <p>Email</p>
          <input
            id="email"
            className="email"
            type="email"
            placeholder="Write your email"
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            id="password"
            className="password"
            type="password"
            placeholder="Write your password"
            onChange={handleChange}
          />
        </div>
        <div>
          <input className="btn-submit" type="submit" value="SIGN IN" onClick={handleSubmit} />
        </div>
        <div>
          <span>
            Forgot your password?{" "}
            <a href="" className="href" onClick={handleUnsetLink}>
              Reset now
            </a>
          </span>
        </div>
      </div>
      <div className="line">
        <div className="text-divider">Or</div>
      </div>
      <div className="signin">
        <div className="signin-with">
          <div>
            <a href="" className="href" onClick={handleUnsetButton}>
              <div className="icon">
                <img src="./assets/images/google.png" alt="" className="src" />
                <span>Google</span>
              </div>
            </a>
          </div>
          <div>
            <a href="" className="href" onClick={handleUnsetButton}>
              <div className="icon">
                <img src="./assets/images/fb.png" alt="" className="src" />
                <span>Facebook</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelForm;
