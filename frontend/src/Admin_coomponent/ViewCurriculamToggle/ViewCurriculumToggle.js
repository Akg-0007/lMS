import React, { useState, useEffect } from 'react'
import './ViewCurriculamToggle.css'
import Dropdown from '../../components/dropdown/Dropdown'
import Search_bar from '../../components/Search_bar/Search_bar'
import AdFilter from '../AdminFilter/AdFilter'
import dash from '../../assets/trash.svg'
import Accordian from '../Acordian/Acordian'
import up_down from '../../assets/up_down.svg'
import uploads from '../../assets/uploads.svg'
import eyes from '../../assets/blackeye.svg'
import comment from '../../assets/blackEdit.svg'

export default function ViewCurriculumToggle({ setCourse }) {
    const [courses, setCourses] = useState();
    const [View, setView] = useState(false);
    const [upload, setUpload] = useState(false);
    const [Assign, setAssign] = useState(false)
    const [popupState, setPopupState] = useState(false);
    // const navigate = useNavigate();
    const data4 = [
        {
            cir: <Accordian />
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
    const [sort, setSort] = useState();
    const [data, setData] = useState(data3);

    useEffect(() => {
        if (sort === "name") {
            setData(data.sort((a, b) => a.name.localeCompare(b.name)));
        }
        if (sort === "Course") {
            setData(data.sort((a, b) => a.section.localeCompare(b.section)));
        }
    }, [sort])

    const toggleTab = (index) => {
        setToggleState(index);
    };



    let courseOptions = ['Computer Science', 'Electrical Eng']
    let Batch = ['2022', '2021']

    let Section = ['K19CD', 'K19GE']

    return (
        <>
            <div className="stu_assessment_desc">

                <div className="stu_assessment_container">
                    <div className="circu_header">
                   
                        <Search_bar />
                    </div>
                    <div className="stu_assessment_container_header">
                        <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            <span>Year 1  </span>
                        </button>
                        <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            <span> Year 2  </span>
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                            <span>Year 3 </span>
                        </button>
                        <button
                            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(4)}
                        >
                            <span>Year 4 </span>
                        </button>
                    </div>

                    <div className="content-tabs">
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >

                            <div className="DepartViewHeader">
                            </div>
                            <table className="table stu_assessment_table">

                                <thead className='stu_assessment_head'>
                                    <th>Semester 1</th>              
                                </thead>
                                <tbody className="stu_assessment_tbody">
                                    <tr>
                                        {
                                            data4.map((e) => {
                                                return (
                                                    <>
                                                        <td>{e.cir}</td>
                                                        {/* <td>{e.cir}</td> */}


                                                    </>
                                                )
                                            })
                                        }
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table stu_assessment_table">

                                <thead className='stu_assessment_head'>
                                    <th>Semester 2</th>              
                                </thead>
                                <tbody className="stu_assessment_tbody">
                                    <tr>
                                        {
                                            data4.map((e) => {
                                                return (
                                                    <>
                                                        <td>{e.cir}</td>
                                                        {/* <td>{e.cir}</td> */}


                                                    </>
                                                )
                                            })
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div
                className={toggleState === 2 ? "content  active-content" : "content"}
            >

                <div className="DepartViewHeader">
                    </div>       
                    <table className="table stu_assessment_table">

<thead className='stu_assessment_head'>
    <th>Semester 3</th>              
</thead>
<tbody className="stu_assessment_tbody">
    <tr>
        {
            data4.map((e) => {
                return (
                    <>
                        <td>{e.cir}</td>
                        {/* <td>{e.cir}</td> */}


                    </>
                )
            })
        }
    </tr>
</tbody>
</table>
<table className="table stu_assessment_table">

                                <thead className='stu_assessment_head'>
                                    <th>Semester 4</th>              
                                </thead>
                                <tbody className="stu_assessment_tbody">
                                    <tr>
                                        {
                                            data4.map((e) => {
                                                return (
                                                    <>
                                                        <td>{e.cir}</td>
                                                        {/* <td>{e.cir}</td> */}


                                                    </>
                                                )
                                            })
                                        }
                                    </tr>
                                </tbody>
                            </table>
            </div>
            <div
                className={toggleState ===3 ? "content  active-content" : "content"}
            >

                <div className="DepartViewHeader">
                    </div>       
                    <table className="table stu_assessment_table">

<thead className='stu_assessment_head'>
    <th>Semester 5</th>              
</thead>
<tbody className="stu_assessment_tbody">
    <tr>
        {
            data4.map((e) => {
                return (
                    <>
                        <td>{e.cir}</td>
                        {/* <td>{e.cir}</td> */}


                    </>
                )
            })
        }
    </tr>
</tbody>
</table>

<table className="table stu_assessment_table">

                                <thead className='stu_assessment_head'>
                                    <th>Semester 6</th>              
                                </thead>
                                <tbody className="stu_assessment_tbody">
                                    <tr>
                                        {
                                            data4.map((e) => {
                                                return (
                                                    <>
                                                        <td>{e.cir}</td>
                                                        {/* <td>{e.cir}</td> */}


                                                    </>
                                                )
                                            })
                                        }
                                    </tr>
                                </tbody>
                            </table>
            </div>

            <div
                className={toggleState === 4 ? "content  active-content" : "content"}
            >

                <div className="DepartViewHeader">
                    </div>       
                    <table className="table stu_assessment_table">

<thead className='stu_assessment_head'>
    <th>Semester 7</th>              
</thead>
<tbody className="stu_assessment_tbody">
    <tr>
        {
            data4.map((e) => {
                return (
                    <>
                        <td>{e.cir}</td>
                        {/* <td>{e.cir}</td> */}


                    </>
                )
            })
        }
    </tr>
</tbody>
</table>
<table className="table stu_assessment_table">

                                <thead className='stu_assessment_head'>
                                    <th>Semester 8</th>              
                                </thead>
                                <tbody className="stu_assessment_tbody">
                                    <tr>
                                        {
                                            data4.map((e) => {
                                                return (
                                                    <>
                                                        <td>{e.cir}</td>
                                                        {/* <td>{e.cir}</td> */}


                                                    </>
                                                )
                                            })
                                        }
                                    </tr>
                                </tbody>
                            </table>
            </div>
                    </div></div>
            </div>
        </>
    )
}
