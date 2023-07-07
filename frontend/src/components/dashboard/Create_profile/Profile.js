import React from 'react'
import './Profile.css'

export default function Profile() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="profile_heading">
                        <span>Student</span>
                        / Create Student Profile
                    </div>
                    <div className="profile_part">
                        <div className="create_student_profile">
                            <div className="create_profile_heading">
                                <span>Create Student Proflie</span>
                            </div>
                            <div className="profile_details">
                                <div className="student_profile_left">
                                    <div className="student_name">
                                        <div className="student_name firstname">
                                            <input type="text" required />
                                            <span>First Name</span>
                                        </div>
                                        <div className="student_name lastname">
                                            <input type="text" required />
                                            <span>Last Name</span>
                                        </div>
                                    </div>
                                    <div className="student_name">
                                        <div className="student_name firstname">
                                            <input type="Email" required />
                                            <span>Email</span>
                                        </div>
                                        <div className="student_name lastname">
                                            <input type="number" required />
                                            <span>Mobile</span>
                                        </div>
                                    </div>


                                    <div className="student_name">
                                        <div className="student_name firstname">
                                            <input type="text" required />
                                            <span>Father's name</span>
                                        </div>
                                        <div className="student_name lastname">
                                            <input type="text" required />
                                            <span>Mother's Name</span>
                                        </div>
                                    </div>



                                    <div className="student_name">
                                        <div className="student_name firstname">
                                            <input type="number" required />
                                            <span>Father's Number</span>
                                        </div>
                                        <div className="student_name lastname">
                                            <input type="number" required />
                                            <span>Mother's Number</span>
                                        </div>

                                    </div>


                                    <div className="student_name small_details">
                                        <div className="student_name dob">
                                            <input type="text" required />
                                            <span>D.O.B</span>
                                        </div>
                                        <div className="student_name Gender">
                                            <input type="text" required />
                                            <span>Gender</span>
                                        </div>
                                        <div className="student_name Blood_group">
                                            <input type="text" required />
                                            <span>Blood Group</span>
                                        </div>
                                        <div className="student_name Category">
                                            <input type="text" required />
                                            <span>Category</span>
                                        </div>

                                    </div>
                                </div>

                                <div className="student_profile_right">
                                    asdfvbasfd
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
