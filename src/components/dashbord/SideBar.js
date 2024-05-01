import React, { useState } from "react";
import './SideBar.css'
import { MdDashboard } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { MdClass } from "react-icons/md";
import { BiIntersect } from "react-icons/bi";
import { FaIdCard } from "react-icons/fa";
import { FaIdCardClip } from "react-icons/fa6";
import { HiOutlineCollection } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdAddCircleOutline } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedFeeOption, setSelectedFeeOption] = useState("");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleFeeOptionChange = (option) => {
    setSelectedFeeOption(option);
  };

  return (
    <div className="dashboard-container">

        <div className="dash">
                <p>Dashboard</p>
            </div>
       
            <hr />
        <div className="upper">
            <Link to='/dashboard'> 
                <div className="newww main">
                    <p>Overview</p>
                    <span><MdDashboard /></span>
                </div> 
            </Link>
            
            <Link to='studentSheet'>
                <div className="stu main">
                    <p>Student</p>
                    <span><PiStudentBold /></span>
                </div>
            </Link>
            <Link to='parents'>
                <div className="parnts main">
                    <p>Parents</p>
                    <RiParentFill />
                </div>
            </Link>
        </div>
        <div className="acdm">
            <p className="title" >Academy</p>
            <div className="acad_inner">

                <Link to='class'>
                    <div className=" main clas">
                        <p>Class</p>
                        <span><MdClass /></span>
                    </div>
                </Link>
                <Link to='section'>
                    <div className=" main clas">
                        <p>Section</p>
                        <span><BiIntersect /></span>
                    </div>
                </Link>
                <Link to='idcard'>
                    <div className=" main clas">
                        <p>Id Card's</p>
                        <span><FaIdCardClip /></span>
                    </div>
                </Link>
                <Link to='admitcard'>
                    <div className=" main clas">
                        <p>Admit Card</p>
                        <span><FaIdCard /></span>
                    </div>
                </Link>
            </div>
        </div>
        <div className="feesec">
            <p className="title">Fee</p>
            <div className="fee_inner">
                <Link to='collection'>
                <div className=" main clas">
                    <p>Collection</p>
                    <span><HiOutlineCollection /></span>
                </div>
                </Link>
                <Link to='payments'>
                <div className=" main fe">
                    <p>Add Payment's</p>
                    <span><MdAddCircleOutline /></span>
                </div>
                </Link>
                <Link to='viewfee'>
                <div className=" main fe">
                    <p>View Fee</p>
                    <span><MdOutlinePayments /></span>
                </div>
                </Link>
                <Link to='fee_groups'>
                <div className=" main fe">
                    <p>Fee Groups</p>
                    <span><RiMoneyRupeeCircleFill /></span>
                </div>
                </Link>
                <Link to='payment_history'>
                <div className=" main fe">
                    <p>Payment History</p>
                    <span><MdPayments /></span>
                </div>
                </Link>
                <Link to='logout'>
                <div className="log_btn">
                    <button className="l-btn">Logout</button>
                </div>
                </Link>
            </div>
        </div>

     
    </div>
  );
};

export default SideBar;
