import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const ContainerSelect = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="display-flex padding-x-3 is-vertically-centered flex-content-center flex-direction-col margin-bottom-5">
      <h4 className="font-size-4 margin-bottom-2 text-title sm-text-center">
        Showtimes and Tickets
      </h4>
      <div className="display-flex flex-direction-row sm-flex-direction-col">
        <div className="display-flex margin-right-2 sm-margin-right-0 sm-margin-bottom-1">
          <div
            className="warp-date background-gray border-rounded display-flex flex-direction-row is-vertically-centered padding-x-2 padding-y-1 position-relative"
            style={{ width: "200px" }}
          >
            <div className="display-flex position-absolute">
              <div className="margin-right-05">
                <img src="/assets/images/calendar (1) 1.png" alt="calendar" />
              </div>
              <div className="display-flex" style={{ width: "150px" }}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat={"dd/mm/yy"}
                  className="input-date datepicker background-gray no-border no-outline right-auto z-index-2 hover-cursor-pointer"
                />
                <img
                  className="position-absolute z-index--1 right-auto hover-cursor-pointer"
                  src="/assets/images/ic_round-navigate-next.png"
                  alt="calendar"
                  style={{ top: "5px", width: "20px", height: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="display-flex margin-left-2 sm-margin-left-0">
          <div className="background-gray border-rounded display-flex flex-direction-row is-vertically-centered padding-x-2 padding-y-1">
            <div className="margin-right-05">
              <img src="/assets/images/Vector.png" alt="location" />
            </div>
            <select
              className="no-outline no-border background-gray padding-x-1"
              name="location"
              id="loc"
              style={{ color: "#4e4b66" }}
            >
              <option value="pwkt">Purwokerto</option>
              <option value="jkt">Jakarta</option>
              <option value="bdg">Bandung</option>
              <option value="tng">Tangerang</option>
              <option value="smi">Sukabumi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerSelect;
