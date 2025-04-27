import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Layout/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />

                {/* <PageBanner 
                    pageTitle="Contact" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Contact" 
                    bgImage="item-bg-1" 
                />  */}
                
                <ContactInfo />

                <div className="pb-100">
                    <ContactForm />
                </div>

                <Footer />
            </>
        );
    }
}

export default Contact;