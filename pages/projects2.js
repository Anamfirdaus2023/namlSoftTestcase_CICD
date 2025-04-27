import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectsStyleTwo from '../components/Projects/ProjectsStyleTwo';
import Footer from '../components/Layout/Footer';

class Projects2 extends Component {
    render() {
        return (
            <>
                <Navbar />
{/* 
                <PageBanner 
                    pageTitle="Portfolio" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Portfolio" 
                    bgImage="item-bg-3" 
                />  */}

                <ProjectsStyleTwo />
                
                <Footer />
            </>
        );
    }
}

export default Projects2;