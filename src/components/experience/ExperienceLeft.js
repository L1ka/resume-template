import React, { useState, useEffect } from "react";
import ExperienceForm from "./ExperienceForm";
import Header from "../shared/Header";
import "../../scss/_work.scss";

const checkForm = !JSON.parse(localStorage.getItem("add-form"))
  ? [0]
  : JSON.parse(localStorage.getItem("add-form"));

const ExperienceLeft = ({
  refreshValues,
  handleSubmit,
  inputData,
  handleChange,
  errorData,
  goBack,
}) => {
  const [render, setRender] = useState(checkForm);

  useEffect(() => {
    localStorage.setItem("add-form", JSON.stringify(render));
  }, [render]);

  const addForm = () => {
    setRender([...render, render[render.length - 1] + 1]);
  };

  return (
    <div className="work-container">
      <Header title="ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ" page="2/3" refreshValues={refreshValues} />
      {render.map((el, i) => {
        return (
          <ExperienceForm
            index={i}
            inputData={inputData}
            handleChange={handleChange}
            errorData={errorData}
            key={i}
          />
        );
      })}
      <button className="work-container__add" onClick={addForm}>
        მეტი გამოცდილების დამატება
      </button>

      <div className="work-container__two-btn">
        <button className="work-container__two-btn--prev" onClick={goBack}>
          ᲣᲙᲐᲜ
        </button>

        <button
          className="work-container__two-btn--next"
          onClick={handleSubmit}
        >
          ᲨᲔᲛᲓᲔᲒᲘ
        </button>
      </div>
    </div>
  );
};

export default ExperienceLeft;
