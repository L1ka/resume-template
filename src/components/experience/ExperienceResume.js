import React from "react";
import "../../scss/_workResume.scss";

const ExperienceResume = ({ data }) => {
  if (
    !data?.position &&
    !data?.company &&
    !data?.startDate &&
    !data?.endDate &&
    !data?.textarea
  )
    return;
  const showLabel = data ? "show" : "";
  return (
    <div className="work-resume-container">
      <hr className="work-resume-container--line"></hr>
      <p className={`work-resume-container__textarea--label ${showLabel}`}>
        ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ
      </p>
      <div className="work-resume-container__experience">
        <p>{data.position}</p>
        <p>{data.company}</p>
      </div>
      <div className="work-resume-container__date">
        <p>{data.startDate}</p>
        <p>{data.endDate}</p>
      </div>
      <div className="work-resume-container__textarea">
        <p>{data.textarea}</p>
      </div>
    </div>
  );
};

export default ExperienceResume;
