import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContainerSelect = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const iconCal = useRef(null);

  useEffect(() => {
    props.fireState(startDate); // eslint-disable-next-line
  }, [startDate]);

  const handleClickIcon = () => {
    iconCal.current.setFocus();
  };

  const handleClick = (e) => {
    const { value } = e.target;
    props.fireState2(value);
  };

  return (
    <div className="display-flex padding-x-3 is-vertically-centered flex-content-center flex-direction-col margin-bottom-5">
      <h4 className="font-size-4 margin-bottom-2 text-title sm-text-center">
        Showtimes and Tickets
      </h4>
      <div className="display-flex flex-direction-row sm-flex-direction-col">
        <div className="display-flex margin-right-2 sm-margin-right-0 sm-margin-bottom-1">
          <div
            className="warp-date bg-grey border-rounded display-flex flex-direction-row is-vertically-centered padding-x-2 padding-y-1 position-relative"
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
                  dateFormat={"dd/MM/yy"}
                  className="input-date datepicker bg-transparent no-border no-outline right-auto z-index-2 hover-cursor-pointer"
                  ref={iconCal}
                />
                <img
                  className="position-absolute z-index-2 right-auto hover-cursor-pointer"
                  src="/assets/images/ic_round-navigate-next.png"
                  alt="calendar"
                  style={{ top: "5px", width: "20px", height: "20px" }}
                  onClick={handleClickIcon}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="display-flex margin-left-2 sm-margin-left-0">
          <div className="bg-grey border-rounded display-flex flex-direction-row is-vertically-centered padding-x-2 padding-y-1">
            <div className="margin-right-05">
              <img src="/assets/images/Vector.png" alt="location" />
            </div>
            <select
              className="no-outline no-border bg-transparent padding-x-1"
              name="location"
              id="loc"
              style={{ color: "#4e4b66" }}
              onChange={handleClick}
            >
              <option value="Purwokerto">Purwokerto</option>
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Bandung</option>
              <option value="Tangerang">Tangerang</option>
              <option value="Sukabumi">Sukabumi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerSelect;
