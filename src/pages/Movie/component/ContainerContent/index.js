import React, { Component } from "react";
import CardCinemas from "../CardCinemas";
import axios from "axios";

export class ContainerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      cinema: [],
    };
  }

  async componentDidMount() {
    const resDataPlaylist = await axios.get(
      `http://localhost:6000/v1/cinemas/playlist/${this.props.id}`
    );
    if (resDataPlaylist.data.data.length >= 1) {
      let cinema = resDataPlaylist.data.data.map((item) => item.cinema_id);

      [...new Set(cinema)].forEach(async (item) => {
        const getData = await axios.get(`http://localhost:6000/v1/cinemas/${item}`);
        const resultGetData = await getData.data.data[0];
        this.setState({ ...this.state, data: [...this.state.data, resultGetData] });
      });
    }
  }

  render() {
    return (
      <div className="grid margin-x-3 grid-template-columns-3 margin-bottom-05 sm-grid-template-columns-1 sm-margin-x-05">
        {this.state.data.length > 0 &&
          this.state.data.map((item, i) => {
            return (
              <CardCinemas
                cinema={item.name}
                location={item.address}
                image={item.logo}
                playing_times={item.playlists}
                cinema_id={item.id}
                id={this.props.id}
                key={i}
              />
            );
          })}
      </div>
    );
  }
}

export default ContainerContent;
