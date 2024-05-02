
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import './StudentSheet.css';
import AdmissionForm from '../StudentForm/AdmissionForm';
import { addFormData, selectFormDataArray} from "../../slice/studentSlice";
import { deleteFormData } from "../../slice/studentSlice";
import { MdDeleteOutline } from "react-icons/md";

const StudentSheet = () => {
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);
  const [isHoveredIndex, setIsHoveredIndex] = useState(null);
  const formDataArray = useSelector(selectFormDataArray);
  const dispatch = useDispatch(); 
  console.log("studentSheet",formDataArray);  
  const handleAddStudent = () => {
    setShowAdmissionForm(!showAdmissionForm);
  };

  const handleSubmitForm = (newStudentData) => {
   
    dispatch(addFormData(newStudentData));
    setShowAdmissionForm(false);
  };

  const handleDelete = (index) => {
    dispatch(deleteFormData(index));
  };

  const handleMouseEnter = (index) => {
    setIsHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHoveredIndex(null);
  };

  return (
    <div className="sheet-container">
      <div className="header">
        <h2 className="sheet-heading">Student Information</h2>
        <button className="add-student-btn" onClick={handleAddStudent}>
          Add Student
        </button>
      </div>
      {showAdmissionForm && <AdmissionForm onSubmit={handleSubmitForm} />} 
      <div className="table-container">
        <table className="excel-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Class</th>
              <th>Section</th>
              <th>Roll Number</th>
              <th>Parents Name</th>
              <th>Parents Phone</th>
              <th>Fee Status</th>
            </tr>
          </thead>
          <tbody>
          {formDataArray && formDataArray.map((formData,index)=>{
              return(
                <tr 
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <td>{formData.fname} {formData.lname}</td>
                  <td>{formData.class}</td>
                  <td>{formData.sec}</td>
                  <td>{formData.rol_num}</td>
                  <td>{formData.father_name}</td>
                  <td>{formData.father_phone}</td>
                  <td>{formData.father_phone}</td>
                  <td className="delete-btn-container">
                {isHoveredIndex === index && (
                  <button className="delete-btn" onClick={() => handleDelete(index)}>
                    <MdDeleteOutline style={{ color: 'red' }} />
                  </button>
                )}
              </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentSheet;
