import React, { useEffect, useState } from "react";
import Header from "../../components/module/Header";
import HeaderMobile from "../../components/module/HeaderMobile";
import Footer from "../../components/module/Footer";
import "../../assets/css/Main.css";
import ContainerTop from "./component/ContainerTop/index.js";
import ContainerBottom from "./component/ContainerBottom/index.js";
import { useParams } from "react-router";
import axios from "axios";
require("dotenv").config();

const Order = () => {
  const [data, setData] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}:${process.env.REACT_APP_PORT_API}/v1/movies/${id}`)
      .then((result) => {
        if (result.data.status) {
          setData(result.data.data[0].name);
        } else {
          alert(result.data.message);
        }
      });
  }, []);

  return (
    <>
      <Header />
      <div class="absolute-container">
        {data && <ContainerTop title={data.replace(/\(\d*\)/gi, "")} id={id} />}
        <ContainerBottom />
        <div class="margin-y-3 sm-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Order;
