import React, { Component } from "react";
import axios from "axios";
import Hr from "../../../../components/base/Hr";
require("dotenv").config();

export class ContainerTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
    };
  }

  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_URL_API}:${process.env.REACT_APP_PORT_API}/v1/movies/` +
          this.props.id
      )
      .then((result) => {
        this.setState({ movie: result.data.data });
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    let title;
    let image;
    let genre;
    let release;
    let duration;
    let director;
    let casts;
    let desc;
    if (this.state.movie !== null) {
      title = this.state.movie[0].name;
      image = this.state.movie[0].image;
      genre = this.state.movie[0].genre;
      release = this.state.movie[0].release_date;
      duration = this.state.movie[0].duration;
      director = this.state.movie[0].director;
      casts = JSON.parse(this.state.movie[0].casts).join(", ");
      console.log(casts);
      desc = this.state.movie[0].description;
    } else {
      title = "asdsadsa";
      image = "/assets/images/Rectangle 119.png";
      genre = "kodsakdsao";
      release = "kodsa213123";
      duration = "123123";
      director = "sadoqw sda";
      casts = "asdasdsa. dsasad ,dsa as";
      desc = "saokdosakdosakdosakdoakdosaksa";
    }

    return (
      <div class="display-flex margin-x-3 margin-y-5 sm-margin-x-05 flex-direction-row sm-flex-direction-col">
        <div class="display-flex-30 padding-x-2 sm-margin-bottom-1">
          <div class="w-100 h-100 border-gray border-rounded display-flex flex-direction-col flex-content-center is-vertically-centered padding-1">
            <img src={image} alt="movie" />
          </div>
        </div>
        <div class="display-flex-70 flex-direction-col margin-bottom-2">
          <div class="margin-bottom-3 sm-text-center">
            <h4 class="font-size-4 margin-bottom-05 text-title">{title}</h4>
            <span>{genre}</span>
          </div>
          <div class="display-flex">
            <div class="display-flex-30 flex-direction-col sm-display-flex-50">
              <div class="margin-bottom-2">
                <h5 class="text-title font-size-5 margin-bottom-05">Release date</h5>
                <span>{release}</span>
              </div>
              <div class="margin-bottom-1">
                <h5 class="text-title font-size-5 margin-bottom-05">Duration</h5>
                <span>{duration}</span>
              </div>
            </div>
            <div class="display-flex-70 flex-direction-col sm-display-flex-50">
              <div class="margin-bottom-2">
                <h5 class="text-title font-size-5 margin-bottom-05">Directed by</h5>
                <span>{director}</span>
              </div>
              <div class="margin-bottom-1">
                <h5 class="text-title font-size-5 margin-bottom-05">Casts</h5>
                <span
                  className="d-inline-block text-truncate"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title={casts}
                  style={{ maxWidth: "40vw" }}
                >
                  {casts}
                </span>
              </div>
            </div>
          </div>
          <Hr children="margin-y-2" />
          {/* <hr class="hr w-100 margin-y-2" /> */}
          <div>
            <h5 class="text-title font-size-5 margin-bottom-05">Synopsis</h5>
            <p class="synopsys">{desc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContainerTop;
