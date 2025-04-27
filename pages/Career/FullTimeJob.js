import React, { Component } from 'react'
import Navbar from '../../components/Layout/Navbar'
import Footer from '../../components/Layout/Footer'
import FeedbackStyleOne from '../../components/Common/FeedbackStyleOne'
import CareerContent from '../../components/Career/CareerContent'
import { FulltimeJobDetails, InternItems, fullTimeJobItems } from '../../components/Career/CareerData'

export default class FullTimeJob extends Component {
  render() {

    const jobDetails = {
        jobType: "Full Time Jobs",
        description: "Elevate your career with NamlSoft as a full-time IT professional. Collaborate with a team dedicated to simplifying operations and tackling real-world challenges through cutting-edge digital solutions. Join us in shaping the future of technology and making a meaningful impact in the world."};

      
    return (
        <>
        <Navbar />
        

        <CareerContent 
   data={fullTimeJobItems}
   jobDetails={jobDetails}
   jobDetailsList={FulltimeJobDetails}
   />

        <Footer />
    </>
    )
  }
}
