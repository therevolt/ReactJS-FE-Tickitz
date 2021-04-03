import React, { useEffect, useState } from "react";
import Header from "../../components/module/Header";
import Footer from "../../components/module/Footer";
import "../../assets/css/Main.css";
import "./Custom.css";
import ContainerTop from "./component/ContainerTop";
import ContainerSelect from "./component/ContainerSelect";
import ContainerContent from "./component/ContainerContent";
import { useParams } from "react-router";

const Payment = () => {
  const [filter, setFilter] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    if (!filter) {
      window.scrollTo(0, 0);
    }
  }, [filter]);

  return (
    <>
      <Header />
      <div className="absolute-container">
        <ContainerTop id={id} />
        <ContainerSelect fireState={setFilter} />
        <ContainerContent id={id} fireState={filter} />
        <div className="margin-y-3 sm-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Payment;
