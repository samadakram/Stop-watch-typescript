import React, {useState} from 'react';
import './Timer.css';

// import Types
import {NumberTypes,Button} from '../../Types/Types';

// import Timer Button Component
import TimerButton from '../TimerButton/TimerButton';

const Timer = () => {
    let [hour, setHour] = useState<NumberTypes>(0);
    let [minutes, setMinutes] = useState<NumberTypes>(0);
    let [seconds, setSeconds] = useState<NumberTypes>(0);
    let [disable, setDisable] = useState<Button["disable"]>(false);
    let [access, setAccess] = useState<any>();

    let start = () => {
        setDisable(true);
        setAccess(
            setInterval( ()=> {
                if (seconds > 60) {
                    seconds = 0;
                    minutes += 1;
                    setMinutes(minutes);
                }

                if (minutes > 60) {
                    minutes = 0;
                    hour += 1;
                    setHour(hour);
                }
            },1000)
        );
    };

    const pause = () => {
        setDisable(false);
        clearInterval(access);
    };

    const reset = () => {
        setDisable(false);
        clearInterval(access);
        setSeconds(0);
        setMinutes(0);
        setHour(0);
    };

    return (
        <div className="timer-container">
            <h1>Stop Watch</h1>
            <div className="time-box">
                <span>
                {hour < 10 && "0"}
                {hour}:{minutes < 10 && "0"}
                {minutes}:{seconds < 10 && "0"}
                {seconds}
                </span>
            </div>
            <div className="three-buttons">
                <TimerButton title="Start" click={start} disable={false} />
                <TimerButton title="Pause" disable={false} />
                <TimerButton title="Reset" disable={false} />
            </div>
        </div>
    );
}

export default Timer;