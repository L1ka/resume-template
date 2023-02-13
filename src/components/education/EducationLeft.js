import React, { useState, useEffect } from "react";
import EducationForm from "./EducationForm";
import Header from "../shared/Header";
import { Link } from "react-router-dom";
import "../../scss/_work.scss";

const checkForm = !JSON.parse(localStorage.getItem("aducation-form"))
  ? [0]
  : JSON.parse(localStorage.getItem("aducation-form"));

const EducationLeft = ({
  refreshValues,
  handleSubmit,
  inputData,
  handleChange,
  errorData,
  goBack,
  responseData,
}) => {
  const [render, setRender] = useState(checkForm);

  useEffect(() => {
    localStorage.setItem("aducation-form", JSON.stringify(render));
  }, [render]);

  const addForm = () => {
    setRender([...render, render[render.length - 1] + 1]);
  };

  return (
    <div className="work-container">
      <Header title="ᲒᲐᲜᲐᲗᲚᲔᲑᲐ" page="3/3" refreshValues={refreshValues} />
      {render.map((_, i) => {
        return (
          <EducationForm
            index={i}
            inputData={inputData}
            handleChange={handleChange}
            errorData={errorData}
            key={i}
          />
        );
      })}
      <button className="work-container__add" onClick={addForm}>
        სხვა სასწავლებლის დამატება
      </button>

      <div className="work-container__two-btn">
        <button className="work-container__two-btn--prev" onClick={goBack}>
          ᲣᲙᲐᲜ
        </button>
        <Link
          to="/resume"
          // state={{ data: responseData }}
          className="work-container__two-btn--next"
          onClick={handleSubmit}
        >
          ᲓᲐᲡᲠᲣᲚᲔᲑᲐ
        </Link>
      </div>
    </div>
  );
};

export default EducationLeft;
