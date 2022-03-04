import React from "react";
import { useParams } from "react-router-dom";
const Booking = () => {
  const { serviceId } = useParams();
  return <div>This is Booking: {serviceId}</div>;
};

export default Booking;
