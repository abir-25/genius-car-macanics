import React from "react";
import { Link } from "react-router-dom";

import notfoundImg from "../../images/404.jpg";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notfoundImg} alt="" />
      <Link to="/home">
        <button className="btn btn-success mt-4">Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
