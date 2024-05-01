
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import './StudentSheet.css';
import AdmissionForm from '../StudentForm/AdmissionForm';
import { SetStudentDetails } from '../../slice/studentSlice'; // Import the action creator

const StudentSheet = () => {
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);
  const admissionDetails = useSelector((state) => state.studentSlice.StudentDetails);
  const dispatch = useDispatch(); // Get the dispatch function
  console.log("dddd",admissionDetails);  
  const handleAddStudent = () => {
    setShowAdmissionForm(!showAdmissionForm);
  };

  const handleSubmitForm = (newStudentData) => {
    // Dispatch an action to update the student details in the Redux store
    dispatch(SetStudentDetails(newStudentData));
    // Hide the admission form after submission
    setShowAdmissionForm(false);
  };

  return (
    <div className="sheet-container">
      <div className="header">
        <h2 className="sheet-heading">Student Information</h2>
        <button className="add-student-btn" onClick={handleAddStudent}>
          Add Student
        </button>
      </div>
      {showAdmissionForm && <AdmissionForm onSubmit={handleSubmitForm} />} {/* Pass the submit handler */}
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
            {Array.isArray(admissionDetails) && admissionDetails.map((student) => (
              <tr key={student.id}>
                <td>
                  {student.fname} {student.lname}
                </td>
                <td>{student.class}</td>
                <td>{student.sec}</td>
                <td>{student.rol_num}</td>
                <td>{student.father_name} / {student.mother_name}</td>
                <td>{student.father_phone} / {student.mother_phone}</td>
                <td>{student.fee_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentSheet;
