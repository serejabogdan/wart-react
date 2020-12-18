import React, {useState} from 'react';

const Timer = () => {
  const initialState = {};
  const [timer, setTimer] = useState(initialState);

  return (
    <div class="timer">
      23:23:23
      <div class="timer__btn-wrapper">
        <button class="timer__close-btn btn">x</button>
      </div>
    </div>
  );
};
