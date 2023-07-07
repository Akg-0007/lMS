import React from 'react'
import './TimelineStyle.css'

const Timeline = () => {
  return (
    <div className="timeline">
      <ul className="time_set">
        <li className="time" style={{ '--i': 0, '--clr': '#009FBD', '--clr1': '#009FBD40' }}>
          <span className="time">08:00am</span>
          <a className="slot">
            <h3>INT 207 <span>38-200</span></h3>
          </a>
        </li>
        <li className="time" style={{ '--i': 1, '--clr': '#FF6D60', '--clr1': '#FF6D6040' }}>
          <span className="time">09:00am</span>
          <a className="slot">
            <h3>INT 207 <span>38-200</span></h3>
          </a>
        </li>
        <li className="time" style={{ '--i': 2, '--clr': '#F7D060', '--clr1': '#F7D06040' }}>
          <span className="time">10:00am</span>
          <a className="slot">
            <h3>INT 207 <span>38-200</span></h3>
          </a>
        </li>
        <li className="time" style={{ '--i': 3, '--clr': '#57C5B6', '--clr1': '#57C5B640' }}>
          <span className="time">11:00am</span>
          <a className="slot">
            <h3>INT 207 <span>38-200</span></h3>
          </a>
        </li>
        <li className="time" style={{ '--i': 4, '--clr': '#8F43EE', '--clr1': '#8F43EE40' }}>
          <span className="time">12:00pm</span>
        </li>
        <li className="time" style={{ '--i': 5, '--clr': '#E21818', '--clr1': '#E2181840' }}>
          <span className="time">01:00pm</span>
          <a className="slot">
            <h3>INT 207 <span>38-200</span></h3>
          </a>
        </li>
        <li className="time" style={{ '--i': 6, '--clr': '#0A4D68', '--clr1': '#371B5840' }}>
          <span className="time">02:00pm</span>
        </li>
        <li className="time" style={{ '--i': 7, '--clr': '#804674', '--clr1': '#80467440' }}>
          <span className="time">03:00pm</span>
          <a className="slot">
            <h3>INT 207 <span>38-200</span></h3>
          </a>
        </li>
        <li className="time" style={{ '--i': 8, '--clr': '#0A4D68', '--clr1': '#0A4D6840' }}>
          <span className="time">04:00pm</span>
        </li>
        <li className="time" style={{ '--i': 9, '--clr': '#0A4D68', '--clr1': '#371B5840' }}>
          <span className="time">05:00pm</span>
        </li>
      </ul>
    </div>
  )
}

export default Timeline