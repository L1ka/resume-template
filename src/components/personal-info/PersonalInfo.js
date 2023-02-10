import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PersonalInfoRight from "./PersonalInfoRight";
import PersonalInfoLeft from "./PersonalInfoLeft";
import "../../scss/_personalinfo.scss";
import "../../scss/_input.scss";

//localStorage.clear();

const checkVal = !JSON.parse(localStorage.getItem("input"))
  ? {}
  : JSON.parse(localStorage.getItem("input"));

const checkError = !JSON.parse(localStorage.getItem("error"))
  ? {}
  : JSON.parse(localStorage.getItem("error"));

const PersonalInfo = () => {
  const [state, setstate] = useState(checkVal);
  const [errors, setErrors] = useState(checkError);

  useEffect(() => {
    localStorage.setItem("input", JSON.stringify(state));
  }, [state]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setstate({
      ...state,
      [name]: value,
    });

    validation(e);
  };

  const uploadImage = async function (e) {
    const file = e.target.files[0];
    const image = await convertBase64(file);

    setstate({
      ...state,
      image: image,
    });

    validation(e);
    localStorage.setItem(
      "input",
      JSON.stringify({
        ...state,
        image: image,
      })
    );
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  useEffect(() => {
    localStorage.setItem("error", JSON.stringify(errors));
  }, [errors]);

  const validation = function (e) {
    const name = e.target.name;
    const georgian = new RegExp(/^[ა-ჰ]+$/);
    const email = new RegExp("([a-z0-9])+@redberry.ge");
    const phone = new RegExp(/^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/);

    const errorRemove = (name) => {
      setErrors({
        ...errors,
        [name]: false,
      });
    };
    const errorSet = (name) => {
      setErrors({
        ...errors,
        [name]: true,
      });
    };

    if (name === "firstName" || name === "lastName") {
      if (e.target.value.length >= 2 && georgian.test(e.target.value)) {
        errorRemove(name);
        return;
      } else {
        errorSet(name);
        return;
      }
    }

    if (name === "email") {
      if (email.test(e.target.value)) {
        errorRemove(name);
        return;
      } else {
        errorSet(name);
        return;
      }
    }

    if (name === "phone") {
      if (phone.test(e.target.value)) {
        errorRemove(name);
        return;
      } else {
        errorSet(name);
        return;
      }
    }
    if (name === "image") {
      errorRemove(name);
      return;
    } else {
      errorSet(name);
      return;
    }
  };

  const submitValidation = () => {
    const errorsObj = {};
    if (!state.firstName || errors.firstName) {
      errorsObj.firstName = true;
    }

    if (!state.lastName || errors.lastName) {
      errorsObj.lastName = true;
    }

    if (!state.email || errors.email) {
      errorsObj.email = true;
    }

    if (!state.phone || errors.phone) {
      errorsObj.phone = true;
    }

    if (!state.image || errors.image) {
      errorsObj.image = true;
    }
    setErrors({
      ...errors,
      ...errorsObj,
    });

    if (
      errors.firstName === false &&
      errors.lastName === false &&
      errors.phone === false &&
      errors.email === false &&
      errors.image === false
    ) {
      navigate("/work");
      return;
    }
  };
  const navigate = useNavigate();
  const handleSubmit = function (e) {
    e.preventDefault();
    submitValidation();
  };

  const refreshValues = () => {
    window.localStorage.clear();
  };

  return (
    <div className="personal-info-container--main">
      <PersonalInfoLeft
        inputData={state}
        errorData={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        uploadImage={uploadImage}
        refreshValues={refreshValues}
      />
      <div className="resume-container">
        <PersonalInfoRight data={state} />
        <img
          className="resume-container__logo"
          src={require("../../images/LOGO-bottom.png")}
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
