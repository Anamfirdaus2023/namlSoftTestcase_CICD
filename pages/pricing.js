import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PricingCard from '../components/Pricing/PricingCard';
import DigitalExperience from '../components/Common/DigitalExperience';
import Footer from '../components/Layout/Footer';

class Pricing extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Pricing" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Pricing" 
                    bgImage="item-bg-3" 
                /> 
                
                <PricingCard />

                <div className="ptb-100">
                    <DigitalExperience />
                </div>

                <Footer />
            </>
        );
    }
}

export default Pricing;