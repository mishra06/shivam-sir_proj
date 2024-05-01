import React from 'react'
import HeroSection from '../hero_section/HeroSection'
import './Dashbord.css'
// import StudentList from '../StudentList/StudentList'
import StudentSheet from '../StudentList/StudentSheet'

const Dashboard = () => {
  return (
    <div>
      <div className="hero">
          <HeroSection/>
      </div>
      <div className="some_students">
          <StudentSheet/>
      </div>
    </div>
  )
}

export default Dashboard
