import React, { useEffect, useState } from "react";
import Footer from "../../../components/module/Footer";
import Header from "../../../components/module/Header";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

export default function PageEditMovie() {
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  // const monthConvert = (month) => {
  //   const arr = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];
  //   return parseInt(arr.indexOf(month)) + 1;
  // };

  const handleChange = (e) => {
    if (e.target) {
      const { id, value } = e.target;
      setData({ ...data, ...{ [id]: value } });
    }
    // } else {
    //   const date = new Date(e);
    //   setData({
    //     ...data,
    //     release_date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
    //   });
    // }
  };

  useEffect(() => {
    if (!data) {
      axios
        .get(`${process.env.REACT_APP_URL_API}/v1/movies/${id}`)
        .then((result) => {
          if (result.data.status) {
            setData(result.data.data[0]);
          }
        })
        .catch(() => {
          history.push("/movies");
        });
    }
    // eslint-disable-next-line
  }, [data]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_URL_API}/v1/movies/${id}`, data)
      .then((result) => {
        if (result.data.status) {
          Swal.fire("SUCCESS", result.data.message, "success");
          setData(null);
        } else {
          Swal.fire("HMMMMM...!", result.data.message, "warning");
        }
      })
      .catch((err) => {
        Swal.fire("ERROR!", err.response.data.message, "error");
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`${process.env.REACT_APP_URL_API}/v1/movies/${id}`).then((result) => {
      if (result.data.status) {
        Swal.fire("SUCCESS", "Movie Has Been Deleted", "success");
        history.push("/movies");
      }
    });
  };

  return (
    <>
      <Header />
      <div className="bg-grey">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8">
              <h5 className="my-3">Movie Description</h5>
              {data && (
                <div className="bg-white border-rounded2 py-5">
                  <div className="row px-4">
                    <div className="col-md-5 padding-x-1 sm-margin-bottom-1">
                      <div className="w-100 h-100 border-gray border-rounded display-flex flex-direction-col flex-content-center is-vertically-centered padding-1">
                        <img src={data.image} alt="movie" />
                      </div>
                    </div>
                    <div className="col-md-7 d-flex flex-column">
                      <div className="d-flex flex-column">
                        <label className="label-edit" htmlFor="name" style={{ marginTop: "0px" }}>
                          Movie Name
                        </label>
                        <input
                          className="input-form"
                          type="text"
                          id="name"
                          value={data.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <label className="label-edit" htmlFor="cat">
                          Category
                        </label>
                        <input
                          className="input-form"
                          type="text"
                          id="category"
                          value={data.category}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="row">
                        <div className="col-5 d-flex flex-column">
                          <label className="label-edit" htmlFor="data">
                            Release Date
                          </label>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            id="release_date"
                            dateFormat={"dd/mm/yyyy"}
                            className="input-form datepicker background-gray no-outline right-auto z-index-2 hover-cursor-pointer"
                            value={data.release_date}
                            disabled
                          />
                        </div>
                        <div className="col-7 d-flex flex-column">
                          <label className="label-edit" htmlFor="duration">
                            Duration (hour/minute)
                          </label>
                          <div className="d-flex justify-content-between">
                            <input
                              className="input-form duration"
                              type="number"
                              name="hours"
                              id="hours"
                              value={data.hours}
                              onChange={handleChange}
                              disabled
                            />
                            <input
                              className="input-form duration"
                              type="number"
                              name="minutes"
                              id="minutes"
                              value={data.minutes}
                              onChange={handleChange}
                              disabled
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row px-4">
                    <div className="col-5 d-flex flex-column">
                      <label className="label-edit" htmlFor="director">
                        Director
                      </label>
                      <input
                        className="input-form"
                        type="text"
                        id="director"
                        value={data.director}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-7 d-flex flex-column">
                      <label className="label-edit" htmlFor="casts">
                        Casts
                      </label>
                      <input
                        className="input-form"
                        type="text"
                        id="casts"
                        value={JSON.parse(data.casts).join(", ")}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="d-flex flex-column">
                      <label className="label-edit" htmlFor="synopsis">
                        Synopsis
                      </label>
                      <textarea
                        className="input-form"
                        name="synopsis"
                        id="description"
                        cols="30"
                        rows="10"
                        value={data.description}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="px-4 pt-4">
                    <button className="btn btn-primary me-2" onClick={handleUpdate}>
                      Update Data
                    </button>
                    <button className="btn btn-danger" onClick={handleDelete}>
                      Delete Data
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="col d-flex flex-column">
              <div>
                <h5 className="my-3">Premiere Location</h5>
                <div className="bg-white border-rounded2">
                  <div className="py-4 pe-5 me-5 ps-4">
                    <div className="d-flex align-items-center bg-grey border-rounded2 ps-3">
                      <FontAwesomeIcon icon={faMapMarkedAlt} />
                      <select
                        className="form-select no-border no-outline bg-grey"
                        aria-labelledby="Default select example"
                        defaultValue="0"
                      >
                        <option value="0" selected>
                          Purwokerto
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="row row-cols-3 px-3 py-2">
                    <div className="col py-3">
                      <img src="/assets/images/ebv.id.png" alt="" width="100px" />
                    </div>
                    <div className="col py-3">
                      <img src="/assets/images/hiflix.png" alt="" width="100px" />
                    </div>
                    <div className="col py-3">
                      <img src="/assets/images/CineOne21.png" alt="" width="100px" />
                    </div>
                    <div className="col py-3">
                      <img src="/assets/images/ebv.id.png" alt="" width="100px" />
                    </div>
                    <div className="col py-3">
                      <img src="/assets/images/hiflix.png" alt="" width="100px" />
                    </div>
                    <div className="col py-3">
                      <img src="/assets/images/CineOne21.png" alt="" width="100px" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="my-3">Showtimes</h5>
                <div className="bg-white border-rounded2">
                  <div className="py-4 pe-5 me-5 ps-4">
                    <div className="d-flex align-items-center bg-grey border-rounded2 ps-3">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      <select
                        className="form-select no-border no-outline bg-grey"
                        aria-labelledby="Default select example"
                        defaultValue="0"
                      >
                        <option value="0" selected>
                          Select a date
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
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
