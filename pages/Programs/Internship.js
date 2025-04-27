

import React, { Component } from 'react'
import Navbar from '../../components/Layout/Navbar'
import Footer from '../../components/Layout/Footer'
import InternshipContent from '../../components/program/intership/InternshipContent'
import { InternshipData } from '../../components/program/intership/InternshipData'



export default class Internship extends Component {
  render() {
      
    return (
        <>
        <Navbar />
        

   <InternshipContent 
   data={InternshipData}
   />


        <Footer />
    </>
    )
  }
}
