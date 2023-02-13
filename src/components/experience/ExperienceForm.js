import React from "react";
import Input from "../shared/Input";
import Textarea from "../shared/Textarea";
import "../../scss/_work.scss";
//localStorage.clear();
const ExperienceForm = ({ inputData, handleChange, errorData, index }) => {
  return (
    <div className="work-container__form">
      <Input
        value={inputData[index]?.position}
        name="position"
        handleChange={handleChange}
        placeholder="დეველოპერი, დიზაინერი, ა.შ."
        label="თანამდებობა"
        hint="მინიმუმ 2 სიმბოლო"
        width="798px"
        error={errorData[index]?.position}
        type="text"
        index={index}
      />

      <Input
        value={inputData[index]?.employer}
        name="employer"
        handleChange={handleChange}
        placeholder="დამსაქმებელი"
        label="დამსაქმებელი"
        hint="მინიმუმ 2 სიმბოლო"
        width="798px"
        error={errorData[index]?.employer}
        type="text"
        index={index}
      />
      <div className="work-container__form--two-input">
        <Input
          value={inputData[index]?.start_date}
          name="start_date"
          handleChange={handleChange}
          placeholder=""
          label="დაწყების რიცხვი"
          hint=""
          width="371px"
          error={errorData[index]?.start_date}
          type="date"
          index={index}
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
        placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
        label="აღწერა"
        height="123px"
        error={errorData[index]?.description}
        index={index}
      />
      <hr className="work-container__form--line"></hr>
    </div>
  );
};

export default ExperienceForm;
