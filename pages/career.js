import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import AboutContent from '../components/About/AboutContent';
import FeedbackStyleOne from '../components/Common/FeedbackStyleOne';
import Footer from '../components/Layout/Footer';

export default class Career extends Component {
  render() {
    return (
        <>
            <Navbar />
            
            <AboutContent />
       

            <div className="pb-100 d-none">
                <FeedbackStyleOne />
            </div>
            <Footer />
        </>
    );
  }
}
