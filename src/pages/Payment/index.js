import React, { useEffect, useState } from "react";
import Header from "../../components/module/Header";
import HeaderMobile from "../../components/module/HeaderMobile";
import Footer from "../../components/module/Footer";
import "../../assets/css/Main.css";
import Content from "./components/Content";
import axios from "axios";
import { useParams } from "react-router";

const Payment = () => {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}:${process.env.REACT_APP_PORT_API}/v1/movies/${id}`)
      .then((result) => {
        setData(result.data.data[0]);
      })
      .catch((err) => {
        alert(err);
      });
    axios
      .get(`${process.env.REACT_APP_URL_API}:${process.env.REACT_APP_PORT_API}/v1/users/3`)
      .then((result) => {
        setUser(result.data.data[0]);
      });
  }, []);

  return (
    <>
      <Header />
      <HeaderMobile />
      <div class="absolute-container">
        {user && <Content data={data} user={user} />}
        <div class="margin-y-3 sm-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Payment;
