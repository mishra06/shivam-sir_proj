import React from 'react'

import { useSelector } from 'react-redux'

const StudentList = () => {

    const AdmitionDetails = useSelector((state)=>state.studentSlice.StudentDetails);
  return (
    <div>
        <h2>hello</h2>
      {
        AdmitionDetails.map((info,index)=>{
            return(
                <div key={index} className="informations">
                    <p>{info.fname}</p>
                    console.log(info.name);
                </div>
            )
        })
      }
    </div>
  )
}

export default StudentList

