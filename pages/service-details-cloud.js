import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsCloudContent from '../components/Services/ServiceDetailsCloud';
import Footer from '../components/Layout/Footer';

class ServiceDetailsCloud extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <PageBanner 
                    pageTitle="AWS Cloud Solutions" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="AWS Cloud Solutions" 
                    bgImage="item-bg-1" 
                /> 

                <ServiceDetailsCloudContent />
         
                <Footer />
            </>
        );
    }
}

export default ServiceDetailsCloud;