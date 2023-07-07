import React,{useState,useEffect} from 'react'
import up_down from '../../assets/up_down.svg'
import uploads from '../../assets/uploads.svg'
import eyes from '../../assets/blackeye.svg'
import comment from '../../assets/blackEdit.svg'
import './Toggle.css'
import { getDefaultNormalizer } from '@testing-library/react'
import Dropdown from '../../components/dropdown/Dropdown'
import Search_bar from '../../components/Search_bar/Search_bar'
import AdFilter from '../AdminFilter/AdFilter'
import dash from '../../assets/trash.svg'
import DeletePop from '../DeletePopUP/DeletePop'
import Accordian from '../Acordian/Acordian'
import { useNavigate } from "react-router-dom";
import set from "../../assets/set.svg"

export default function Toggle({setCourse}) {
const [courses,setCourses] = useState();
    const [View, setView] = useState(false);
    const [upload,setUpload] = useState(false);
    const [Assign, setAssign] = useState(false)
    const [del,setDel] = useState(false);
    const navigate = useNavigate();
    const [popupState, setPopupState] = useState(false);
const data4 =[
    {
      cir:  <Accordian/>
    }
]

    const data3 = [
        {
            name: "Rohit",
            Reg: 1126598,
            Roll: 1,
            Email: "roht123@gmail.com",
        },
        {
            name: "Rahul",
            Reg: 112474,
            Roll: 2,
            Email: "roht123@gmail.com",
        }
    ]
    const [toggleState, setToggleState] = useState(1);
    const [sort,setSort] = useState();
    const[data,setData] = useState(data3);

    useEffect(()=>{
        if(sort === "name") {
          setData(data.sort((a, b) => a.name.localeCompare(b.name)));
        }
        if(sort === "Course") {
          setData(data.sort((a, b) => a.section.localeCompare(b.section)));
        }
      }, [sort])

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const data1 = [
        {
            name: "Rohit",
            Reg: 1126598,
            Roll: 1,
            Email: "roht123@gmail.com",
        },
        {
            name: "Rohit",
            Reg: 1126598,
            Roll: 2,
            Email: "roht123@gmail.com",
        },
    ]
 
  let courseOptions = ['Computer Science', 'Electrical Eng']
  let Batch = ['2022', '2021']

  let Section  = ['K19CD', 'K19GE']



  return (
    <div>
      
    <div className="stu_assessment_desc">
               {del && <DeletePop setDel = {setDel}/>}
    <div className="stu_assessment_container">
        <div className="stu_assessment_container_header">
            <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
            >
                <span>View Student </span>
            </button>
            <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
            >
                <span> View Teacher </span>
            </button>
            <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
            >
                <span>View Curriculum</span>
            </button>
        </div>

        <div className="content-tabs">
            <div
                className={toggleState === 1 ? "content  active-content" : "content"}
            >

                <div className="toggle_option">
                    <div className="upper">
  <span>Program</span>
  <span>Batch</span>
  <span>Section</span>
                    </div>
                    <div className="lower">
                        <div className="dropdowns">
                        <Dropdown
                         name={"Select"}
                         options={courseOptions}
                         setState={setCourses}
                        />
                        <Dropdown
                         name={"Select"}
                         options={Batch}
                         setState={setCourses}
                        />
                        <Dropdown
                         name={"Select"}
                         options={Section}
                         setState={setCourses}
                        />
                    </div>
                    <div className="search">
                        <Search_bar/>
                    </div>
                    </div>
                </div>
 
                <div className="DepartViewHeader">
                    </div>       
                       <table className="table stu_assessment_table">
                       
                    <thead className='stu_assessment_head'>
                        <th>Name</th>
                        <th>Reg No</th>
                        <th>Roll No </th>
                        <th>Email ID</th>
                        {/* <th>Marks</th> */}
                        {/* {show ? <th>Status</th> : null} */}
                        <th>Action</th>

                    </thead>
                    <tbody className="stu_assessment_tbody">
{data.map((data) => {
const st = data.Status ? 'uploaded' : 'pending';
return (
<tr>
<td onClick={() => setAssign(true)}> 
{data.name}</td>
<td>{data.Reg}</td>
<td>{data.Roll}</td>
<td>{data.Email}</td>
<td className='stu_assessment_tbody_action'>
<img src={eyes}   onClick={()=>{
                        navigate("/home/adminstudentprofile")
                    }} />

<img src={comment}  onClick={() => setView(true)}/> 
<img src={dash}  onClick={()=>setDel(true)}/>  </td>
</tr>
);
})
}
                    </tbody>
                </table>
            </div>
            <div
                className={toggleState === 2 ? "content  active-content" : "content"}
            ><div className="Teacher search">
            <Search_bar/>
        </div>
                <table className="table stu_assessment_table">
                <thead className='stu_assessment_head'>
                        <th>Name</th>
                        <th>Reg No</th>
                        <th>Roll No </th>
                        <th>Email ID</th>
                        {/* <th>Marks</th> */}
                        {/* {show ? <th>Status</th> : null} */}
                        <th>Action</th>

                    </thead>
                    <tbody className="stu_assessment_tbody">

                    {
data.map((data) => {
const st = data.Status ? 'uploaded' : 'pending';
return (
<tr>
<td onClick={() => setAssign(true)}> 
{data.name}</td>
<td>{data.Reg}</td>
<td>{data.Roll}</td>
<td>{data.Email}</td>
<td className='stu_assessment_tbody_action'>

<img src={eyes}   onClick={()=>{
                        navigate("/home/adminstudentprofile")
                    }} />
<img src={comment}  onClick={() => setView(true)}/> 
<img src={dash}  onClick={()=>setDel(true)}/>  </td>
</tr>
);
})
}
   


                    </tbody>
                </table>
            </div>
            <div
                className={toggleState === 3 ? "content  active-content" : "content"} 
            >
                

               <div className="ViewCurri_head">
               {popupState && <AdFilter setPopupstate={setPopupState} />}
               <button onClick={() => setPopupState(true)} className="btn-filter">Filter
               <img src={set}/></button> <Search_bar/>
               </div>
<table className="table stu_assessment_table">
<thead className='stu_assessment_head'>

      

</thead>
<tbody>

</tbody>
   
</table>

            </div>
        </div></div>
</div>
</div>
  )
}
