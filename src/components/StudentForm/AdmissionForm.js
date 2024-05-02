import React, { useState } from "react";
import "./AdmissionForm.css";
import { useNavigate } from "react-router-dom";
import { addFormData } from "../../slice/studentSlice";
import { useDispatch } from "react-redux";

const AdmissionForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [admissionDetail, setAdmissionDetail] = useState({
    adm_num: "",
    rol_num: "",
    class: "",
    sec: "",
    fname: "",
    lname: "",
    gender: "",
    dob: "",
    catg: "",
    relig: "",
    cast: "",
    mob_num: "",
    email: "",
    Adm_num: "",
    student_pic: "",
    blood_grup: "",
  });

  const [formDataArray, setFormDataArray] = useState([]);

  const ItemTypes = [
    {
      Class: "LKG",
      Sections: ["A", "B", "C"],
    },
    {
      Class: "UKG",
      Sections: ["A", "B", "C"],
    },
    {
      Class: "1",
      Sections: ["A", "B", "C", "D"],
    },
    {
      Class: "2",
      Sections: ["A", "B", "C", "D"],
    },
    {
      Class: "3",
      Sections: ["A", "B", "C", "D"],
    },
    {
      Class: "4",
      Sections: ["A", "B", "C", "D"],
    },
    {
      Class: "5",
      Sections: ["A", "B", "C", "D"],
    },
    {
      Class: "6",
      Sections: ["A", "B", "C", "D"],
    },
  ];

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleClassChange = (e) => {
    setAdmissionDetail((prev) => {
      return { ...prev, class: e.target.value, sec: "" };
    });
  };

  const handleSectionChange = (e) => {
    setAdmissionDetail((prev) => {
      return { ...prev, sec: e.target.value };
    });
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setAdmissionDetail((prev) => {
      if (name === "gender") {
        return { ...prev, [name]: e.target.value };
      } else if (
        name === "student_pic" ||
        name === "father_photo" ||
        name === "mother_photo" ||
        name === "guardian_photo"
      ) {
        return { ...prev, [name]: files[0] };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", admissionDetail);
  //   // Push form data as a new object into formDataArray
  //   setFormDataArray([...formDataArray, admissionDetail]);
  //   dispatch(addFormData(admissionDetail));
  //   navigate("/StudentSheet");
  //   setShowForm(false);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if any required field is empty
    const requiredFields = ['adm_num', 'rol_num', 'class', 'sec', 'fname', 'lname', 'gender', 'dob', 'catg', 'relig', 'cast', 'mob_num', 'email', 'Adm_num', 'student_pic', 'blood_grup', 'father_name', 'father_phone', 'father_occupation', 'father_photo', 'mother_name', 'mother_phone', 'mother_occupation', 'guardian_type'];
    const emptyFields = requiredFields.filter(field => !admissionDetail[field]);
  
    // If there are empty required fields, show an alert
    if (emptyFields.length > 0) {
      alert('Please fill all required fields');
      return;
    }
  
    // If all required fields are filled, proceed with form submission
    console.log("Form submitted:", admissionDetail);
    // Push form data as a new object into formDataArray
    setFormDataArray([...formDataArray, admissionDetail]);
    dispatch(addFormData(admissionDetail));
    navigate("/StudentSheet");
    setShowForm(false);
  };
  

  console.log("typeofformDataArray);", formDataArray);

  const handleGuardianTypeChange = (e) => {
    setAdmissionDetail((prev) => {
      return { ...prev, guardian_type: e.target.value };
    });
  };

  return (
    <>
      {showForm && (
        <div className="main_admform">
          <h4 className="title">Student Admission</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-content-container">
              <div className=" adm_form">
                <label>
                  Admission Number<span className="required">*</span>:
                  <input
                    type="text"
                    name="adm_num"
                    value={admissionDetail.adm_num}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Roll Number<span className="required">*</span>:
                  <input
                    type="text"
                    name="rol_num"
                    value={admissionDetail.rol_num}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Class<span className="required">*</span>:
                  <select
                    value={admissionDetail.class}
                    onChange={handleClassChange}
                  >
                    <option value="">Select Class</option>
                    {ItemTypes.map((classes, index) => (
                      <option key={index} value={classes.Class}>
                        {classes.Class}
                      </option>
                    ))}
                  </select>
                </label>
                <br />
                <label>
                  Section<span className="required">*</span>:
                  <select
                    value={admissionDetail.sec}
                    onChange={handleSectionChange}
                    disabled={admissionDetail.class === ""}
                  >
                    <option value="">Select Section</option>
                    {ItemTypes.find(
                      (item) => item.Class === admissionDetail.class
                    )?.Sections.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
                <br />
                <label>
                  First Name<span className="required">*</span>:
                  <input
                    type="text"
                    name="fname"
                    value={admissionDetail.fname}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Last Name<span className="required">*</span>:
                  <input
                    type="text"
                    name="lname"
                    value={admissionDetail.lname}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Gender<span className="required">*</span>:
                  <select
                    name="gender"
                    value={admissionDetail.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </label>
                <br />
                <label>
                  DOB<span className="required">*</span>:
                  <input
                    type="date"
                    name="dob"
                    value={admissionDetail.dob}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Category<span className="required">*</span>:
                  <input
                    type="text"
                    name="catg"
                    value={admissionDetail.catg}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Religion<span className="required">*</span>:
                  <input
                    type="text"
                    name="relig"
                    value={admissionDetail.relig}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Cast<span className="required">*</span>:
                  <input
                    type="text"
                    name="cast"
                    value={admissionDetail.cast}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Mobile Number<span className="required">*</span>:
                  <input
                    type="text"
                    name="mob_num"
                    value={admissionDetail.mob_num}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Email<span className="required">*</span>:
                  <input
                    type="email"
                    name="email"
                    value={admissionDetail.email}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Admission Number<span className="required">*</span>:
                  <input
                    type="text"
                    name="Adm_num"
                    value={admissionDetail.Adm_num}
                    onChange={handleInputChange}
                  />
                </label>
                <br />
                <label>
                  Student Picture<span className="required">*</span>:
                  <input
                    type="file"
                    name="student_pic"
                    onChange={handleInputChange}
                  />
                </label>
                <label >
                  Blood Group<span className="required">*</span>:
                <select
                  name="blood_grup"
                  value={admissionDetail.blood_grup}
                  onChange={handleInputChange}
                >
                  <option value="">Select Blood Group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                </label>    
                <br />
              </div>

              <div className="Gurdin_Sec">
                <h4 className="title">Parent Guardian Detail</h4>
                <div className="Father_sec">
                  <label>
                    Father Name<span className="required">*</span>:
                    <input
                      type="text"
                      name="father_name"
                      value={admissionDetail.father_name}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Father Phone<span className="required">*</span>:
                    <input
                      type="text"
                      name="father_phone"
                      value={admissionDetail.father_phone}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Father Occupation<span className="required">*</span>:
                    <input
                      type="text"
                      name="father_occupation"
                      value={admissionDetail.father_occupation}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Father Photo<span className="required">*</span>:
                    <input
                      type="file"
                      name="father_photo"
                      onChange={handleInputChange}
                    />
                    {admissionDetail.father_photo && (
                      <p>File chosen: {admissionDetail.father_photo.name}</p>
                    )}
                  </label>
                  <label>
                    Mother Name<span className="required">*</span>:
                    <input
                      type="text"
                      name="mother_name"
                      value={admissionDetail.mother_name}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Mother Phone<span className="required">*</span>:
                    <input
                      type="text"
                      name="mother_phone"
                      value={admissionDetail.mother_phone}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Mother Occupation<span className="required">*</span>:
                    <input
                      type="text"
                      name="mother_occupation"
                      value={admissionDetail.mother_occupation}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    Mother Photo:
                    <input
                      type="file"
                      name="mother_photo"
                      onChange={handleInputChange}
                    />
                    {admissionDetail.mother_photo && (
                      <p>File chosen: {admissionDetail.mother_photo.name}</p>
                    )}
                  </label>
                </div>
              </div>

              <div className="adm_form">
                <label>
                  Guardian Type<span className="required">*</span>:
                  <select
                    value={admissionDetail.guardian_type}
                    onChange={handleGuardianTypeChange}
                  >
                    <option value="">Select Guardian</option>
                    <option value="father">Father</option>
                    <option value="mother">Mother</option>
                    <option value="other">Other</option>
                  </select>
                </label>
                {admissionDetail.guardian_type === "father" && (
                  <>
                    <label>
                      Guardian Name<span className="required">*</span>:
                      <input
                        type="text"
                        placeholder="Father Name"
                        name="guardian_name"
                        value={admissionDetail.guardian_name}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Guardian Phone<span className="required">*</span>:
                      <input
                        type="text"
                        name="guardian_phone"
                        value={admissionDetail.guardian_phone}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Guardian Occupation<span className="required">*</span>:
                      <input
                        type="text"
                        name="guardian_occupation"
                        value={admissionDetail.guardian_occupation}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Guardian Email<span className="required">*</span>:
                      <input
                        type="email"
                        name="guardian_email"
                        value={admissionDetail.guardian_email}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Guardian Photo<span className="required">*</span>:
                      <input
                        type="file"
                        name="guardian_photo"
                        onChange={handleInputChange}
                      />
                      {admissionDetail.guardian_photo && (
                        <p>
                          File chosen: {admissionDetail.guardian_photo.name}
                        </p>
                      )}
                    </label>
                  </>
                )}
                {admissionDetail.guardian_type === "mother" && (
                  <>
                    <label>
                      Guardian Name<span className="required">*</span>:
                      <input
                        type="text"
                        placeholder="Mother Name"
                        name="guardian_name"
                        value={admissionDetail.guardian_name}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Guardian Phone:
                      <input
                        type="text"
                        name="guardian_phone"
                        value={admissionDetail.guardian_phone}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Guardian Occupation<span className="required">*</span>:
                      <input
                        type="text"
                        name="guardian_occupation"
                        value={admissionDetail.guardian_occupation}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Guardian Email<span className="required">*</span>:
                      <input
                        type="email"
                        name="guardian_email"
                        value={admissionDetail.guardian_email}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Guardian Photo<span className="required">*</span>:
                      <input
                        type="file"
                        name="guardian_photo"
                        onChange={handleInputChange}
                      />
                      {admissionDetail.guardian_photo && (
                        <p>
                          File chosen: {admissionDetail.guardian_photo.name}
                        </p>
                      )}
                    </label>
                  </>
                )}
                {admissionDetail.guardian_type === "other" && (
                  <>
                    <label>
                      Guardian Name<span className="required">*</span>:
                      <input
                        type="text"
                        name="guardian_name"
                        value={admissionDetail.guardian_name}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Guardian Relation<span className="required">*</span>:
                      <input
                        type="text"
                        name="guardian_relation"
                        value={admissionDetail.guardian_relation}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Guardian Phone<span className="required">*</span>:
                      <input
                        type="text"
                        name="guardian_phone"
                        value={admissionDetail.guardian_phone}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Guardian Occupation<span className="required">*</span>:
                      <input
                        type="text"
                        name="guardian_occupation"
                        value={admissionDetail.guardian_occupation}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Guardian Email<span className="required">*</span>:
                      <input
                        type="email"
                        name="guardian_email"
                        value={admissionDetail.guardian_email}
                        onChange={handleInputChange}
                      />
                    </label>
                    <label>
                      Guardian Photo<span className="required">*</span>:
                      <input
                        type="file"
                        name="guardian_photo"
                        onChange={handleInputChange}
                      />
                      {admissionDetail.guardian_photo && (
                        <p>
                          File chosen: {admissionDetail.guardian_photo.name}
                        </p>
                      )}
                    </label>
                  </>
                )}
              </div>
              <br />
            </div>
            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AdmissionForm;
