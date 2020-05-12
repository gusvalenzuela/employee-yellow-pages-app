import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron text-center" >
      {props.children}
    </div>
  );
}

export default Jumbotron;
