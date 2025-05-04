import React from 'react';
import '../styles/bootstrap.min.css';
// import("bootstrap")
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import '../styles/animate.min.css';
import '../styles/flaticon.css';
import '../styles/boxicons.min.css';
import '../styles/fontawesome.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../styles/style.css';
import '../styles/responsive.css';
import App from 'next/app';
import Head from 'next/head';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';
import CookieBanner from '../components/Common/CookieBanner';
import { I18nextProvider } from 'react-i18next';
import i18n from '../components/i18nFiles/i18n';



export default class MyApp extends App {

    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <>
         <Head>
    <title>NamlSoft LLP | Innovative Digital Solutions and Services</title> 
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="NamlSoft Consultancy Services offers innovative digital solutions and services, including software development, cloud computing, IT consulting, and more, to help businesses achieve their goals." />
    <meta name="keywords" content="IT solutions,digital solutions, software development, cloud computing, IT consulting, business solutions, technology services, software products, IT support, enterprise solutions, custom software, mobile app development, web development, data analytics, cybersecurity, artificial intelligence, machine learning, digital transformation, agile development, IT outsourcing, Pune, India, USA, NamlSoft, IT consultancy, IT services, technology innovation, SaaS, cloud solutions" />
    <meta name="author" content="NamlSoft Consultancy Services" />
    <link rel="canonical" href="https://namlsoft.com/" />
            </Head>
                <I18nextProvider i18n={i18n}>
                <Component {...pageProps} />

                <CookieBanner/>
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
                </I18nextProvider>
            </>
        );
    }
}