import React from "react";
import Header from "../../components/module/Header";
import Footer from "../../components/module/Footer";
import "../../assets/css/Main.css";
import "./Custom.css";
import ContainerTop from "./component/ContainerTop";
import ContainerSelect from "./component/ContainerSelect";
import ContainerContent from "./component/ContainerContent";
import ViewMore from "./component/ViewMore";
import { useParams } from "react-router";

const Payment = () => {
  let { id } = useParams();
  return (
    <>
      <Header />
      <div className="absolute-container">
        <ContainerTop id={id} />
        <ContainerSelect />
        <ContainerContent id={id} />
        <ViewMore />
        <div className="margin-y-3 sm-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Payment;
