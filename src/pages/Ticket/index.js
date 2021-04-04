import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import { useReactToPrint } from "react-to-print";
import Footer from "../../components/module/Footer";
import Header from "../../components/module/Header";
import { cvTime } from "../../helper/convertTime";
import { getMonth } from "../../helper/getMonth";
import ComponentToPrint from "./components/ticketPrint";
import "./style.css";
import { exportComponentAsJPEG } from "react-component-export-image";

const ComponentToSave = React.forwardRef((props, ref) => (
  <ComponentToPrint data={props.data} ref={ref} />
));

const Ticket = (props) => {
  const [data, setData] = useState(null);
  const componentRef = useRef();
  const history = useHistory();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    if (!data && props.history) {
      axios
        .post(`${process.env.REACT_APP_URL_API}/v1/tickets/details`, props.history.location.state, {
          headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
          },
        })
        .then((result) => {
          if (result.data.status) {
            setData({
              movie: result.data.data[0].name,
              date: `${new Date(result.data.data[0].playing_time).getDate()} ${getMonth(
                new Date(result.data.data[0].playing_time).getMonth()
              )}`,
              time: cvTime(
                `${new Date(result.data.data[0].playing_time).getHours()}:${new Date(
                  result.data.data[0].playing_time
                ).getMinutes()}`
              ),
              category: result.data.data[0].category,
              count: result.data.data[0].seat.length,
              seats: result.data.data[0].seat.join(", "),
              price: result.data.data[0].total_price,
            });
          }
        })
        .catch(() => {
          history.push("/");
        });
    } // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <div className="bg-primary px-5 py-5">
        <div className="bg-grey px-5 py-5 mx-5 my-5 border-rounded2">
          <div className="text-header fs-3 fw-bold text-center">Proof of Payment</div>
          {data && <ComponentToPrint data={data} ref={componentRef} />}
          <div className="d-flex justify-content-center">
            <ComponentToSave ref={componentRef} />
            <div
              className="btn-transparent"
              onClick={() =>
                exportComponentAsJPEG(componentRef, {
                  fileName: `[Ticket]${data.movie}/${data.seats}`,
                })
              }
            >
              <div className="d-flex mx-4 mt-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      stroke="#4E4B66"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#4E4B66"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 15V3"
                      stroke="#4E4B66"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <button className="me-2 no-bg no-border ms-3">Download</button>
              </div>
            </div>
            <div className="btn-transparent ms-2" onClick={handlePrint}>
              <div className="d-flex mx-4 mt-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9V2H18V9"
                      stroke="#4E4B66"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18"
                      stroke="#4E4B66"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18 14H6V22H18V14Z"
                      stroke="#4E4B66"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <button className="no-bg no-border">Print</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ticket;
