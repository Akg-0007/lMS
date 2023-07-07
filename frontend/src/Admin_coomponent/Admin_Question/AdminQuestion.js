import React,{useState} from 'react'
import './AdminQuestion.css'
import noti from '../../assets/NotificationRed.svg'
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom';


export default function AdminQuestion() {
    const navigate = useNavigate();
    const [open, setopen] = useState('');
    const [hel, setHel] = useState();
    const tech = [
        'Department of Computer Science',
        'Department of Electrical Science',
        'Department of Civil '
    ]
    const Program = [
        'B.Tech CSE',
        'B.Tech ECE',
        'B.Tech ECE '
    ]
    const Batch = [
        '2023',
        '2022',
        '2021'
    ]

    const section = [
        'K19CD',
        'K12RE',
        'K19RE'
    ]
    const handleopen = (e) => {
        setopen(e);
    };
  return (
    <>
    <div className="AdminQuestion">
        <div className="AdminQuestion_header">
            <span>
                Exam
            </span>
            <img src={noti} alt="" />
        </div>
        <div className="AdminQuestion_border">
<div className="AdminQuestion_options">
<Dropdown
                            name={'Department'}
                            options={tech}
                            onSelect={handleopen}
                            width={'337px'}
                            setState={setHel}
                        />
                        <div className="AdminQuest_mid">
                        <Dropdown
                            name={'Program'}
                            options={Program}
                            onSelect={handleopen}
                            width={'156px'}
                            setState={setHel}
                        />
                        <Dropdown
                            name={'Batch'}
                            options={Batch}
                            onSelect={handleopen}
                            width={'156px'}
                            setState={setHel}
                        />
                        </div>
                        <Dropdown
                            name={'Section'}
                            options={section}
                            onSelect={handleopen}
                            width={'337px'}
                            setState={setHel}
                        />

<div className="Admin_Search">
                        <button className='Btn Btn--outline AdminSearch' onClick={() => navigate("/home/AdminSearchQuest")}>
                            Search
                        </button></div>
</div>
        </div>
    </div>
    </>
  )
}
