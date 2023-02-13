import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfoRight from "../personal-info/PersonalInfoRight";
import ExperienceResume from "../experience/ExperienceResume";
import "../../scss/_work.scss";
import EducationLeft from "./EducationLeft";
import EducationResume from "./EducationResume";
import axios from "axios";
//localStorage.clear();

const checkVal = !JSON.parse(localStorage.getItem("education-input"))
  ? []
  : JSON.parse(localStorage.getItem("education-input"));

const checkError = !JSON.parse(localStorage.getItem("education-error"))
  ? []
  : JSON.parse(localStorage.getItem("education-error"));

const Education = () => {
  const [state, setstate] = useState(checkVal);
  const [errors, setErrors] = useState(checkError);

  const personalState = JSON.parse(localStorage.getItem("input"));
  const experienceState = JSON.parse(localStorage.getItem("input-work"));
  // console.log(fd);
  useEffect(() => {
    localStorage.setItem("education-input", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    localStorage.setItem("education-error", JSON.stringify(errors));
  }, [errors]);

  const handleChange = (e, index) => {
    let name, value, degree_id;
    if (!e.target) {
      name = "degree";
      value = e.label;
      degree_id = e.value;
    } else {
      name = e.target.name;
      value = e.target.value;
    }

    if (!state[index]) state.push({});
    state.map((el, i) => {
      if (i === index) {
        state[index][name] = value;
        if (degree_id) state[index].degree_id = degree_id;
        setstate([...state]);
      }
    });

    validation(e, index);
  };

  const validation = function (e, index) {
    let name, value;
    if (!e.target) {
      name = "degree";
      value = e.label;
    } else {
      name = e.target.name;
      value = e.target.value;
    }

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

        if (name === "institute") {
          if (value.length >= 2) {
            errorRemove(name);
            return;
          } else {
            errorSet(name);
            return;
          }
        }

        if (
          name === "degree" ||
          name === "due_date" ||
          name === "description"
        ) {
          if (value) {
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

        if (name === "institute") {
          if (value.length >= 2) {
            errorRemove(name);
            return;
          } else if (value.length === 0) {
            delete errors[index][name];
            return;
          } else {
            errorSet(name);
            return;
          }
        }

        if (
          name === "degree" ||
          name === "due_date" ||
          name === "description"
        ) {
          if (value) {
            errorRemove(name);
            return;
          } else if (value.length === 0) {
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
      //  console.log("yes");
      errors.push({});
      errors[0].institute = true;
      errors[0].degree = true;
      errors[0].due_date = true;
      errors[0].description = true;

      setErrors([...errors]);
      return;
    }

    state.forEach((el, id) => {
      if (Object.keys(state[id]).length !== 0) {
        if (!el.institute) {
          errors[id].institute = true;
        }
        if (!el.degree) {
          errors[id].degree = true;
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
        !errors[id].institute &&
        !errors[id].degree &&
        !errors[id].due_date &&
        !errors[id].description &&
        state[0].institute &&
        state[0].degree &&
        state[0].due_date &&
        state[0].description
      ) {
        return true;
      } else if (
        !el.institute &&
        !el.degree &&
        !el.due_date &&
        !el.description &&
        id !== 0
      ) {
        delete errors[id].institute;
        delete errors[id].degree;
        delete errors[id].due_date;
        delete errors[id].description;
        setErrors([...errors]);
        return true;
      } else {
        return false;
      }
    });
    if (test.every((el) => el === true)) return true;
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    submitValidation();
    if (submitValidation()) {
      personalState.phone_number = personalState.phone_number.replaceAll(
        " ",
        ""
      );

      experienceState.forEach((el) => {
        el.due_date = el.due_date.replaceAll("-", "/");
      });

      state.forEach((el) => {
        el.due_date = el.due_date.replaceAll("-", "/");
      });

      function dataUrlToBlob() {
        const dataUrl = personalState.image;
        const parts = dataUrl.split(";base64,");
        const contentType = parts[0].split(":")[1];
        const byteCharacters = atob(parts[1]);
        const byteArrays = [];
        for (let i = 0; i < byteCharacters.length; i++) {
          byteArrays.push(byteCharacters.charCodeAt(i));
        }
        const byteArray = new Uint8Array(byteArrays);
        return new Blob([byteArray], { type: contentType });
      }

      const form = {
        name: personalState.name,
        surname: personalState.surname,
        email: personalState.email,
        phone_number: personalState.phone_number,
        about_me: personalState.about_me,
        image: dataUrlToBlob(),
      };

      const fd = new FormData();
      Object.keys(form).forEach((key) => fd.append(key, form[key]));

      experienceState.forEach((el, i) => {
        fd.append(`experiences[${i}][position]`, el.position);
        fd.append(`experiences[${i}][employer]`, el.employer);
        fd.append(`experiences[${i}][start_date]`, el.start_date);
        fd.append(`experiences[${i}][due_date]`, el.due_date);
        fd.append(`experiences[${i}][description]`, el.description);
      });

      state.forEach((el, i) => {
        fd.append(`educations[${i}][institute]`, el.institute);
        fd.append(`educations[${i}][degree_id]`, el.degree_id);
        fd.append(`educations[${i}][due_date]`, el.due_date);
        fd.append(`educations[${i}][description]`, el.description);
      });
      axios
        .post("https://resume.redberryinternship.ge/api/cvs", fd, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          navigate("/resume", { state: res.data });
        });
    }
  };

  const refreshValues = () => {
    localStorage.removeItem("input");
    localStorage.removeItem("error");
    localStorage.removeItem("education-error");
    localStorage.removeItem("education-input");
    localStorage.removeItem("education-form");
    localStorage.removeItem("input-work");
    localStorage.removeItem("error-work");
    localStorage.removeItem("add-form");
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/work");
  };

  let index;

  return (
    <div className="work-container-main">
      <EducationLeft
        inputData={state}
        errorData={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        refreshValues={refreshValues}
        index={index}
        goBack={goBack}
        // responseData={res?.data}
      />
      <div className="resume-container">
        <PersonalInfoRight data={personalState} />
        {experienceState.map((el, i) => {
          return <ExperienceResume data={el} key={i} />;
        })}
        {state.map((el, i) => {
          return <EducationResume data={el} key={i} />;
        })}
        <img
          className="resume-container__logo"
          src={require("../../images/LOGO-bottom.png")}
        />
      </div>
    </div>
  );
};

export default Education;
