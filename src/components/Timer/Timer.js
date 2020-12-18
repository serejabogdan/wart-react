import React, {useState} from 'react';
import './Timer.css';

import btnCloseSvg from '../../assets/svg/btnCloseSvg';

const Timer = () => {
  const initialState = {};
  const [timer, setTimer] = useState(initialState);

  return (
    <div className="timer">
      23:23:23
      <div className="timer__btn-wrapper">
        <button className="timer__close-btn btn">{btnCloseSvg}</button>
      </div>
    </div>
  );
};

export default Timer;
