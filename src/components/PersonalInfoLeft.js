import React from "react";
import Header from "./Header";
import Input from "./Input";
import Textarea from "./Textarea";

const PersonalInfoLeft = ({
  inputData,
  errorData,
  handleChange,
  handleSubmit,
  uploadImage,
  refreshValues,
}) => {
  return (
    <div className="personal-info-container">
      <Header title="ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ" page="1/3" refreshValues={refreshValues} />

      <div className="personal-info-container__two-input">
        <Input
          value={inputData.firstName}
          name="firstName"
          handleChange={handleChange}
          placeholder="სახელი"
          label="სახელი"
          hint="მინიმუმ 2 ასო, ქართული ასოები"
          width="371px"
          error={errorData?.firstName}
        />

        <Input
          value={inputData.lastName}
          name="lastName"
          handleChange={handleChange}
          placeholder="გვარი"
          label="გვარი"
          hint="მინიმუმ 2 ასო, ქართული ასოები"
          width="371px"
          error={errorData?.lastName}
        />
      </div>

      <div className="file-input">
        <label className="file-input__label">პირადი ფოტოს ატვირთვა</label>
        <input
          onChange={uploadImage}
          type="file"
          id="img"
          style={{ display: "none" }}
          name="image"
        />
        <label
          htmlFor="img"
          className={`file-input__btn ${errorData.image ? "input-error" : ""}`}
        >
          ატვირთვა
        </label>
        <img
          src={require("../images/error.png")}
          className={`input-container__svg ${
            errorData.image ? "icon-error" : ""
          }`}
        />
      </div>

      <Textarea
        value={inputData.textarea}
        name="textarea"
        handleChange={handleChange}
        placeholder="ზოგადი ინფო შენ შესახებ"
        label="ჩემ შესახებ (არასავალდებულო)"
        height="103px"
      />

      <Input
        value={inputData.email}
        name="email"
        handleChange={handleChange}
        placeholder="ელ.ფოსტა"
        label="ელ.ფოსტა"
        hint="უნდა მთავრდებოდეს @redberry.ge-ით"
        width="798px"
        error={errorData?.email}
      />

      <Input
        value={inputData.phone}
        name="phone"
        handleChange={handleChange}
        placeholder="მობილურის ნომერი"
        label="მობილურის ნომერი"
        hint="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
        width="798px"
        error={errorData?.phone}
      />

      <button className="personal-info-container__btn" onClick={handleSubmit}>
        ᲨᲔᲛᲓᲔᲒᲘ
      </button>
    </div>
  );
};

export default PersonalInfoLeft;
