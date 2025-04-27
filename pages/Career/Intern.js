import React, { Component } from 'react'
import Navbar from '../../components/Layout/Navbar'
import Footer from '../../components/Layout/Footer'
import FeedbackStyleOne from '../../components/Common/FeedbackStyleOne'
import CareerContent from '../../components/Career/CareerContent'
import { InternItems, internshipJobDetails } from '../../components/Career/CareerData'



export default class Intern extends Component {
  render() {
    const jobDetails = {
        jobType: "Internship",
        description: "Join our dynamic IT internship program at NamlSoft , where we aspire to be your trusted digital solutions partner. Our internship is designed to simplify operations and effectively solve real-world challenges. As an intern, you'll have the opportunity to work on innovative projects, gain hands-on experience with cutting-edge technologies, and collaborate with industry experts. We are committed to empowering you with the skills and knowledge needed to excel in the fast-paced world of IT. Start your journey with us and transform your passion for technology into a successful career."
      };

      
    return (
        <>
        <Navbar />
        

   <CareerContent 
   data={InternItems}
   jobDetails={jobDetails}
   jobDetailsList={internshipJobDetails}

   />

        <Footer />
    </>
    )
  }
}
