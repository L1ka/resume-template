import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfoRight from "../personal-info/PersonalInfoRight";
import ExperienceLeft from "./ExperienceLeft";
import ExperienceResume from "./ExperienceResume";
import "../../scss/_work.scss";

//localStorage.clear();

const checkVal = !JSON.parse(localStorage.getItem("input-work"))
  ? []
  : JSON.parse(localStorage.getItem("input-work"));

const checkError = !JSON.parse(localStorage.getItem("error-work"))
  ? []
  : JSON.parse(localStorage.getItem("error-work"));

const Experience = () => {
  const [state, setstate] = useState(checkVal);
  const [errors, setErrors] = useState(checkError);

  const personalState = JSON.parse(localStorage.getItem("input"));

  useEffect(() => {
    console.log("changed", state);
    localStorage.setItem("input-work", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    localStorage.setItem("error-work", JSON.stringify(errors));
  }, [errors]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (!state[index]) state.push({});
    state.map((el, i) => {
      if (i === index) {
        state[index][name] = value;
        setstate([...state]);
        console.log(state, i, index, "equal");
      }
    });

    validation(e, index);
  };

  const validation = function (e, index) {
    const name = e.target.name;
    if (!errors[index]) errors.push({});

    errors.forEach((el, i) => {
      if (index === 0) {
        const errorRemove = (name) => {
          errors[index][name] = false;
          setErrors([...errors]);
        };
        const errorSet = (name) => {
          errors[index][name] = true;
          setErrors([...errors]);
        };

        if (name === "position" || name === "company") {
          if (e.target.value.length >= 2) {
            errorRemove(name);
            return;
          } else {
            errorSet(name);
            return;
          }
        }

        if (name === "startDate" || name === "endDate" || name === "textarea") {
          if (e.target.value) {
            errorRemove(name);
            return;
          } else {
            errorSet(name);
            return;
          }
        }
      }

      if (i !== 0 && i === index) {
        const errorRemove = (name) => {
          errors[index][name] = false;
          setErrors([...errors]);
        };
        const errorSet = (name) => {
          errors[index][name] = true;
          setErrors([...errors]);
        };

        if (name === "position" || name === "company") {
          if (e.target.value.length >= 2) {
            errorRemove(name);
            return;
          } else if (e.target.value.length === 0) {
            delete errors[index][name];
            return;
          } else {
            errorSet(name);
            return;
          }
        }

        if (name === "startDate" || name === "endDate" || name === "textarea") {
          if (e.target.value) {
            errorRemove(name);
            return;
          } else if (e.target.value.length === 0) {
            delete errors[index][name];
            return;
          } else {
            errorSet(name);
            return;
          }
        }
      }
    });
  };

  const submitValidation = () => {
    if (!state[0] || Object.keys(state[0]).length === 0) {
      console.log("yes");
      errors.push({});
      errors[0].position = true;
      errors[0].company = true;
      errors[0].startDate = true;
      errors[0].endDate = true;
      errors[0].textarea = true;

      setErrors([...errors]);
      return;
    }

    state.forEach((el, id) => {
      if (Object.keys(state[id]).length !== 0) {
        if (!el.position) {
          errors[id].position = true;
        }
        if (!el.company) {
          errors[id].company = true;
        }
        if (!el.startDate) {
          errors[id].startDate = true;
        }
        if (!el.endDate) {
          errors[id].endDate = true;
        }
        if (!el.textarea) {
          errors[id].textarea = true;
        }
      }
      setErrors([...errors]);
    });

    const test = state.map((el, id) => {
      if (
        !errors[id].position &&
        !errors[id].company &&
        !errors[id].startDate &&
        !errors[id].endDate &&
        !errors[id].textarea &&
        state[0].position &&
        state[0].company &&
        state[0].startDate &&
        state[0].endDate &&
        state[0].textarea
      ) {
        return true;
      } else if (
        !el.position &&
        !el.company &&
        !el.startDate &&
        !el.endDate &&
        !el.textarea &&
        id !== 0
      ) {
        delete errors[id].position;
        delete errors[id].company;
        delete errors[id].startDate;
        delete errors[id].endDate;
        delete errors[id].textarea;
        setErrors([...errors]);
        return true;
      } else {
        return false;
      }
    });
    if (test.every((el) => el === true)) return console.log("you can leave");
    console.log(test);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    submitValidation();
  };

  const refreshValues = () => {
    window.localStorage.clear();
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/pInfo");
  };

  let index;

  return (
    <div className="work-container-main">
      <ExperienceLeft
        inputData={state}
        errorData={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        refreshValues={refreshValues}
        index={index}
        goBack={goBack}
      />
      <div className="resume-container">
        <PersonalInfoRight data={personalState} />
        {state.map((el) => {
          return <ExperienceResume data={el} />;
        })}
        <img
          className="resume-container__logo"
          src={require("../../images/LOGO-bottom.png")}
        />
      </div>
    </div>
  );
};

export default Experience;
