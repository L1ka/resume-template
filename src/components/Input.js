import React from "react";
import "../scss/_input.scss";

const Input = (props) => {
  const containerWidth = props.width === "371px" ? "419px" : "846px";

  return (
    <div className="input-container" style={{ width: containerWidth }}>
      <label className="input-container__label">{props.label}</label>
      <input
        className="input-container__input"
        onChange={(e) => props.handleChange(e)}
        name={props.name}
        value={props.value}
        style={{ width: props.width }}
        placeholder={props.placeholder}
      />
      <p className="input-hint">{props.hint}</p>
    </div>
  );
};

export default Input;
