import React from 'react'
import HeroSection from '../hero_section/HeroSection'
import './Dashbord.css'
import StudentList from '../StudentList/StudentList'

const Dashboard = () => {
  return (
    <div>
      <div className="hero">
          <HeroSection/>
      </div>
      <div className="some_students">
          <StudentList/>
      </div>
    </div>
  )
}

export default Dashboard
