import React from "react";
import "../../scss/_textarea.scss";

const Textarea = (props) => {
  const containerHeight = () => {
    if (props.height === "103px") return "148px";
    if (props.height === "123px") return "168px";
    if (props.height === "179px") return "224px";
  };

  const error = () => {
    if (props.error === undefined) return "untouched";
    if (props.error) return "error";
    if (!props.error) return "input-valid";
  };

  //console.log(error());

  return (
    <div className="textarea-container" style={{ height: containerHeight }}>
      <label
        className={`textarea-container__label ${
          props.error ? "label-error" : ""
        }`}
      >
        {props.label}
      </label>

      <textarea
        className={`textarea-container__textarea ${error()}`}
        placeholder={props.placeholder}
        onChange={(e) => props.handleChange(e, props.index)}
        name={props.name}
        value={props.value}
        style={{ height: props.height }}
        index={props.index}
      />
      <img
        src={require("../../images/valid.png")}
        className={`textarea-container__valid-icon ${
          props.error === undefined || props.error ? "" : "icon-error"
        }`}
      />
      <img
        src={require("../../images/error.png")}
        className={`textarea-container__invalid-icon ${
          props.error ? "icon-error" : ""
        }`}
      />
    </div>
  );
};

export default Textarea;
