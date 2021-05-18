import React, { useEffect, useState } from "react";
import Header from "../../components/module/Header";
import Footer from "../../components/module/Footer";
import "../../assets/css/Main.css";
import "./Custom.css";
import ContainerTop from "./component/ContainerTop";
import ContainerSelect from "./component/ContainerSelect";
import ContainerContent from "./component/ContainerContent";
import { useParams } from "react-router";
import HelmetTitle from "../../components/base/Helmet";

const Payment = () => {
  const [filter, setFilter] = useState(null);
  const [city, setCity] = useState("");
  let { id } = useParams();

  useEffect(() => {
    if (!filter) {
      window.scrollTo(0, 0);
    }
  }, [filter]);

  return (
    <div className="showInAnimation">
      <Header />
      <HelmetTitle title="Details Movie - Tickitz Web" />
      <div className="absolute-container">
        <ContainerTop id={id} />
        <ContainerSelect fireState={setFilter} fireState2={setCity} />
        <ContainerContent id={id} fireState={filter} fireState2={city} />
        <div className="margin-y-3 sm-container">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Payment;
