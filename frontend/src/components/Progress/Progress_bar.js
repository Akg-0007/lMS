// import React, { useEffect, useState } from 'react';
// import './Progress_bar.css';
// import CircularProgressBar from '../Progress/Circular_bar';

// export default function Progress_bar() {
//   const [attendance, setAttendance] = useState([80, 70, 40, 30]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (attendance.some((a) => a < 40)) {
//         setAttendance(
//           attendance.map((a) => (a < 80 ? Math.min(a + 1, 80) : a))
//         );
//       }
//     }, 50);

//     return () => clearInterval(intervalId);
//   }, [attendance]);

//   const overallAttendance =
//     attendance.reduce((total, a) => total + a, 0) / attendance.length;

//   return (
//     <div className='st-attendance-container'>
//       <div className="row">
//         <div className="progress_bar_heading">
//           <div className="heading_attendance">
//             Attendance: <p>{Math.floor(overallAttendance)}%</p>
//           </div>
//         </div>
      
//         {attendance.map((a, index) => (
//           <div className="col-4" key={index}>
//             <CircularProgressBar percentage={a} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import './Progress_bar.css';
import CircularProgressBar from '../Progress/Circular_bar';

export default function Progress_bar() {
  const [percentages, setPercentages] = useState([7, 45, 30, 10]);

  const overallAttendance = () => {
    const sum = percentages.reduce((a, b) => a + b);
    const overall = sum / percentages.length;
    return Math.floor(overall);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (percentages.some(p => p < 80)) {
        setPercentages(prevState => prevState.map(p => {
          if (p < 30) {
            return p + 1;
          } else {
            return p;
          }
        }));
      }
    }, 20);

    return () => clearInterval(intervalId);
  }, [percentages]);

  return (
    <div className='st-attendance-container'>
      <div className="row">
        <div className="progress_bar_heading">
          <div className="heading_attendance">
            Attendance: <p>{overallAttendance()}%</p>
          </div>
        </div>
      
        {percentages.map((p, i) => (
          <div className="col-4" key={i}>
            <CircularProgressBar percentage={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
