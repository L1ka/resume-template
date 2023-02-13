import React, { useState, useEffect } from "react";

import "../../scss/_dropDown.scss";

const DropDown = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [options, setOptions] = useState();

  useEffect(() => {
    fetch("https://resume.redberryinternship.ge/api/degrees", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        const arr = [];

        data.map((el) => {
          arr.push({ value: el.id, label: el.title });
        });

        setOptions(arr);
      });
  }, []);

  const error = () => {
    if (props.error === undefined) return "untouched";
    if (props.error) return "error";
    if (!props.error) return "input-valid";
  };

  return (
    <div className="dropdown">
      <label className={`dropdown__label ${props.error ? "label-error" : ""}`}>
        ხარისხი
      </label>

      <div
        className={`dropdown__btn ${error()}`}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        {props.value}
        <img src={require("../../images/down-errow.png")} />
      </div>
      <img
        src={require("../../images/error.png")}
        className={`dropdown__error ${props.error ? "icon-error" : ""}`}
      />
      {isActive && (
        <div className="dropdown__content">
          {options.map((option, i) => {
            return (
              <div
                onClick={() => {
                  setIsActive(false);
                }}
                className="dropdown__item"
                key={i}
              >
                <li
                  onClick={() => props.handleChange(option, props.index)}
                  index={props.index}
                  name={props.qualification}
                  onChange={(e) => console.log(e)}
                >
                  {option.label}
                </li>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown;
