import React, { useState } from 'react';
import './AdminSchedule.css';
import Notif from '../../../assets/NotificationRed.svg';
import Dropdown from '../../../components/dropdown/Dropdown';
import ADpop from '../Admin_Schedule_Popup/ADpop';
import Eventslist from "../../../components/Admin/Events/Eventscreate/Eventslist"

export default function AdminSchedule() {
  const [sched, setSched] = useState(false);
  const [open, setOpen] = useState('');
  const [hel, setHel] = useState();

  const Department = [
    'Department of Computer Science & Engineering',
    'Department of Electrical Science & Engineering',
    'Department of Mechanical Science & Engineering',
    'Department of Civil Science & Engineering'
  ];

  const Program = ['B.Tech', 'BCA', 'M.tech', 'MCA'];
  const Batch = ['2022', '2021', '2019', '2018'];
  const Section = ['K19GF', 'K18CD', 'K19RF', 'K19HN'];

  const handleOpen = (e) => {
    setOpen(e);
  };

  return (
    <div className="AdSc">
      {sched && <ADpop setSched={setSched} />}
      <div className="AdSc_heading">
        <span>Schedule</span>
        <img src={Notif} alt="" />
      </div>
      <div className="AdSc_desc">
        <div className="AdSc_desc_head">
          <div className="Adsc_left">
            <Dropdown
              name={'Department'}
              options={Department}
              onSelect={handleOpen}
              width={'337px'}
              setState={setHel}
            />

            <Dropdown
              name={'Program'}
              options={Program}
              onSelect={handleOpen}
              width={'145px'}
              setState={setHel}
            />
            <Dropdown
              name={'Batch'}
              options={Batch}
              onSelect={handleOpen}
              width={'145px'}
              setState={setHel}
            />
            <Dropdown
              name={'Section'}
              options={Section}
              onSelect={handleOpen}
              width={'145px'}
              setState={setHel}
            />
          </div>
          <div className="Adsc_right">
            <button
              className="Btn Btn--outline Adsc_right_btn"
              onClick={() => {
                setSched(true);
              }}
            >
              + Add Schedule
            </button>
          </div>
         
           
        
        </div>
        <Eventslist/>
      </div>
    </div>
  );
}
