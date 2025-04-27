import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import BlogDetailsContent from '../components/Blog/BlogDetailsContent';

class BlogDetails extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <PageBanner 
                    pageTitle="Blog Details" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Blog Details" 
                    bgImage="item-bg-2" 
                /> 

                <BlogDetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default BlogDetails;