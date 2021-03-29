import React, { useEffect } from "react";
import Header from "../../components/module/Header";
import Footer from "../../components/module/Footer";
import "../../assets/css/Main.css";
import "./Custom.css";
import ContainerTop from "./component/ContainerTop";
import ContainerSelect from "./component/ContainerSelect";
import ContainerContent from "./component/ContainerContent";
import { useParams } from "react-router";

const Payment = () => {
  let { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="absolute-container">
        <ContainerTop id={id} />
        <ContainerSelect />
        <ContainerContent id={id} />
        <div className="margin-y-3 sm-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Payment;
