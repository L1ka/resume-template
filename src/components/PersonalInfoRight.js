import React from "react";
import "../scss/_rightPersonal.scss";

const PersonalInfoRight = ({ data }) => {
  const showEmailIcon = data.email ? "show" : "";
  const showPhoneIcon = data.phone ? "show" : "";
  const showLabel = data.textarea ? "show" : "";
  const showImage = data.image ? "show" : "";

  return (
    <div className="right-personal-container">
      <div>
        <div className="right-personal-container__name">
          <p>{data.firstName}</p>
          <p>{data.lastName || ""}</p>
        </div>
        <p className="right-personal-container__email">
          <img className={showEmailIcon} src={require("../images/email.png")} />
          {data.email || ""}
        </p>
        <p className="right-personal-container__phone">
          <img className={showPhoneIcon} src={require("../images/phone.png")} />
          {data.phone || ""}
        </p>
        <p className={`right-personal-container__textarea--label ${showLabel}`}>
          ჩემ შესახებ
        </p>
        <div className="right-personal-container__textarea">
          <p>{data.textarea || ""}</p>
        </div>
      </div>
      <img
        className={`right-personal-container__image ${showImage}`}
        src={data.image}
      />
      <img
        className="right-personal-container__logo"
        src={require("../images/LOGO-bottom.png")}
      />
    </div>
  );
};

export default PersonalInfoRight;
