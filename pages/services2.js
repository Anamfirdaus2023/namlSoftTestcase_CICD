import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleTwo from '../components/Services/ServicesStyleTwo';
import Footer from '../components/Layout/Footer';

class Services2 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Services Two" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Services Style Two" 
                    bgImage="item-bg-3" 
                /> 

                <ServicesStyleTwo />
                
                <Footer />
            </>
        );
    }
}

export default Services2;