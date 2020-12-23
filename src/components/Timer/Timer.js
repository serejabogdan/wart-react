import React, {useState} from 'react';
import './Timer.css';

import btnCloseSvg from '../../assets/svg/btnCloseSvg';

const Timer = () => {
  const initialState = {isPlay: false, minutes: 23, seconds: 23};
  const [timer, setTimer] = useState(initialState);

  const onChangeMinutes = (e) => {
    let value = e.currentTarget.value;
    value = value.match(/[\d]{0,2}/);
    return setTimer((state) => {
      return {...state, minutes: value};
    });
  };

  return (
    <div className="timer">
      <div className="timer__minutes">
        <input
          contentEditable={!timer.isPlay}
          suppressContentEditableWarning={true}
          onInput={onChangeMinutes}
          value={timer.minutes}
        />
      </div>
      :<span className="timer__seconds">23</span>
      <div className="timer__btn-wrapper">
        {timer.isPlay && <button className="timer__close-btn btn">{btnCloseSvg}</button>}
      </div>
    </div>
  );
};

export default Timer;
