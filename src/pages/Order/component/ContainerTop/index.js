import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useHistory } from "react-router";
import moment from "moment";
import axios from "axios";
import SeatDesktop from "../SeatDesktop";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";

const ContainerTop = (props) => {
  const [dataCinema, setDataCinema] = useState(null);
  const [seat, setSeat] = useState(null);
  const dispatch = useDispatch();
  const { order } = useSelector((state) => state.order);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  let date = moment(new Date(query.get("time")));
  let cinema = query.get("cinema");
  const day = date.format("dddd");
  const dates = date.format("DD MMMM YYYY");
  const time = date.format("LT");
  const history = useHistory();

  // eslint-disable-next-line
  useEffect(async () => {
    const getData = await axios.get(`${process.env.REACT_APP_URL_API}/v1/cinemas/${cinema}`);
    setDataCinema(getData.data.data[0]);
    // eslint-disable-next-line
  }, []);

  const handleCheckout = () => {
    if (!seat) {
      Swal.fire("HEY!", "Select a Seat First", "warning");
    } else {
      dispatch({
        type: "SET_ORDER",
        payload: {
          cinema_id: order.cinema_id,
          cinema: dataCinema.name,
          movie: props.title,
          playlist_id: order.playlist_id,
          playing_time: `${day}, ${dates} ${time}`,
          seat_choosed: seat,
        },
      });
      history.push(`/payment/${props.id}`);
    }
  };

  return (
    <div className="background-grey box-shadow sm-display-none">
      <div className="display-flex margin-x-5 sm-flex-direction-col">
        <div className="main-panel display-flex flex-direction-col margin-top-3">
          <div>
            <p className="font-size-4 text-title text-bold sm-display-none">Movie Selected</p>
          </div>
          <div className="background-white border-rounded2 w-95 sm-display-none">
            <div
              className="margin-x-2 display-flex flex-content-between is-vertically-centered flex-direction-row"
              style={{ padding: "30px 0px" }}
            >
              <div>
                <p className="font-size-4 text-title text-bold">{props.title}</p>
              </div>
              <div>
                <Link to="/">
                  <input
                    className="btn-submit-grey text-bold font-size-6 hover-cursor-pointer"
                    type="submit"
                    value="Change movie"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="font-size-4 text-title text-bold margin-y-2">Choose Your Seat</div>
          <div>
            <SeatDesktop changeSeat={setSeat} />
          </div>
          <div className="display-flex flex-content-between margin-y-2 w-95">
            <Link to="/movies">
              <input
                className="btn-submit-transparent border-rounded2 text-bold hover-cursor-pointer"
                type="submit"
                value="Change your movie"
              />
            </Link>
            <Link onClick={handleCheckout}>
              <input
                className="btn-submit-solid border-rounded2 text-bold hover-cursor-pointer"
                type="submit"
                value="Checkout now"
              />
            </Link>
          </div>
        </div>
        <div className="side-panel display-flex flex-direction-col margin-top-3 sm-display-none">
          <div>
            <p className="font-size-4 text-title text-bold w-40">Order Info</p>
          </div>
          {dataCinema && (
            <div className="detail-order display-flex flex-direction-col background-white border-rounded2">
              <img className="img-order" src={dataCinema.logo} alt="" />
              <p className="cinema-text">{dataCinema.name}</p>
              <div className="table-detail display-flex flex-direction-col margin-top-3">
                <div className="display-flex flex-direction-row flex-content-between margin-x-2">
                  <p>Movie selected</p>
                  <p className="text-bold">{props.title}</p>
                </div>
                <div className="display-flex flex-direction-row flex-content-between margin-x-2">
                  <p>{`${day}, ${dates}`}</p>
                  <p className="text-bold">{time}</p>
                </div>
                <div className="display-flex flex-direction-row flex-content-between margin-x-2">
                  <p>One ticket price</p>
                  <p className="text-bold">$10</p>
                </div>
                <div className="display-flex flex-direction-row flex-content-between margin-x-2">
                  <p>Seat choosed</p>
                  {seat && <p className="text-bold">{seat.join(", ")}</p>}
                </div>
              </div>
              <hr size="4" />
              <div className="display-flex flex-direction-row flex-content-between margin-x-2">
                <p className="text-bold font-size-5">Total Payment</p>
                {seat && <p className="text-bold font-size-5 text-primary">${seat.length * 10}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContainerTop;
