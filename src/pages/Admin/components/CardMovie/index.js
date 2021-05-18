import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { getMovies } from "../../../../configs/redux/action/movies";

export class CardMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  componentDidMount() {
    this.setState({ user: this.props.user ? this.props.user.role : "user" });
  }

  handleDelete = (setData) => {
    axios
      .delete(`${process.env.REACT_APP_URL_API}/v1/movies/${this.props.id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
        },
      })
      .then((result) => {
        if (result.data.status) {
          this.props.getMovie();
          Swal.fire("SUCCESS", result.data.message, "success");
          setData(null);
        }
      });
  };

  render() {
    return (
      <div className="col">
        <div className="card" style={{ maxHeight: "330px" }}>
          <img
            src={this.props.img}
            className="card-img-top"
            alt="..."
            style={{ maxHeight: "200px", padding: "20px 50px" }}
          />
          {this.state.user === "admin" ? (
            <div className="card-body d-flex flex-column align-items-center">
              <span className="d-inline-block text-truncate" style={{ maxWidth: "200px" }}>
                <h5 className="card-title">{this.props.title.replace(/\(\d*\)/gi, "")}</h5>
              </span>
              <span className="text-placeholder">{this.props.genre}</span>
              <p className="card-text">
                <Link to={`/movie/${this.props.id}`}>
                  <button className="btn btn-primary me-2">View</button>
                </Link>
                <Link to={`/movie/edit/${this.props.id}`}>
                  <button className="btn btn-primary me-2">Edit</button>
                </Link>
                <button
                  id={this.props.id}
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(this.props.setData)}
                >
                  Delete
                </button>
              </p>
            </div>
          ) : (
            <div className="card-body d-flex flex-column align-items-center">
              <span className="d-inline-block text-truncate" style={{ maxWidth: "200px" }}>
                <h5 className="card-title">{this.props.title.replace(/\(\d*\)/gi, "")}</h5>
              </span>
              <span className="text-placeholder">{this.props.genre}</span>
              <Link to={`/movie/${this.props.id}`}>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Detail"
                  id={this.props.id}
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const StateProps = (state) => {
  return {
    user: state.user.user,
  };
};

const DispatchProps = (dispatch) => ({
  getMovie: () => {
    dispatch(getMovies());
  },
});

export default connect(StateProps, DispatchProps)(CardMovie);
