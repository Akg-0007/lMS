import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import vector3 from '../../../assets/ChevronRight.svg'
import vector4 from '../../../assets/ChevronRight1.svg'

const Noneed = () => {
    const [category, setCategory] = useState('Academic');
    const [activeTab, setActiveTab] = useState("ftab1");
    const [activeIndex, setActiveIndex] = useState(null);
    const [announcementsdata, setAnnouncements] = useState([]);
    const handleShow = (index) => {

       

    };
    useEffect(() => {
        fetch(`http://45.138.16.177:4000/api/dashboard/getannouncements?category=${category}`)
            .then(response => response.json())
            .then(data => setAnnouncements(data))
            .catch(error => console.error(error));
    }, [category]);

    const [isScrolled, setIsScrolled] = useState(false);

    const handleTabClick = (tabName, category) => {
        setActiveTab(tabName);
        setCategory(category)
    };
    const handleScroll = (e) => {

    };
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="#" className={activeTab === "ftab1" ? "active" : ""} onClick={() => handleTabClick("ftab1", "Academic")}> Academic </Link>
                    </li>
                    <li >
                        <Link to="#" className={activeTab === "ftab2" ? "active" : ""} onClick={() => handleTabClick("ftab2", "Administrative")}>Administrative</Link>
                    </li>
                    <li>
                        <Link to="#" className={activeTab === "ftab3" ? "active" : ""} onClick={() => handleTabClick("ftab3", "Co-curricular")}>Co-curricular</Link>
                    </li>
                    <li>
                        <Link to="#" className={activeTab === "ftab4" ? "active" : ""} onClick={() => handleTabClick("ftab4", "Examination")}>Examination</Link>
                    </li>
                </ul>
            </nav>

            <div className={activeTab === "ftab1" ? "" : "inactive"}>


                {/*  *********************************** */}


                {
                    <div className={`container11 ${isScrolled ? 'shadow' : ''}`} onScroll={handleScroll}>

                        {
                            announcementsdata.map((accordion, index) => (
                                <div className="accordion" >
                                    <div className="accordion-item" >
                                        <div className="accordion-link" href="#question1" onClick={() => handleShow(index)}>
                                            <div className="accord_heading_main">

                                                <div className='line_header'>
                                                    <div className="accordian_heading">
                                                        {accordion.heading}
                                                    </div>
                                                    {
                                                        index <= 1 ? (
                                                            <div className="button_head">
                                                                <button class="button-18">New</button>
                                                            </div>
                                                        ) : (
                                                            <div></div>
                                                        )
                                                    }

                                                </div>

                                                <div className="accordian_content">
                                                    {
                                                        activeIndex === index ? <img src={vector4} alt='' /> : <img src={vector3} alt='' />
                                                    }



                                                    {/* <img
                                        className='accordian_content'
                                        src={isExpanded ? vector4 : vector3}
                                        alt=""

                                    /> */}

                                                </div>

                                            </div>

                                            {/* vector 4 is up and vertor 3 is down */}

                                            <div className='acc_show_content'>Dear Students,</div>
                                            <div className='acc_show_content1'>
                                                {accordion.description}
                                                {
                                                    activeIndex === index ? <span className='acc_show_content'> {''}</span> : <span className='acc_show_content'> {'...'}</span>
                                                }
                                            </div>
                                        </div>
                                        {
                                            activeIndex === index && <div className="answer" >
                                                <p> {accordion.body}</p>
                                            </div>
                                        }
                                        <hr className='accordian-hr' />
                                    </div>


                                </div>
                            ))
                        }

                    </div>
                }

                {/* **********-------------******************* */}


            </div>
        </div>
    )
}



