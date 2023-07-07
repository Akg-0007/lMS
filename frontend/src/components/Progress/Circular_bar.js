
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Circular_bar.css';

function CircularProgressBar({ percentage }) {
  let pathColor;

  if (percentage < 40) {
    pathColor = '#FF0000'; // red
  } else if (percentage >= 40 && percentage < 60) {
    pathColor = '#FFA500'; // yellow
  } else {
    pathColor = '#0FB366'; // green
  }

  return (
    <div className='round_bar' style={{ textAlign: "center" }}>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: pathColor,
            textColor: '#0FB366',
            trailColor: '',
            backgroundColor: '#E1FFF1',
          })}
          value={percentage}
          text={`${percentage}%`}
        />
      </div>
      <span>INT 407 </span>
    </div>
  );
}

export default CircularProgressBar;
