import axios from "axios";
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import Swal from "sweetalert2";

const Verify = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const token = query.get("token");
  const history = useHistory();
  useEffect(() => {
    const getData = axios.get(`${process.env.REACT_APP_URL_API}/v1/users/verify?token=${token}`);
    getData
      .then(() => {
        Swal.fire("YEAY!", "SUCCESS VERIFY YOUR ACCOUNT!", "success");
        history.push("/signin");
      })
      .catch((err) => {
        Swal.fire("OUH!", err.response.data.message, "error");
      });
  }, []);
  return <></>;
};

export default Verify;
