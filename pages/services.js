import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleOne from '../components/Services/ServicesStyleOne';
import Footer from '../components/Layout/Footer';

class Services extends Component {
    render() {
        return (
            <>
                <Navbar />

                {/* <PageBanner 
                    pageTitle="Services" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Services" 
                    bgImage="item-bg-2" 
                />  */}

                <ServicesStyleOne />
                
                <Footer />
            </>
        );
    }
}

export default Services;