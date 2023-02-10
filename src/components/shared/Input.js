import React from "react";
import "../../scss/_input.scss";

const Input = (props) => {
  const containerWidth = props.width === "371px" ? "419px" : "846px";
  const error = () => {
    if (props.error === undefined) return "untouched";
    if (props.error) return "error";
    if (!props.error) return "input-valid";
  };

  return (
    <div className="input-container" style={{ width: containerWidth }}>
      <label
        className={`input-container__label ${props.error ? "label-error" : ""}`}
      >
        {props.label}
      </label>
      <input
        className={`input-container__input ${error()} ${props.type}`}
        onChange={(e) => props.handleChange(e, props.index)}
        name={props.name}
        value={props.value}
        style={{ width: props.width }}
        placeholder={props.placeholder}
        type={props.type}
        index={props.index}
      />
      <img
        src={require("../../images/valid.png")}
        className={`input-container__valid-icon ${
          props.error === undefined || props.error ? "" : "icon-error"
        }`}
      />
      <p className="input-hint">{props.hint}</p>
      <img
        src={require("../../images/error.png")}
        className={`input-container__svg ${props.error ? "icon-error" : ""}`}
      />
    </div>
  );
};

export default Input;
