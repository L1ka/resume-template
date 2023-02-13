import React, { useState, useEffect } from "react";
import PersonalInfoRight from "../personal-info/PersonalInfoRight";
import ExperienceResume from "../experience/ExperienceResume";
import EducationResume from "../education/EducationResume";
import { Link, useLocation } from "react-router-dom";
import "../../scss/_fullResume.scss";

const checkPopup = !JSON.parse(localStorage.getItem("popup"))
  ? "open"
  : JSON.parse(localStorage.getItem("popup"));

localStorage.clear();

const Resume = () => {
  const location = useLocation();
  const checkVal = !location.state ? {} : location.state;
  const [state, setstate] = useState(checkVal);

  useEffect(() => {
    setstate({
      ...location.state,
      image: "https://resume.redberryinternship.ge/" + location.state.image,
    });
  }, [location]);

  const [isOpen, setIsOpen] = useState(checkPopup);

  useEffect(() => {
    localStorage.setItem("popup", JSON.stringify(isOpen));
  }, [isOpen]);

  const removePopup = () => {
    setIsOpen("close");
  };

  return (
    <div className="resume">
      <Link to="/" className="resume__prev-btn">
        <img src={require("../../images/prev.png")} />
      </Link>

      <div className="resume__full">
        <PersonalInfoRight data={state} />
        {state.experiences.map((el, i) => {
          return <ExperienceResume data={el} key={i} />;
        })}
        {state.educations.map((el, i) => {
          return <EducationResume data={el} key={i} />;
        })}
        <img
          className="resume__full--logo"
          src={require("../../images/LOGO-bottom.png")}
        />
      </div>

      <div className={`resume__popup ${isOpen} `}>
        <img
          className="resume__popup--img"
          src={require("../../images/remove.png")}
          onClick={removePopup}
        />
        <p>რეზიუმე წარმატებით გაიგზავნა 🎉</p>
      </div>
    </div>
  );
};

export default Resume;
