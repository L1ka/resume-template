import React from "react";
import Input from "../shared/Input";
import Textarea from "../shared/Textarea";
import DropDown from "./DropDown";
import "../../scss/_work.scss";
//localStorage.clear();
const EducationForm = ({ inputData, handleChange, errorData, index }) => {
  return (
    <div className="work-container__form">
      <Input
        value={inputData[index]?.institute}
        name="institute"
        handleChange={handleChange}
        placeholder="სასწავლებელი"
        label="სასწავლებელი"
        hint="მინიმუმ 2 სიმბოლო"
        width="798px"
        error={errorData[index]?.institute}
        type="text"
        index={index}
      />

      <div className="work-container__form--two-input">
        <DropDown
          error={errorData[index]?.degree}
          handleChange={handleChange}
          index={index}
          name="degree"
          value={
            inputData[index]?.degree
              ? inputData[index]?.degree
              : "აირჩიეთ ხარისხი"
          }
        />

        <Input
          value={inputData[index]?.due_date}
          name="due_date"
          handleChange={handleChange}
          placeholder=""
          label="დამთავრების რიცხვი"
          hint=""
          width="371px"
          error={errorData[index]?.due_date}
          type="date"
          index={index}
        />
      </div>
      <Textarea
        value={inputData[index]?.description}
        name="description"
        handleChange={handleChange}
        placeholder="განათლების აღწერა"
        label="აღწერა"
        height="179px"
        error={errorData[index]?.description}
        index={index}
      />
      <hr className="work-container__form--line"></hr>
    </div>
  );
};

export default EducationForm;
