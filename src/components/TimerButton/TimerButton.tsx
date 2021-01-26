import React from "react";

const TimerButton = ({ title, click, disable }) => {
  return (
    <button disabled={disable} className="btn" onClick={click}>
      {title}
    </button>
  );
};

export default TimerButton;