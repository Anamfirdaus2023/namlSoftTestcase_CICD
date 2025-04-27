import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectsStyleOne from '../components/Projects/ProjectsStyleOne';
import Footer from '../components/Layout/Footer';

class Projects extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Projects One" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Projects Style One" 
                    bgImage="item-bg-2" 
                /> 

                <ProjectsStyleOne />
                
                <Footer />
            </>
        );
    }
}

export default Projects;