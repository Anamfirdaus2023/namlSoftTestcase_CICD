import React, { Component } from 'react';
import Navbar from '../../components/Layout/Navbar';

import Mat_Record from '../../components/Projects/Mat_Record';
import Footer from '../../components/Layout/Footer';
class Mat_record extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Mat_Record />

                <Footer />
            </>
        );
    }
}

export default Mat_record;
