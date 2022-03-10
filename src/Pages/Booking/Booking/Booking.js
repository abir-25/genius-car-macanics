import React from "react";
import { useParams } from "react-router-dom";
const Booking = () => {
  const { serviceId } = useParams();
  return <div className="mt-5 pt-5">This is Booking: {serviceId}</div>;
};

export default Booking;
