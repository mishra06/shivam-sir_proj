import React from 'react'
import './Herosec.css';
import { FaRupeeSign } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className='hero_inner'>
      <div className='hero_inner_div first'>
        <p>Total Class</p>
        <span>6</span>
      </div>
      <div className='hero_inner_div second'>
        <p>Total Student</p>
        <span>456</span>
      </div>
      <div className='hero_inner_div third'>
        <p>Total Payment</p>
        <span> < FaRupeeSign/>35000</span>
      </div>
    </div>
  )
}

export default HeroSection
