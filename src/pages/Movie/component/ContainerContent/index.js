import React, { Component } from "react";
import CardCinemas from "../CardCinemas";

export class ContainerContent extends Component {
  render() {
    return (
      <div class="grid margin-x-3 grid-template-columns-3 margin-bottom-05 sm-grid-template-columns-1 sm-margin-x-05">
        <CardCinemas
          cinema="ebv.id"
          location="Whatever street No.12, South Purwokerto"
          image="/assets/images/ebv.id.png"
          id={this.props.id}
        />

        <CardCinemas
          cinema="CineOne21"
          location="Downcare street No. 21, East Purwokerto"
          image="/assets/images/CineOne21.png"
          id={this.props.id}
        />

        <CardCinemas
          cinema="hiflix Cinema"
          location="Colonel street No. 2, East Purwokerto"
          image="/assets/images/hiflix.png"
          id={this.props.id}
        />
      </div>
    );
  }
}

export default ContainerContent;
