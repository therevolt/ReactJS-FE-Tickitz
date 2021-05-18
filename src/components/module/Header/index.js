import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Hr from "../../base/Hr";
import { connect, useSelector, useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import Swal from "sweetalert2";

const HeaderNew = (props) => {
  const [data, setData] = useState({
    show: false,
    search: false,
    title: "",
  });
  const [log, setLog] = useState(null);
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (user) {
      setLog(user);
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
  }, [data, user]);

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
        dispatch({ type: "LOGIN_USER", payload: null });
        history.push("/signin");
        window.scrollTo(0, 0);
      }
    });
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
            {log && (
              <>
                <li className="nav-item lg-display-none">
                  <Hr />
                </li>
                <li className="nav-item">
                  <Link
                    to="/profile"
                    className="nav-link sm-text-center sm-margin-y-05 text-bold text-title"
                  >
                    Profile
                  </Link>
                </li>
              </>
            )}
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
            <li className="nav-item lg-display-none">
              <Hr />
            </li>
            {!log ? (
              <li className="nav-item">
                <Link
                  to="/signin"
                  className="nav-link sm-text-center sm-margin-y-05 text-bold text-title"
                >
                  Sign In
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <span
                  className="nav-link sm-text-center sm-margin-y-05 text-bold text-title"
                  onClick={handleLogout}
                >
                  Log Out
                </span>
              </li>
            )}
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
            <button className="nav-item dropdown no-bg no-border showInAnimation">
              <span
                className="nav-link"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ padding: 0 }}
              >
                <div className="margin-right-2 font-size-5 hover-cursor-pointer sm-margin-right-0 sm-display-none">
                  <img
                    src={log.avatar}
                    style={{ borderRadius: "50%" }}
                    height="56px"
                    width="56px"
                    alt="Profile"
                    className="img-cover"
                  />
                </div>
              </span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/profile" className="dropdown-item">
                  Profile
                </Link>
                <span className="dropdown-item bg-danger text-white py-2" onClick={handleLogout}>
                  Log Out
                </span>
              </div>
            </button>
          ) : loading ? (
            <Skeleton />
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
