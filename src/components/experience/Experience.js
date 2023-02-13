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

        if (name === "position" || name === "employer") {
          if (e.target.value.length >= 2) {
            errorRemove(name);
            return;
          } else {
            errorSet(name);
            return;
          }
        }

        if (
          name === "start_date" ||
          name === "due_date" ||
          name === "description"
        ) {
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

        if (name === "position" || name === "employer") {
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

        if (
          name === "start_date" ||
          name === "due_date" ||
          name === "description"
        ) {
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
      errors.push({});
      errors[0].position = true;
      errors[0].employer = true;
      errors[0].start_date = true;
      errors[0].due_date = true;
      errors[0].description = true;

      setErrors([...errors]);
      return;
    }

    state.forEach((el, id) => {
      if (Object.keys(state[id]).length !== 0) {
        if (!el.position) {
          errors[id].position = true;
        }
        if (!el.employer) {
          errors[id].employer = true;
        }
        if (!el.start_date) {
          errors[id].start_date = true;
        }
        if (!el.due_date) {
          errors[id].due_date = true;
        }
        if (!el.description) {
          errors[id].description = true;
        }
      }
      setErrors([...errors]);
    });

    const test = state.map((el, id) => {
      if (
        !errors[id].position &&
        !errors[id].employer &&
        !errors[id].start_date &&
        !errors[id].due_date &&
        !errors[id].description &&
        state[0].position &&
        state[0].employer &&
        state[0].start_date &&
        state[0].due_date &&
        state[0].description
      ) {
        return true;
      } else if (
        !el.position &&
        !el.employer &&
        !el.start_date &&
        !el.due_date &&
        !el.description &&
        id !== 0
      ) {
        delete errors[id].position;
        delete errors[id].employer;
        delete errors[id].start_date;
        delete errors[id].due_date;
        delete errors[id].description;
        setErrors([...errors]);
        return true;
      } else {
        return false;
      }
    });
    if (test.every((el) => el === true)) return navigate("/education");
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    submitValidation();
  };

  const refreshValues = () => {
    window.localStorage.removeItem("input");
    window.localStorage.removeItem("error");
    window.localStorage.removeItem("education-error");
    window.localStorage.removeItem("education-input");
    window.localStorage.removeItem("education-form");
    window.localStorage.removeItem("input-work");
    window.localStorage.removeItem("error-work");
    window.localStorage.removeItem("add-form");
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
        {state.map((el, i) => {
          return <ExperienceResume data={el} key={i} />;
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
