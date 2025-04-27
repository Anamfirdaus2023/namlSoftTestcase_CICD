import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProjectDetailsContent from '../components/Projects/ProjectDetailsContent';
import Footer from '../components/Layout/Footer';

class ProjectDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle="Project Details" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Project Details" 
                    bgImage="item-bg-1" 
                /> 

                <ProjectDetailsContent />

                <Footer />
            </>
        );
    }
}

export default ProjectDetails;