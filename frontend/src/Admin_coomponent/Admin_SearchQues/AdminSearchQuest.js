import React,{useState} from 'react'
import './AdminSearchQuest.css'
import noti from '../../assets/NotificationRed.svg'
import Dropdown from '../../components/dropdown/Dropdown'
import Search_bar from '../../components/Search_bar/Search_bar';
import eye from '../../assets/eyes.svg'
import edit from '../../assets/edit.svg'
import dash from '../../assets/trash.svg'


export default function AdminSearchQuest() {
    const [open, setopen] = useState('');
    const [hel, setHel] = useState();
    const handleopen = (e) => {
        setopen(e);
    };
    const tech = [
        'Semester 1',
        'Semester 2',
        'Semester 3 '
    ]

    const data = [
        {
            code : "INT 401",
            Name : "Basic Electric Engineering",
            Type : "Mid Semester Exam",
        },
        {
            code : "INT 401",
            Name : "Basic Electric Engineering",
            Type : "Mid Semester Exam",
        }
    ]
  return (
    <>
    <div className="AdminSearchQuest">
    <div className="AdminQuestion_header">
            <span>
                Exam
            </span>
            <img src={noti} alt="" />
        </div>
        <div className="AdminSearchQuest_borde">

            <div className="AdminSearchQuest_top">
                <div className="ad_left_p">
                <Dropdown
                            name={'Semester'}
                            options={tech}
                            onSelect={handleopen}
                            width={'156px'}
                            setState={setHel}
                        />
                        <button className='Btn Btn--outline'>
                            + Add Exam
                        </button>
                        <button className='Btn Btn--outline'> Schedule </button>
                </div>
                <Search_bar/>
            </div>
            <table className='table'>
                <thead>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Exam Type</th>
                    <th>Action</th>
                </thead>
                <tbody>
                   {
                    data && data.map((e) =>{
                        return(
                        <tr>
                            <td>{e.code}</td>
                            <td>{e.Name}</td>
                            <td>{e.Type}</td>
                            <td className='AD_action_exam'> 
                                <img src={eye} alt="" />
                                <img src={edit} alt="" />
                                <img src={dash} alt="" />
 
                            </td>
                        </tr>
                        )
                    })
                   }
                </tbody>

            </table>

        </div>
    </div>
    </>
  )
}
