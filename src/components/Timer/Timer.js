import React, {useState} from 'react';
import './Timer.css';

import btnCloseSvg from '../../assets/svg/btnCloseSvg';

const Timer = () => {
  const initialState = {inputTime: '', isPlay: false, minutes: 0, seconds: 0};
  const [timer, setTimer] = useState(initialState);

  const onChangeMinutes = (e) => {
    const value = e.currentTarget.value;
    const receivedTime = value.match(/[\d]{0,4}/).toString();
    let minutes = 0;
    let seconds = 0;

    if (receivedTime.length > 2) {
      seconds = +receivedTime.slice(-2);
      minutes = +receivedTime.slice(0, receivedTime.length / 2);
    } else {
      seconds = +receivedTime;
    }

    return setTimer((state) => {
      return {...state, inputTime: receivedTime, minutes, seconds};
    });
  };

  const onChangeInputSelection = (e) => e.currentTarget.setSelectionRange(4, 4);

  const fixTimeString = () => `${fixMinutesString()}м ${fixSecondsString()}с`;
  const fixMinutesString = () => (timer.minutes < 10 ? `0${timer.minutes}` : `${timer.minutes}`);
  const fixSecondsString = () => (timer.seconds < 10 ? `0${timer.seconds}` : `${timer.seconds}`);

  return (
    <div className="timer">
      {!timer.isPlay && (
        <>
          <input
            className="timer__input-time"
            onInput={onChangeMinutes}
            value={timer.inputTime}
            onClick={onChangeInputSelection}
          />
          <div className="timer__focus-border"></div>
        </>
      )}
      <div className="time">{fixTimeString()}</div>
      <div className="timer__btn-wrapper">
        {timer.isPlay ? (
          <button className="timer__close-btn btn">{btnCloseSvg}</button>
        ) : (
          <button className="timer__close-btn btn">||</button>
        )}
      </div>
    </div>
  );
};

export default Timer;
