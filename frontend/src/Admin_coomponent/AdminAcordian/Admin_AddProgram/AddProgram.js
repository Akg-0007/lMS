import React, { useState } from 'react';
import NotificationRed from '../../../assets/NotificationRed.svg';
import './AddProgram.css';
import { useNavigate,useLocation } from 'react-router-dom';

export default function AddProgram() {
  const navigate = useNavigate();
  const location = useLocation();

  const data1 = location.state;

  const [department ,setdepartment] = useState(data1);
  // console.log(department,"department")

  // console.log(location.state, 'location.state');
  
  console.log(data1);

  const [data, setData] = useState([{ DepartmentName: '', ProgramName: '' }]);
  console.log(data1,"hi");
  // console.log(data,"data");




  const handleClick = () => {
    setData([...data, { DepartmentName: '', ProgramName: '' }]);
    // setdepartment([...department,{ProgramName: ''}]);
    
  };

  const handleChange = (e, i) => {
    const { name, value } = e.target;
    const onChangeVal = [...data];
    onChangeVal[i][name] = value;
    setData(onChangeVal);
  };

  const handleDelete = (i) => {
    const deleteVal = [...data];
    deleteVal.splice(i, 1);
    setData(deleteVal);
  };

  const next = () =>
  {
    data1.programme.push(data);
    navigate('/Admin/AddCourse', { state: data1 })
  }

  return (
    <>
      <div className="AddProgram">
        <div className="AdscvHeader addProgram">
          <span>Department</span>
          <img src={NotificationRed} alt="" />
        </div>
        <div className="depa__add">
          <div className="AddDepartment_desc">
            <div className="add_Todo">
             
                  <div className="addDepartmenttodo">
                    <div className="create_input_title">
                      <input
                        type="text"
                        name="DepartmentName"
                        value={data1.title}
                       
                        required
                      />
                      <label htmlFor="">Department Name</label>
                    </div>
                    {data.map((val, i) => {
                return (
                    <div className="create_input_title"  key={i}>
                      <input
                        type="text"
                        name="ProgramName"
                        value={val.ProgramName}
                        onChange={(e) => handleChange(e, i)}
                        required
                      />
                      <label htmlFor="">Program Name</label>
                    </div>
                     );
                    })}
                  </div>
               
              <div className="addProgram_delete">
                <button onClick={() => handleClick()}>+ Add</button>
                <button className="Btn Btn--outline" onClick={() => handleDelete()}>
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="Adnext_button">
            <button
              className="Btn Btn--primary next_button"
              onClick={next }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
