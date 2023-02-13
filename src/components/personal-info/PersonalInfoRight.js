import React from "react";
import "../../scss/_rightPersonal.scss";

const PersonalInfoRight = ({ data }) => {
  const showEmailIcon = data.email ? "show" : "";
  const showPhoneIcon = data.phone_number ? "show" : "";
  const showLabel = data.about_me !== undefined && data.about_me ? "show" : "";
  const showImage = data.image ? "show" : "";

  return (
    <div className="right-personal-container">
      <div>
        <div className="right-personal-container__name">
          <p>{data.name}</p>
          <p>{data.surname || ""}</p>
        </div>
        <p className="right-personal-container__email">
          <img
            className={showEmailIcon}
            src={require("../../images/email.png")}
          />
          {data.email || ""}
        </p>
        <p className="right-personal-container__phone">
          <img
            className={showPhoneIcon}
            src={require("../../images/phone.png")}
          />
          {data.phone_number || ""}
        </p>
        <p className={`right-personal-container__textarea--label ${showLabel}`}>
          ჩემ შესახებ
        </p>

        <div className="right-personal-container__textarea">
          <p>{data.about_me || ""}</p>
        </div>
      </div>
      <img
        className={`right-personal-container__image ${showImage}`}
        src={data.image}
      />
    </div>
  );
};

export default PersonalInfoRight;
