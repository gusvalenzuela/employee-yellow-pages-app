import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <div className="footer text-center mt-auto" >
      {props.children}
    </div>
  );
}

export default Footer;
