import React, { useEffect, useRef, useState } from "react";
import Footer from "../../../components/module/Footer";
import Header from "../../../components/module/Header";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import FormData from "form-data";
import { setHours, setMinutes } from "date-fns";
import { cvTime } from "../../../helper/convertTime";

export default function PageEditMovie() {
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState(null);
  const [profileTemp, setProfileTemp] = useState(null);
  const [showTime, setShowTime] = useState(setHours(setMinutes(new Date(), 30), 16));
  const [listShowTime, setListsShowTime] = useState([]);
  const [cinema, setCinema] = useState([]);
  const [dataPlaylist, setDataPlaylist] = useState(null);
  const imgRef = useRef(null);
  const dateRef = useRef(null);
  const { id } = useParams();
  const history = useHistory();
  const form = new FormData();

  const changeDates = (value) => {
    return moment(value).format("DD/MM/YYYY");
  };

  const handleClickCinema = (e) => {
    if (e.target.id === "cinema") {
      setDataPlaylist({ movie_id: id, cinema_id: e.target.value });
    } else {
      setDataPlaylist({ movie_id: id, cinema_id: e.target.alt });
    }
  };

  const handleChange = (e) => {
    if (e.target) {
      const { id, value } = e.target;
      if (id === "image") {
        let file = e.target.files[0];
        setData({ ...data, image: URL.createObjectURL(file) });
        setProfileTemp(file);
      } else {
        setData({ ...data, ...{ [id]: value } });
      }
    }
  };

  const handleChangeImg = () => {
    imgRef.current.click();
  };

  const handleDate = () => {
    dateRef.current.handleFocus();
  };

  useEffect(() => {
    if (!data) {
      axios
        .get(`${process.env.REACT_APP_URL_API}/v1/movies/${id}`)
        .then((result) => {
          if (result.data.status) {
            let data = result.data.data[0];
            data.casts = JSON.parse(data.casts).join(", ");
            setData(data);
          }
        })
        .catch(() => {
          history.push("/movies");
        });
      axios
        .get(`${process.env.REACT_APP_URL_API}/v1/cinemas`)
        .then((result) => {
          if (result.data.status) {
            setCinema(result.data.data);
          }
        })
        .catch(() => {
          Swal.fire("CINEMA API ERROR", "Please Contact BackEnd Developer", "error");
        });
    }
    // eslint-disable-next-line
  }, [data]);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempData = data;
    tempData.casts = JSON.stringify(tempData.casts.split(", "));
    // eslint-disable-next-line
    Object.keys(tempData).map((keys) => {
      if (keys !== "image") {
        form.append(keys, data[keys]);
      } else {
        if (profileTemp) {
          form.append("image", profileTemp, profileTemp.name);
        }
      }
    });
    axios
      .put(`${process.env.REACT_APP_URL_API}/v1/movies/${id}`, form, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
        },
      })
      .then((result) => {
        if (result.data.status) {
          Swal.fire("SUCCESS", result.data.message, "success");
          setData(null);
        } else {
          Swal.fire("HMMMMM...!", result.data.message, "warning");
        }
      })
      .catch((err) => {
        Swal.fire("ERROR!", err, "error");
      });
    if (dataPlaylist && listShowTime.length > 0) {
      listShowTime.map(async (item) => {
        const date = new Date(item);
        const data = {
          movie_id: dataPlaylist.movie_id,
          cinema_id: dataPlaylist.cinema_id,
          playing_time: date,
          price: 10,
        };
        await axios
          .post(`${process.env.REACT_APP_URL_API}/v1/cinemas/playlist`, data, {
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
            },
          })
          .then((result) => {
            if (result.data.status) {
              Swal.fire("YEAY!", "Success Input", "success");
            } else {
              Swal.fire("HMMM", result.data.message, "warning");
            }
          })
          .catch((err) => {
            console.log("here");
            console.log(err.message);
            Swal.fire("UGH!", err.response.message, "error");
          });
      });
    }
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

  const handleAddPlaytime = () => {
    if (listShowTime.length > 0 && listShowTime.includes(showTime.toString())) {
      return null;
    } else {
      setListsShowTime([...listShowTime, showTime.toString()]);
    }
  };

  return (
    <div className="showInAnimation">
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
                      <div className="wraper-image w-100 h-100 border-gray border-rounded display-flex flex-direction-col flex-content-center is-vertically-centered padding-1 position-relative">
                        <input
                          type="file"
                          name=""
                          id="image"
                          onChange={handleChange}
                          ref={imgRef}
                          hidden
                        />
                        <img
                          className="imgMovie"
                          src={data.image}
                          alt="movie"
                          onClick={handleChangeImg}
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Click To Change Image Movie"
                        />
                        <div class="middle" onClick={handleChangeImg}>
                          <div class="text">Click To Change</div>
                        </div>
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
                            onChange={(date) => {
                              setStartDate(date);
                              setData({ ...data, release_date: moment(date).toISOString() });
                            }}
                            id="release_date"
                            dateFormat={"dd/mm/yyyy"}
                            className="input-form datepicker background-gray no-outline right-auto z-index-2 hover-cursor-pointer"
                            value={changeDates(data.release_date)}
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
                              id="duration_hours"
                              value={data.duration_hours}
                              onChange={handleChange}
                            />
                            <input
                              className="input-form duration"
                              type="number"
                              name="minutes"
                              id="duration_minutes"
                              value={data.duration_minutes}
                              onChange={handleChange}
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
                        value={data.casts}
                        onChange={handleChange}
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
                        style={{ height: "10rem" }}
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
                        id="cinema"
                        onChange={handleClickCinema}
                      >
                        <option value="default" disabled>
                          Select Locations
                        </option>
                        {cinema.length > 0 &&
                          cinema.map((item, i) => {
                            return (
                              <option value={item.id} key={i}>
                                {item.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                  <div className="row row-cols-3 px-3 py-2">
                    {cinema.length > 0 &&
                      cinema.map((item, i) => {
                        return (
                          <div
                            className={`col py-3 ${
                              dataPlaylist &&
                              dataPlaylist.cinema_id.toString() === item.id.toString()
                                ? "box-shadow"
                                : ""
                            }`}
                            onClick={handleClickCinema}
                          >
                            <img
                              src={item.logo}
                              alt={item.id}
                              width="100px"
                              height="50px"
                              key={i}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div>
                <h5 className="my-3">Showtimes</h5>
                <div className="bg-white border-rounded2">
                  <div className="py-4 pe-5 ps-4">
                    <div className="d-flex position-relative align-items-center bg-grey border-rounded2">
                      <FontAwesomeIcon className="position-absolute ms-2" icon={faCalendarAlt} />
                      <select
                        className="form-select no-border no-outline bg-grey ps-4"
                        aria-labelledby="Default select example"
                        defaultValue="0"
                        onClick={handleDate}
                      >
                        <option value="0" selected>
                          {showTime.toString().split(" GMT")[0]}
                        </option>
                      </select>
                    </div>
                    <DatePicker
                      selected={showTime}
                      onChange={(date) => setShowTime(date)}
                      id="show_time"
                      showTimeSelect
                      excludeTimes={[
                        setHours(setMinutes(new Date(), 0), 17),
                        setHours(setMinutes(new Date(), 30), 18),
                        setHours(setMinutes(new Date(), 30), 19),
                        setHours(setMinutes(new Date(), 30), 17),
                      ]}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      ref={dateRef}
                    />
                    <div className="row mx-1">
                      <button
                        className="col-auto btn-submit-transparent w-auto h-auto px-4 fs-2 mt-2"
                        style={{ lineHeight: "2rem", borderRadius: "5px", marginRight: "10px" }}
                        onClick={handleAddPlaytime}
                      >
                        +
                      </button>
                      {listShowTime.length > 0 ? (
                        listShowTime.map((item, i) => {
                          return (
                            <span
                              className="col-auto pt-3"
                              key={i}
                              style={{ color: "#4E4B66", fontFamily: "Mulish", fontWeight: "600" }}
                            >
                              {cvTime(item.split(" GMT")[0].split(" ")[4])}
                            </span>
                          );
                        })
                      ) : (
                        <></>
                      )}
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
    </div>
  );
}
