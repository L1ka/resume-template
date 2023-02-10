import React from "react";
import { Link } from "react-router-dom";
import "../../scss/_header.scss";

const Header = ({ title, page, refreshValues }) => {
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
