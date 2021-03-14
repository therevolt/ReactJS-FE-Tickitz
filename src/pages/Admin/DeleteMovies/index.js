import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../../../components/module/Footer";
import HeaderNew from "../../../components/module/Header";
import CardMovie from "../components/CardMovie";
require("dotenv").config();

export default function DeleteMovie() {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!data) {
      axios
        .get(`${process.env.REACT_APP_URL_API}:${process.env.REACT_APP_PORT_API}/v1/movies`)
        .then((result) => {
          if (result.data.status) {
            setData(result.data.data);
          } else {
            alert(result.data.message);
          }
        });
    }
  }, [data]);

  return (
    <>
      <HeaderNew />
      <div className="bg-grey">
        <div className="border-rounded2">
          <div className="px-5 py-5 mx-5">
            <div class="row row-cols-1 row-cols-md-4 g-4">
              {data &&
                data.map((item) => {
                  return (
                    <CardMovie title={item.name} img={item.image} id={item.id} setData={setData} />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div class="margin-y-3 sm-container bg-white">
        <Footer />
      </div>
    </>
  );
}
