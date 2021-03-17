import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Footer from "../../../components/module/Footer";
import HeaderNew from "../../../components/module/Header";
import CardMovie from "../components/CardMovie";
require("dotenv").config();

export default function DeleteMovie() {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const [data, setData] = useState(null);
  let query = useQuery();

  useEffect(() => {
    if (!data) {
      if (query.get("title")) {
        console.log(query.get("title"));
        axios
          .get(`${process.env.REACT_APP_URL_API}/v1/movies/search?title=${query.get("title")}`)
          .then((result) => {
            if (result.data.status) {
              setData(result.data.data);
            } else {
              alert(result.data.message);
            }
          });
      } else {
        axios.get(`${process.env.REACT_APP_URL_API}/v1/movies`).then((result) => {
          if (result.data.status) {
            setData(result.data.data);
          } else {
            alert(result.data.message);
          }
        });
      }
    }
    // eslint-disable-next-line
  }, [data]);

  return (
    <>
      <HeaderNew fireEvent={setData} />
      <div className="bg-grey">
        <div className="border-rounded2">
          <div className="px-md-5 py-md-5 mx-md-5 px-3 py-3 mx-0">
            <div className="row row-cols-2 row-cols-md-4 g-4">
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
      <div className="margin-y-3 sm-container bg-white">
        <Footer />
      </div>
    </>
  );
}
