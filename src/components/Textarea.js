import React from "react";
import "../scss/_textarea.scss";

const Textarea = (props) => {
  const containerHeight = props.height === "103px" ? "148px" : "224px";

  return (
    <div className="textarea-container" style={{ height: containerHeight }}>
      <label className="textarea-container__label">{props.label}</label>
      <textarea
        className="textarea-container__textarea"
        placeholder={props.placeholder}
        onChange={(e) => props.handleChange(e)}
        name={props.name}
        value={props.value}
        style={{ height: props.height }}
      />
    </div>
  );
};

export default Textarea;
