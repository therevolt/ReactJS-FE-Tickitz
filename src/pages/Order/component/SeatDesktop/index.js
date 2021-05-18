import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.css";

const SeatDesktop = (props) => {
  const [selectedSeat, setSelectedSeat] = useState([]);
  const rows = ["A", "B", "C", "D", "E", "F", "G", ""];
  const [ordered, setOrdered] = useState([]);
  const { order } = useSelector((state) => state.order);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/v1/order?playlist_id=${order.playlist_id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
        },
      })
      .then((result) => {
        if (result.data.status) {
          setOrdered(
            result.data.data.map((item) => {
              return `${item.seat_row}${item.seat_col}`;
            })
          );
        }
      })
      .catch((err) => {
        Swal.fire("Error!", err.response.data.message, "error");
        localStorage.removeItem("user");
        dispatch({ type: "LOGIN_USER", payload: "" });
        history.push("/signin");
        window.scrollTo(0, 0);
      });
  }, []);

  const checkSeatStatus = (val) => {
    if (checkIsChecked(val)) {
      return "seat selected";
    } else {
      if (checkIsActive(val)) {
        return "seat sold";
      } else {
        return "seat";
      }
    }
  };

  const checkIsActive = (val) => {
    if (ordered.includes(val)) {
      return true;
    }
    return false;
  };

  const checkIsChecked = (val) => {
    if (selectedSeat.includes(val)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSelectSeat = (val) => {
    if (selectedSeat.includes(val)) {
      var index = selectedSeat.indexOf(val);
      if (index !== -1) {
        selectedSeat.splice(index, 1);
      }
    } else {
      selectedSeat.push(val);
    }
    setSelectedSeat([...selectedSeat]);
    props.changeSeat(selectedSeat);
  };

  const SeatComp = ({ isActive, val }) => {
    return (
      <button
        disabled={isActive}
        onClick={() => {
          handleSelectSeat(val);
        }}
        className={checkSeatStatus(val)}
      ></button>
    );
  };

  const RenderSeat = ({ start, end }) => {
    let result = [];
    rows.forEach((el, idx) => {
      let seat = [];
      for (let i = start; i <= end; i++) {
        if (el !== "") {
          seat.push(<SeatComp key={el + i} isActive={checkIsActive(el + i)} val={el + i} />);
        } else {
          seat.push(
            <div className="seat-number" key={`${idx}${Math.floor(Math.random() * 10000)}`}>
              {i}
            </div>
          );
        }
      }
      result.push(
        <div className="row" key={`${idx}${Math.floor(Math.random() * 10000)}`}>
          <div className="col-md-12 seat-col">
            <div className="seat-number">{start === 1 ? el : ""}</div>
            {seat}
          </div>
        </div>
      );
    });
    return result;
  };

  return (
    <div className="card seat-wrapper" style={{ width: "95%" }}>
      <div className="card-body">
        <h6 className="text-center ml-5">Screen</h6>
        <div className="divider my-3"></div>
        <div className="row mb-4">
          <div className="col-md-6">
            <RenderSeat start={1} end={7} />
          </div>
          <div className="col-md-6">
            <RenderSeat start={8} end={14} />
          </div>
        </div>

        <h5>Seating Key</h5>
        <div className="seating-key">
          <div className="seating-item">
            <div className="seat"></div>
            <span>Available</span>
          </div>
          <div className="seating-item">
            <div className="seat selected"></div>
            <span>Selected</span>
          </div>
          <div className="seating-item">
            <div className="seat love"></div>
            <span>Love Nest</span>
          </div>
          <div className="seating-item">
            <div className="seat sold"></div>
            <span>Sold</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatDesktop;
