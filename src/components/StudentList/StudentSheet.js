import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './StudentSheet.css';
import AdmissionForm from '../StudentForm/AdmissionForm';

const StudentSheet = () => {
  const [showAdmissionForm, setShowAdmissionForm] = useState(false);
  const AdmitionDetails = useSelector((state) => state.studentSlice.StudentDetails);

  const handleAddStudent = () => {
    setShowAdmissionForm(true);
  };

  return (
    <div className="sheet-container">
      <div className="header">
        <h2 className="sheet-heading">Student Information</h2>
        <button className="add-student-btn" onClick={handleAddStudent}>
          Add Student
        </button>
      </div>
      {showAdmissionForm && <AdmissionForm />}
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
            {AdmitionDetails.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email.split('@')[0]}</td>
                <td>{student.email.split('@')[1]}</td>
                <td>{student.id}</td>
                <td>{student.company.name}</td>
                <td>{student.phone}</td>
                <td>{student.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentSheet;