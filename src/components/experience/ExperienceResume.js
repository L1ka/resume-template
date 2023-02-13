import React from "react";
import "../../scss/_workResume.scss";

const ExperienceResume = ({ data }) => {
  if (
    !data?.position &&
    !data?.employer &&
    !data?.start_date &&
    !data?.due_date &&
    !data?.description
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
        <p>{data.employer}</p>
      </div>
      <div className="work-resume-container__date">
        <p>{data.start_date}</p>
        <p>{data.due_date}</p>
      </div>
      <div className="work-resume-container__textarea">
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default ExperienceResume;
