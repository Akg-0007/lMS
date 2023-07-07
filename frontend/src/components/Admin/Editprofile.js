import React from "react";
import { useState ,useEffect} from "react";
import "./Editprofile.css";
import olivia from "../../assets/olivia.svg";
import write from "../../assets/write.svg";
import Dropdown from "../dropdown/Dropdown";
import { useParams } from "react-router-dom";
import { editStudent, fetchStudentById } from "../../services/Admin";
const Editprofile = () => {
  const [student, setStudent] = useState(null);
  const [se,sec]=useState()
  const [imageSrc, setImageSrc] = useState(olivia);
  const {id}=useParams();
  // console.log(id,"editid")

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      console.log(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  useEffect(() => {
    const getStudentById = async () => {
      try {
        const fetchedStudent = await fetchStudentById(id);
        setStudent(fetchedStudent);
      } catch (error) {
        console.log(error);
      }
    };

    getStudentById();
  }, [id]);
   const edit =async()=>{
    const resp=await editStudent(id,student);
   }
  const options = ["K19EG", "K19EH", "K19EI"];
  const [open, setopen] = useState("");
  const handleopen = (e) => {
    setopen(e);
  };

  return (
    <div className="editprofile-container">
      <div className="editprofile-header">
        <p className="edit-heading">Student<p className="edit-heading-2"> / Edit Student Profile</p></p>
      </div>

      <div className="edit-st">
        <div className="edit-st-head">
          <p className="edit-st-heading">Edit Student Profile</p>
        </div>
        <div className="sub-edit">
          <div className="col-8 ">
            <div className="edit-grid">
            <div className="address-line">
            <div className="edit-group">
              <input type={"text"}  name="firstName"  required value={student?.firstName || ""} onChange={handleInputChange}/>
              <label> First name  </label>
            </div>
            <div className="edit-group">
              <input type={"text"} name="lastName" required value={student?.lastName || ""} onChange={handleInputChange}/>
              <label> Last name   </label>
            </div>
          </div>
          <div className="address-line">
            <div className="edit-group">
              <input type={"text"} required name="emailId" value={student?.emailId || ""} onChange={handleInputChange}/>
              <label>  Email Id </label>
            </div>
            <div className="edit-group">
              <input type={"text"} required name="mobileNo" value={student?.mobileNo || ""} onChange={handleInputChange}/>
              <label>   Mobile No  </label>
            </div>
          </div>
          <div className="address-line">
            <div className="edit-group">
              <input type={"text"} required name="fathersName" value={student?.fathersName || ""} onChange={handleInputChange}/>
              <label> Father Name </label>
            </div>
            <div className="edit-group">
              <input type={"text"} required name="mothersName" value={student?.mothersName || ""} onChange={handleInputChange}/>
              <label> Mother Name  </label>
            </div>
          </div>
          <div className="address-line">
            <div className="edit-group">
              <input type={"text"} name="fathersMobNo" required  value={student?.fathersMobNo || ""} onChange={handleInputChange}/>
              <label>Father’s Mobile No</label>
            </div>
            <div className="edit-group">
              <input type={"text"} name="mothersMobNo" required value={student?.mothersMobNo || ""} onChange={handleInputChange}/>
              <label> Mother’s Mobile No</label>
            </div>
          </div>
            </div>
            <div className="edit-dob">
            <div className="edit-group">
              <input type={"text"} required name="fathersMobNo" value={student?.fathersMobNo || ""} onChange={handleInputChange}/>
              <label> D.O.B </label>
            </div>
            <div className="edit-group">
              <input type={"text"} required name="gender" value={student?.gender || ""} onChange={handleInputChange}/>
              <label> Gender </label>
            </div>
            <div className="edit-group">
              <input type={"text"} required name="bloodGroup" value={student?.bloodGroup || ""} onChange={handleInputChange} />
              <label>Blood Group </label>
            </div>
            <div className="edit-group">
              <input type={"text"} required name="category" value={student?.category || ""} onChange={handleInputChange}/>
              <label>Category</label>
            </div>
            </div>
          </div>

          <div className="col-4 edit-right">
            <div className="change-container">
              <div className="change-profile">
                <img
                  src={imageSrc}
                  alt="profile"
                  style={{
                    borderRadius: "50%",
                    width: "130px",
                    height: "130px",
                  }}
                />
              </div>
              <div className="change-profile-btn">
                <p
                  className="change-text"
                  onClick={() => document.getElementById("image-input").click()}
                >
                  Change
                </p>
                <img src={write} alt="write" />
                <input
                  id="image-input"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className="profile-batch">
              <Dropdown
                name={"Section"}
                options={options}
                onSelect={handleopen}
                setState={sec}
                width={"313px"}
              />
              <div className="profile-dropdown">
                <Dropdown
                  name={"Section"}
                  options={options}
                  onSelect={handleopen}
                  setState={sec}

                  width={"143px"}
                />
                <Dropdown
                  name={"Section"}
                  options={options}
                  onSelect={handleopen}
                  width={"145px"}
                  setState={sec}
                />
              </div>
            </div>

            <div className="edit-group">
              <input type={"number"} name="batch" required value={student?.batch || ""} onChange={handleInputChange}/>
              <label> Batch </label>
            </div>
          </div>
        </div>
      </div>

      <div className="edit-st">
        <div className="edit-st-head">
          <p className="edit-st-heading">Edit Student Profile</p>
        </div>
        <div className="col-6">
          <div className="address-left">
            <p className="address-left-heading">Corresponding Address</p>
          </div>
          <div className="address-line">
            <div className="edit-group">
              <input type={"text"} name="address1" required value={student?.address1 || ""} onChange={handleInputChange}/>
              <label> Address Line 1 </label>
            </div>
            <div className="edit-group">
              <input type={"text"} name="address2" required  value={student?.address2 || ""} onChange={handleInputChange}/>
              <label> Address Line 2 </label>
            </div>
          </div>
          <div className="edit-grid">
            <div className="edit-group">
              <input type={"text"} name="city" required value={student?.city || ""} onChange={handleInputChange}/>
              <label> Town/City </label>
            </div>
            <div className="edit-group">
              <input type={"text"} name="zip" required value={student?.zip || ""} onChange={handleInputChange}/>
              <label> Zip/Pin </label>
            </div>
            <div className="edit-group">
              <input type={"text"} name="district" required value={student?.district || ""} onChange={handleInputChange}/>
              <label>District </label>
            </div>
            <div className="edit-group">
              <input type={"text"} name="state" required value={student?.state || ""} onChange={handleInputChange}/>
              <label> State</label>
            </div>
            <div className="edit-group">
              <input type={"text"} name="country" required value={student?.country || ""} onChange={handleInputChange}/>
              <label> Country</label>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="address-right">
            <p className="address-left-heading">Corresponding Address</p>
          </div>
          <div className="address-line">
            <div className="edit-group">
              <input type={"text"} name="correspondingAddress1" required value={student?.correspondingAddress1 || ""} onChange={handleInputChange}/>
              <label> Address Line 1 </label>
            </div>
            <div className="edit-group">
              <input type={"text"} name="correspondingAddress2" required value={student?.correspondingAddress2 || ""} onChange={handleInputChange}/>
              <label> Address Line 2 </label>
            </div>
          </div>
          <div className="edit-grid">
            <div className="edit-group">
              <input type={"text"} name="correspondingCity" required value={student?.correspondingCity || ""} onChange={handleInputChange}/>
              <label> Town/City </label>
            </div>
            <div className="edit-group">
              <input type={"text"} name="correspondingZip" required value={student?.correspondingZip || ""} onChange={handleInputChange}/>
              <label> Zip/Pin </label>
            </div>
            <div className="edit-group">
              <input type={"text"} name="correspondingDistrict" required value={student?.correspondingDistrict || ""} onChange={handleInputChange}/>
              <label>District </label>
            </div>
            <div className="edit-group">
              <input type={"text"} name="correspondingState" required value={student?.correspondingState || ""} onChange={handleInputChange}/>
              <label> State</label>
            </div>
            <div className="edit-group">
              <input type={"text"} name="correspondingCountry" required value={student?.correspondingCountry || ""} onChange={handleInputChange} />
              <label> Country</label>
            </div>
          </div>
        </div>
        <div className="edit-btn">
          <button className="Btn Btn--primary" onClick={edit}>Update</button>
        </div>
      </div>
    </div>
  );
};
export default Editprofile;
