import React from 'react';
import './TimerButton.css';
import { Button } from '../../Types/Types';

const TimerButton: React.FC<Button> = ({ title, click, disable }) => {
  return (
    <button disabled={disable} className="btn" onClick={click}>
      {title}
    </button>
  );
};

export default TimerButton;