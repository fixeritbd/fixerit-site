import React, { useEffect } from "react";
import "./Service.css";
import axios from "axios";

const Service = () => {
  useEffect(() => {
    let serviceDeatils = async () => {
      let { data } = await axios.get("http://localhost:8000/service");
      console.log(data);
    };
    serviceDeatils();
  }, []);
  return <div>Service</div>;
};

export default Service;
