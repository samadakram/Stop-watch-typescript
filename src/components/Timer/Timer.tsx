import React from 'react';
import './Timer.css';

// import Timer Button Component
import TimerButton from '../TimerButton/TimerButton';

const Timer = () => {
    return (
        <div className="timer-container">
            <h1>Stop Watch</h1>
            <div className="time-box">
                <span>"00:00:00"</span>
            </div>
            <div className="three-buttons">
                <TimerButton title="Start" disable={false} />
                <TimerButton title="Pause" disable={false} />
                <TimerButton title="Reset" disable={false} />
            </div>
        </div>
    );
}

export default Timer;