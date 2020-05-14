import React from "react";

function Alert(props) {
  if (props.display === true) {
    var displayOpacity = 1;
  } else {
    displayOpacity = 0;
  }
  return (
    <div
      role="alert"
      className={`my-2`}
      style={{
        opacity: displayOpacity,
        width: "80%",
        margin: "auto",
        color: "#ff0000",
        fontWeight: "700",

      }}
    >
      {props.msg} for "{props.search}"
    </div>
  );
}

export default Alert;
