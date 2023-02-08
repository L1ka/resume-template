import React from "react";
import { Link } from "react-router-dom";
import "../scss/_welcome.scss";

const Welcome = () => {
  return (
    <div className="main-container">
      <div className="main-container__header">
        <div className="main-container__header--logo"></div>
      </div>
      <div className="main-container__logo"></div>
      <Link to="/pInfo" className="main-container__btn">
        ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
      </Link>
    </div>
  );
};

export default Welcome;
