import React, { Component } from "react";

export class Hr extends Component {
  render() {
    let classes = "hr w-100 ";
    classes += this.props.children;
    return <div className={classes}></div>;
  }
}

export default Hr;
