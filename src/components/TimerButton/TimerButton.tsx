import React from "react";

import "./Button.css";

const Button = ({ title, click, disable }) => {
  return (
    <button disabled={disable} className="btn" onClick={click}>
      {title}
    </button>
  );
};

export default Button;