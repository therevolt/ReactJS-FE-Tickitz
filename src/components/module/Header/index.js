import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Hr from "../../base/Hr";
import { connect, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

const HeaderNew = (props) => {
  const [data, setData] = useState({
    show: false,
    search: false,
    title: "",
  });
  const [log, setLog] = useState(null);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      setLog(user);
    } else if (localStorage.getItem("user")) {
      const dataLocal = JSON.parse(localStorage.getItem("user"));
      const getData = axios.get(`${process.env.REACT_APP_URL_API}/v1/users/${dataLocal.id}`, {
        headers: { Authorization: `Bearer ${dataLocal.token}` },
      });
      getData
        .then((result) => {
          if (result.data.status) {
            setLog(result.data.data[0]);
          } else {
            if (result.data.message === "Token Expired") {
              Swal.fire("TOKEN EXPIRED!", "Please Login Again!", "warning");
            }
          }
        })
        .catch(() => {
          Swal.fire("TOKEN EXPIRED", "Please Login Again", "info");
        });
    }

    if (data.title === "" && data.search) {
      if (props.fireEvent) {
        history.push("/movies");
        props.fireEvent[0](props.fireEvent[1]);
      }
    } else if (props.fireEvent && data.search) {
      props.fireEvent[2](data.title);
    }
    // eslint-disable-next-line
  }, [data]);

  let history = useHistory();
  const handleSearch = () => {
    setData({ ...data, search: !data.search, title: "" });
  };
  const handleShow = () => {
    setData({ ...data, show: !data.show });
  };

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setData((prev) => ({ ...prev, title: e.target.value }));
  };

  const handleSearchMovie = (e) => {
    if (e.key === "Enter") {
      if (props.fireEvent) {
        props.fireEvent[2](data.title);
      } else {
        history.push(`/movies?title=${data.title}`);
      }
    }
  };

  return (
    <nav
      className={
        data.show
          ? "navbar navbar-expand-lg navbar-light bg-light mobile-menu"
          : "navbar navbar-expand-lg navbar-light bg-light"
      }
    >
      <div className="container">
        <Link to="/">
          <span className="navbar-brand">
            <img src="/assets/images/Tickitz 2.png" alt="main-logo" />
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" onClick={handleShow}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item lg-display-none sm-margin-y-05">
              <div className="warped-menu display-flex is-vertically-centered border-gray border-rounded2 margin-y-1 w-50">
                <img
                  className="margin-left-1"
                  src="/assets/images/bx_bx-search.png"
                  height="20px"
                  width="20px"
                  alt="search"
                />
                <input className="input-form no-border" type="text" placeholder="Search . . ." />
              </div>
            </li>
            <li className="nav-item lg-display-none">
              <Hr />
            </li>
            <li className="nav-item">
              <Link
                to="/movies"
                className="nav-link sm-text-center sm-margin-y-05 text-bold text-title"
              >
                Movies
              </Link>
            </li>
            <li className="nav-item lg-display-none sm-margin-y-05">
              <Hr />
            </li>
            <li className="nav-item">
              <span className="nav-link sm-text-center sm-margin-y-05 text-bold text-title">
                Cinemas
              </span>
            </li>
            <li className="nav-item lg-display-none sm-margin-y-05">
              <Hr />
            </li>
            <li className="nav-item">
              <span className="nav-link sm-text-center sm-margin-y-05 text-bold text-title">
                Buy Ticket
              </span>
            </li>
            <li className="nav-item lg-display-none sm-margin-y-05">
              <Hr />
            </li>
            <span className="footer-nav sm-text-center text-placeholder lg-display-none">
              © 2020 Tickitz. All Rights Reserved.
            </span>
          </ul>
          <div>
            <select
              className="select font-size-5 hover-cursor-pointer sm-display-none"
              name="location"
              id="loc"
            >
              <option value="#">Location</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bogor">Bogor</option>
              <option value="Bandung">Bandung</option>
              <option value="Yogyakarta">Yogyakarta</option>
            </select>
          </div>
          <div className="margin-right-2 font-size-5 hover-cursor-pointer sm-display-none">
            {data.search ? (
              <div className="warped-menu display-flex is-vertically-centered border-gray border-rounded2">
                <img
                  className="margin-left-1"
                  src="/assets/images/bx_bx-search.png"
                  height="20px"
                  width="20px"
                  alt="search"
                />
                <input
                  className="input-form no-border"
                  type="text"
                  placeholder="Search . . ."
                  onBlur={handleSearch}
                  onChange={handleChangeSearch}
                  autoFocus={true}
                  onKeyPress={handleSearchMovie}
                />
              </div>
            ) : (
              <img
                src="/assets/images/bx_bx-search.png"
                height="20px"
                width="20px"
                alt="search"
                onClick={handleSearch}
              />
            )}
          </div>
          {log ? (
            <div className="margin-right-2 font-size-5 hover-cursor-pointer sm-margin-right-0 sm-display-none">
              <Link to="/profile">
                <img
                  src={log.avatar}
                  style={{ borderRadius: "50%" }}
                  height="56px"
                  width="56px"
                  alt="Profile"
                />
              </Link>
            </div>
          ) : (
            <div className="margin-right-2 font-size-6 hover-cursor-pointer sm-margin-right-0 sm-display-none">
              <Link to="/signup">
                <input
                  className="btn-submit-solid sign-up border-rounded2"
                  type="submit"
                  value="Sign Up"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const StateProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(StateProps)(HeaderNew);
