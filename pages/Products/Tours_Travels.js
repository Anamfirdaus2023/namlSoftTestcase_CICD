import React, { Component } from 'react'
import Navbar from '../../components/Layout/Navbar';
import NotFound from "../404"
import Footer from '../../components/Layout/Footer';

export default class Tours_Travels extends Component {
  render() {
    return (
        <>
        <Navbar />

        <div className="container pt-100">
       <NotFound/>
        </div>

        <Footer />
    </>
    )
  }
}
