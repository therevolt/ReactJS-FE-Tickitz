import React, { useEffect, useState } from "react";
import Header from "../../components/module/Header";
import Footer from "../../components/module/Footer";
import "../../assets/css/Main.css";
import Content from "./components/Content";
import axios from "axios";
import { useParams } from "react-router";

const Payment = () => {
  const [data, setData] = useState(null);
  const user = localStorage.getItem("user");
  let { id } = useParams();

  useEffect(() => {
    if (!data) {
      axios
        .get(`${process.env.REACT_APP_URL_API}/v1/movies/${id}`)
        .then((result) => {
          setData(result.data.data[0]);
        })
        .catch((err) => {
          alert(err);
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <div className="absolute-container">
        {user && data && <Content data={data} user={JSON.parse(user)} />}
        <div className="margin-y-3 sm-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Payment;
