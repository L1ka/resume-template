import React from "react";
import { Link } from "react-router-dom";
import "../../scss/_header.scss";

const Header = ({ title, page, refreshValues }) => {
  // const refreshValues = () => {
  //   window.localStorage.removeItem("input");
  //   window.localStorage.removeItem("error");
  //   window.localStorage.removeItem("education-error");
  //   window.localStorage.removeItem("education-input");
  //   window.localStorage.removeItem("education-form");
  //   window.localStorage.removeItem("input-work");
  //   window.localStorage.removeItem("error-work");
  //   window.localStorage.removeItem("add-form");
  // };
  return (
    <div className="container">
      <Link to="/" className="container__prev-btn" onClick={refreshValues}>
        <img src={require("../../images/prev.png")} />
      </Link>
      <div className="container__header">
        <p className="container__header--text">{title}</p>
        <p className="container__header--number">{page}</p>
      </div>
    </div>
  );
};

export default Header;