export default Noneed


   // const accord_data = {
    //     academics: [
    //         {
    //             head: 'Exclusive GRE & TOEFL Discount Vouchers for LPU Students',
    //             showcontent: 'In our new initiative GradGlob is happy to extend exclusive discount vouchers to LPU students in collaboration with ETS India, as mentioned below',
    //             hidecontent: ' 1. TOEFL discount vouchers worth USD 30 for students of Lovely Professional University. Use Institutional Code:LOVELYTOEFL30.2. TOEFL official guide and Student planner for students registering for the TOEFL exam worth Rs 2000/-(USD 24) from Lovely Professional University. 3. Four Additional Score Reports (ASR) for TOEFL to the students who register for the test from Lovely   Professional University worth USD 80.4. GRE discount vouchers worth USD 5 for students of Lovely Professional University.5. One Additional Score Report (ASR) for GRE to the students who register for the test from Lovely Professional  University worth USD 30.6. GRE General Test is offering a limited time discount. Coupon IND22330, LPU students can avail discount of INR                2500/- Must test by date: September 30, 2023.Uploaded By:                Aman Mittal                Division of International Affairs'
    //         },
    //         {
    //             head: 'academics GRE & TOEFL for LPU Students2',
    //             showcontent: 'In academics new 2 initiative GradGlob is happy to extend exclusive discount vouchers to LPU academics in collaboration with ETS India, as mentioned below',
    //             hidecontent: '2Score academics (ASR) for TOEFL to the students who register for the testScore o the students who register for the testScore o the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         }
    //         ,
    //         {
    //             head: 'academics GRE & TOEFL Di for LPU Students2',
    //             showcontent: 'In academics new 2 initiative GradGlob is happy to extend exclusive discount vouchers to LPU academics in collaboration with ETS India, as mentioned below',
    //             hidecontent: '2Score academics (ASR) for TOEFL to the students who register for the testScore o the students who register for the testScore o the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         },
    //         {
    //             head: 'academics GRE & TOEFL Discount  for  Students2',
    //             showcontent: 'In academics new 2 initiative GradGlob is happy to extend exclusive discount vouchers to LPU academics in collaboration with ETS India, as mentioned below',
    //             hidecontent: '2Score academics (ASR) for TOEFL to the students who register for the testScore o the students who register for the testScore o the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         },
    //         {
    //             head: 'academics GRE & TOEFL    LPU Students3',
    //             showcontent: 'academics our new 3 initiative academics is happy to extend exclusive discount vouchers to LPU students in collaboration with ETS India, as mentioned below',
    //             hidecontent: '3  academics Reports (ASR) for TOEFL to the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the testScore Reports (ASR) for TOEFL to the  to the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the testScore Reports (ASR) for TOEFL to the  to the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         }
    //     ],
    //     administrative: [
    //         {
    //             head: 'administrative is GRE &  Discount  for LPU Students77',
    //             showcontent: 'In our administrative 4  GradGlob is  to extend exclusive discount vouchers to LPU students in collaboration  ETS India, as mentioned below',
    //             hidecontent: ' 112. administrative Additional Score Reports (ASR) for TOEFL to the stude Additional Score Reports (ASR) for TOEFL to the stude Additional Score Reports (ASR) for TOEFL to the stude Additional Score Reports (ASR) for TOEFL to the stude Additional Score Reports (ASR) for TOEFL to the stude Additional Score Reports (ASR) for TOEFL to the studehat in this example'
    //         },
    //         {
    //             head: 'administrative GRE &  Discount Vouchers  LPU ',
    //             showcontent: 'In administrative new 202 initiative GradGlob is happy to extend exclusive discount vouchers to LPU  in collaboration with ETS India, as mentioned below',
    //             hidecontent: '277core Reports (ASR) for TOEFL to the students who register for the testScore o the students who register for the testScore o the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         }
    //         ,
    //         {
    //             head: 'administrative GRE & TOEFL   for LPU Students222',
    //             showcontent: 'In administrative new 202 initiative GradGlob is happy to extend exclusive discount vouchers to LPU  in collaboration with ETS India, as mentioned below',
    //             hidecontent: '277core Reports (ASR) for TOEFL to the students who register for the testScore o the students who register for the testScore o the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         },
    //         {
    //             head: 'administrative GRE & TOEFL  Vouchers for LPU Students222',
    //             showcontent: 'In administrative new 202 initiative  is happy to extend exclusive discount vouchers to LPU  in with ETS India, as  below',
    //             hidecontent: '277core Reports (ASR) for TOEFL to the students who register for the testScore o the students who register for the testScore o the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         },
    //         {
    //             head: 'administrative GRE & TOEFL  Vouchers for LPU ',
    //             showcontent: 'In our administrative 3 initiative GradGlob is happy to extend exclusive discount vouchers to LPU students in collaboration with  India, as mentioned below',
    //             hidecontent: '123  administrative Reports (ASR) for TOEFL to the students who register for the testScore Reports (ASR) for TOEFL to the  who register for the testScore Reports (ASR) lorem to the students who register for the testScore Reports (ASR) for TOEFL to the  to the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         }
    //     ],
    //     cocurricular: [
    //         {
    //             head: 'Exclusive cocurricular & nt Vouchers for LPU Students1',
    //             showcontent: 'In our cocurricular 011 iniy to extend exclusive discount vouchers to LPU students in collaboration with ETS India, as mentioned below',
    //             hidecontent: ' 147. Four cocurricular Score Reports (ASR) for TOEFL to the stude Additional Score Reports (ASR) for TOEFL to the stude Additional Score Reports (ASR) for TOEFL to the stude Additional Score Reports (ASR) for TOEFL to the stude Additional Score Reports (ASR) for TOEFL to the stude Additional Score Reports (ASR) for TOEFL to the studehat in this example'
    //         },
    //         {
    //             head: 'cocurricular cari & TOEFL Discount  for  Students2',
    //             showcontent: 'In our new 2 initiative Gracount vouchers to LPU students in collaboration with ETS India, as mentioned below',
    //             hidecontent: '2Score Reports (ASR) for TOEFL to the students who register for the testScore o the students who register for the testScore o the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         },
    //         {
    //             head: 'cocurricular carerere & TOEFL   for LPU Students3',
    //             showcontent: 'cocurricular our new 3  GradGlob is happy to extend exclusive discount vouchers to LPU students in collaboration with ETS India, as mentioned below',
    //             hidecontent: '3  cocurricular Reports (ASR) for TOEFL to the students who register for the tesdsdstScore Reports (ASR) for TOEFL to the students who register for the testScore Reports (ASR) for TOEFL to the  to the students who register for the testScore sdds (ASR) for TOEFL to the students who register for the testScore dsdsdsd (ASR) for TOEFL to the  tdso the dsdsds who register for the testScore Reports (ASR) for TOEFL to the students who register for the testScore Reports (ASR) for TOEFL to the students who dsdsds for the test'
    //         },
    //         {
    //             head: 'cocurricular cari & TOEFL Discount  for LPU Students2',
    //             showcontent: 'In our new 2 initiative  is happy to extend exclusive discount vouchers to LPU students in collaboration with ETS India, as mentioned below',
    //             hidecontent: '2Score Reports (ASR) for TOEFL to the students who register for the testScore o the students who register for the testScore o the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         },
    //         {
    //             head: 'cocurricular cari & TOEFL Discount LPU Students2',
    //             showcontent: 'In our new 2 initiative  is happy to extend exclusive discount vouchers to LPU students in collaboration with ETS India, as mentioned below',
    //             hidecontent: '2Score Reports (ASR) for TOEFL to the students who register for the testScore o the students who register for the testScore o the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         }
    //     ],
    //     examination: [
    //         {
    //             head: 'examination GRE & TOEFL  Vouchers  LPU Students1',
    //             showcontent: 'In our new 1 initiative GradGlobds is happy to extend exclusive discount vouchers to LPU students in collaboration with ETS India, as mentioned below',
    //             hidecontent: ' 1. examination Additional Score Reports (ASR) for TOEFL to the stude Additional Score Reports (ASR) for TOEFL to the stude Additional Score Reports (ASR) for TOEFL to the stddsdsuddsdsdse Additional Score Reports (ASR) for TOEFL to the stude Additional Score Reports (ASR) fddsdsdsor TOEFL to the stude Additional Score Reports (ASR) for TOEFL to the studehat in this example'
    //         },
    //         {
    //             head: 'examination GRE & TOEFL   for LPU Students2',
    //             showcontent: 'examination our new  initiative  is happy to extend exclusive discount vouchers to LPU students in collaboration with ETS India, as mentioned below',
    //             hidecontent: 'examination Reports (ASR) for TOEFL to the students who register for the testScore o the students who register for the testScore o the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         },
    //         {
    //             head: 'examination GRE & TOEFL  Vouchers for LPU Students2',
    //             showcontent: 'examination our new 05852 initiative GradGlob is happy to extend exclusive discount vouchers to LPU students in collaboration with ETS India, as mentioned below',
    //             hidecontent: 'examination Reports (ASR) for TOEFL to the students who register for the testScore o the students who register for the testScore o the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         },
    //         {
    //             head: 'examination GRE & TOEFL  Vouchers for LPU Students2',
    //             showcontent: 'examination our new 05852 initiative GradGlob is happy to extend exclusive discount vouchers to LPU students in collaboration with ETS India, as mentioned below',
    //             hidecontent: 'examination Reports (ASR) for TOEFL to the students who register for the testScore o the students who register for the testScore o the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         },
    //         {
    //             head: 'examination ILETS &   Vouchers  LPU Students3',
    //             showcontent: 'In our new 3 initiative  is happy to extend exclusive discount vouchers to LPU examination dsdsdin collaboration with  India, as mentioned below',
    //             hidecontent: 'Examination  3  Score Score (ASR) for TOEFL to the students who register for the testScore Reports (ASR) for TOEFL to the  who register for the testScore Reports (ASR) fodsdsr TOEFL to the  to the students who  for the testScore Reports (ASdsdsR) for TOEFL to tdsdsdshe students who register for the estSsddscore Reports (ASR) for TOEFL dsddssto the  to the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the testScore Reports (ASR) for TOEFL to the students who register for the test'
    //         }
    //     ]
    // };
