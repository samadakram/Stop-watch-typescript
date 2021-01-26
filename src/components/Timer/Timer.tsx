import React from 'react';
import './Timer.css';

const Timer = () => {
    return (
        <div className="timer-container">
            <h1>Stop Watch</h1>
            <div className="time-box">
                <span>"00:00:00"</span>
            </div>
        </div>
    );
}

export default Timer;