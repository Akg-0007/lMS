import React from 'react'
// import './mark_attendance.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import Attendance from '../Attendance';

export default function Mark_attendance() {
    const [modal, setmodal] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div className='mark_attendance'>
                <div className='row mark_attendance_row'>
                    <div className='col-12'>
                        <table className='mark_attendance_table'>
                            <tr className='mark_attendance_head'>
                                <th>Time</th>
                                <th>Course</th>
                                <th>Section</th>
                                <th>Room No.</th>
                                <th>Action</th>
                            </tr>

                            <tr className='mark_attendance_data'>
                                <td>9:00 AM - 10:00 PM</td>
                                <td>INT 407</td>
                                <td>K19CD</td>
                                <td>38 - 412</td>
                                <td><button className='Btn Btn--primary'
                                    onClick={() => {
                                        setmodal(true);
                                        navigate('/home/attendance/View_attendance')
                                    }}
                                >View Attendance</button></td>
                            </tr>
                            <tr className='mark_attendance_data'>
                                <td>9:00 AM - 10:00 PM</td>
                                <td>INT 407</td>
                                <td>K19CD</td>
                                <td>38 - 412</td>
                                <td><button className='Btn Btn--primary'
                                    onClick={() => {
                                        setmodal(true);
                                        navigate('/home/attendance/Mark_attendance')
                                    }}
                                >Mark Attendance</button></td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}