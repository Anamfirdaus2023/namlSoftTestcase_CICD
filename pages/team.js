import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TeamCard from '../components/Team/TeamCard';
import Footer from '../components/Layout/Footer';

class Team extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Team" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Team" 
                    bgImage="item-bg-2" 
                /> 

                <TeamCard />
                
                <Footer />
            </>
        );
    }
}

export default Team;