import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/About/AboutContent';
import FeedbackStyleOne from '../components/Common/FeedbackStyleOne';
import Footer from '../components/Layout/Footer';

class About extends Component {
    render() {
        return (
            <>
                <Navbar />

                {/* <PageBanner 
                    pageTitle="About 1" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="About 1" 
                    bgImage="item-bg-1" 
                />  */}

                <AboutContent />
           

                <div className="pb-100 d-none">
                    <FeedbackStyleOne />
                </div>
                <Footer />
            </>
        );
    }
}

export default About;