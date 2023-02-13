import React from "react";
import "../../scss/_workResume.scss";

const EducationResume = ({ data }) => {
  if (
    !data?.institute &&
    !data?.degree &&
    !data?.due_date &&
    !data?.description
  )
    return;
  const showLabel = data ? "show" : "";
  return (
    <div className="work-resume-container">
      <hr className="work-resume-container--line"></hr>
      <p className={`work-resume-container__textarea--label ${showLabel}`}>
        ᲒᲐᲜᲐᲗᲚᲔᲑᲐ
      </p>
      <div className="work-resume-container__experience">
        <p>{data.institute}</p>
        <p>{data.degree}</p>
      </div>
      <div className="work-resume-container__date">
        <p>{data.due_date}</p>
      </div>
      <div className="work-resume-container__textarea">
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default EducationResume;
