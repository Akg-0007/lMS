import React,{useState} from 'react'
import './ADpop.css'
import cross from '../../../assets/cross.svg'
import Dropdown from '../../../components/dropdown/Dropdown';
import { batch } from 'react-redux';
import down from '../../../assets/downkey.svg'
import Popup from '../../../components/toaster/Popup';



export default function ADpop({setUp }) {
    const [open, setopen] = useState('');
    const [isActive, setActive] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [toast, settoast] = useState(false);
    const [ret, setRet] = useState(false);
    const yes = () =>
    {
        settoast(true)
        setTimeout (() =>{
        settoast(false);
        setUp(false);
     },1300)
    }
  
    const toggleClass = () => {
      setActive(!isActive);
    };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setActive(false);
    };
    

    const Department = [
        'Department of Computer Science & Engineering',
        'Department of Electrical Science & Engineering',
        'Department of Mechanical Science & Engineering',
        'Department of Civil Science & Engineering'
    ];
    const batch = ['2022', '2021', '2019', '2018'];
    const program = ['B.Tech', 'BCA', 'M.tech', 'MCA'];
    const Course = ['A.I', 'Software Testing', 'Cyber Security', 'Web development'];
    const Section = ['K19GF', 'K18CD', 'K19RF', 'K19HN'];
    const day = ["Monday", "Tuesday" ,"Wednesday","Thursday","Friday","Saturday"]
    const handleopen = (e) => {
        setopen(e);
    };
  return (
    <>
      <div className="assessmenttracker-submit">
        <div className="assessment-container ADpop">
            <div className="ADpop_header">
                <span>Add Schedule</span>
                <img src={cross} alt="" />
            </div>
            <div className="ADpop_dropdowns">
            <Dropdown
                            name={'Department'}
                            options={Department}
                            onSelect={handleopen}
                            width={'337px'}
                            setState={setRet}
                        />
                          <Dropdown
                            name={'Program'}
                            options={program}
                            onSelect={handleopen}
                            width={'337px'}
                            setState={setRet}

                        />
                        <div className="batch_section">
                          <Dropdown
                            name={'Batch'}
                            options={batch}
                            onSelect={handleopen}
                            width={'165px'}
                            setState={setRet}

                        />
                         <Dropdown
                            name={'Section'}
                            options={Section}
                            onSelect={handleopen}
                            width={'165px'}
                            setState={setRet}

                        />
                        </div>
                        <Dropdown
                            name={'Course'}
                            options={Course}
                            onSelect={handleopen}
                            width={'337px'}
                            setState={setRet}

                        />
                           <Dropdown
                            name={'Day'}
                            options={day}
                            onSelect={handleopen}
                            width={'337px'}
                            setState={setRet}

                        />
      
      <div className="ADpop_time">
      <div className="edit-group1">
                <input type={"number"} required />
                <label> Start Time </label>
              </div>
              <div className="edit-group1">
                <input type={"number"} required />
                <label> End Time </label>




              </div>
      </div>

      <div className="ADpop_time">
      <div className="edit-group1">
                <input type={"number"} required />
                <label> Duration </label>
              </div>
              <div className="edit-group1">
                <input type={"text"} required />
                <label> Venue </label>
              </div>
      </div>
      <div className="schedule_AD">
        <button className='Btn Btn--outline schedule_AD_btn'
         onClick={() =>yes()}>Schedule</button>
      </div>

            </div>
        </div>
      </div>
        {toast && ( 
          <Popup
            state={"success"}
            message={"File Uploaded !"}
          />
        )}
    </>
  )
}
