import React, { useState, useEffect } from "react";
import FirstForm from "./FirstForm";
import SecndForm from "./SecndForm";
import * as api from "../../api/api";
import useApi from "../../Hooks/useApi";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

function Regsiter() {
  const [steps, setSteps] = useState("1");

  const addService = useApi(api.AddService);
  const navigate = useNavigate();
  useEffect(() => {}, [steps]);
  const [initialValues, setinitialValues] = useState({
    service: "",
    location: "",
    state: "",
    city: "",
    images: [
      "https://media.istockphoto.com/photos/banquet-hall-picture-id498049757?k=20&m=498049757&s=612x612&w=0&h=acRRtBw_RQU-7u_d1WLJWzmc3o0EzgQzCx8AoUNZMAw=",
      "https://media.istockphoto.com/photos/typical-wooden-small-farm-house-in-victorian-style-in-williamstown-picture-id879361282?k=20&m=879361282&s=612x612&w=0&h=T3eMHJR4Ybz9bL4PPP4MX7u6Scg1sNpuSoQDOUCR6Cs=",
    ],
    about_service: "",
    name: "",
    slot: [],
    per_head: "",
  });
  const handleStep = (step) => {
    setSteps(step);
  };
  const openNotification = () => {
    notification.open({
      message: "Service Added",
      description: "Service Added SuccessFully",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const data = await addService.request(values);
      openNotification();
      navigate("/home");
      console.log("-------->", data);
    } catch (_) {}
  };

  switch (steps) {
    case "1":
      return (
        <FirstForm
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          handleStep={handleStep}
        />
      );

    case "2":
      return (
        <SecndForm
          initialValues={initialValues}
          handleSubmit={handleSubmit}
          handleStep={handleStep}
        />
      );
  }
}

export default Regsiter;
