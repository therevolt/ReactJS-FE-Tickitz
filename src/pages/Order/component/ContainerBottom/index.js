import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import moment from "moment";
import axios from "axios";
import SeatMobile from "../SeatMobile";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { cvTime } from "../../../../helper/convertTime";

const ContainerBottom = (props) => {
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
  const time = cvTime(query.get("time"));
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
    <div className="lg-display-none background-grey">
      <SeatMobile changeSeat={setSeat} />
      <div className="btn-checkout display-flex is-vertically-centered margin-y-2">
        <div>
          <input
            className="btn-submit-solid border-rounded2 font-size-6 btn-order"
            type="submit"
            value="Checkout now"
            onClick={handleCheckout}
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerBottom;
