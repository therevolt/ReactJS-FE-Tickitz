import React, { Component } from "react";
import Head from "./components/Head";
import PanelForm from "./components/PanelForm";
import PanelImg from "./components/PanelImg";
import "./css/signin.css";

export class Signin extends Component {
  render() {
    return (
      <html lang="en">
        <body>
          <Head />
          <main>
            <PanelImg />
            <PanelForm />
          </main>
        </body>
      </html>
    );
  }
}

export default Signin;
