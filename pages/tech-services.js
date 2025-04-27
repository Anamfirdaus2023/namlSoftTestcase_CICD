import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsTech from '../components/Services/ServiceDetailsTech';
import Footer from '../components/Layout/Footer';

class TechServices extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <PageBanner 
                    pageTitle="" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Technology Based Services" 
                    bgImage="item-bg-3" 
                /> 

                <ServiceDetailsTech />
         
                <Footer />
            </>
        );
    }
}

export default TechServices;