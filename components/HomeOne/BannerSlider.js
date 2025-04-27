import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 0,
    nav: true,
    mouseDrag: true,
    items: 1,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    autoplayHoverPause: true,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
}

class BannerSlider extends Component {

    state = { 
        display: false    
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <div className="main-banner-area">
                {this.state.display ? <OwlCarousel 
                    className="home-sliders owl-carousel owl-theme"
                    {...options}
                >
                    <div className="home-item item-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50">
                                            <div className="main-banner-content">
                                            <p
                                                    className={
                                                        isVisible ? "animated fadeInUp text-capitalize" : ''
                                                    }
                                                >
                                                    {/* Inspired IT Solutions, Empowering Success! */}
                                                    <span className=" fw-bold"> NamlSoft </span>
                          aspires to be become your trusted digital solutions partner, working on simplifying operations and effectively solving real-world challenges.
                                                </p>
                                                <div className="main-banner-vision" >
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp" : ''
                                                    }
                                                >
                                                    Make Real-Life Connections With IT
                                                </h1>

                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp text-capitalize" : ''
                                                    }
                                                >
                                                    {/* Inspired IT Solutions, Empowering Success! */}
                                                    Leveraging digital solutions to solve day to day problems 
                                                </p>
                                                </div>
                                                <div 
                                                    className={
                                                        `d-none banner-btn ${isVisible ? "animated fadeInUp" : ''}`
                                                    }
                                                >
                                                    <Link href="/contact" className="">
                                                        <a className="default-btn">Get Started</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            <div 
                                                className={
                                                    `banner-image ${isVisible ? "animated fadeInUp" : ''}`
                                                }
                                            >
                                                <img src="/images/home-one/home-1-shape.png" alt="Image" />
                                                <img src="/images/home-one/home-1-img1.png" className="banner-img" alt="image" />
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>

                    <div className="home-item item-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50">
                                            <div className="main-banner-content">
                                            <p
                                                    className={
                                                        isVisible ? "animated fadeInUp text-capitalize" : ''
                                                    }
                                                >
                                                    {/* Inspired IT Solutions, Empowering Success! */}
                                                    <span className=" fw-bold"> NamlSoft </span>
                          aspires to be become your trusted digital solutions partner, working on simplifying operations and effectively solving real-world challenges.
                                                </p>
                                                <div className="main-banner-vision" >
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp" : ''
                                                    }
                                                >
                                                    {/* Software & Development */}
                                                    Interactive Digital Solutions 
                                                </h1>

                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp text-capitalize" : ''
                                                    }
                                                >
                                                    
{/* Empowering Your Ideas, Transforming with Technology , Your Pathway to Innovative Software and App Solutions! */}
Connecting the dots between Real and Virtual World through interactive digital solutions 
                                                </p>
                                                </div>
                                                <div 
                                                    className={
                                                        `banner-btn ${isVisible ? "animated fadeInUp" : ''}`
                                                    }
                                                >
                                                   
                                                </div>
                                            </div>
                                            
                                            <div 
                                                className={
                                                    `banner-image ${isVisible ? "animated fadeInUp" : ''}`
                                                }
                                            >
                                                <img src="/images/home-one/home-1-shape.png" alt="Image" />
                                                <img src="/images/home-one/home-1-img2.png" className="banner-img" alt="image" />
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>

                    <div className="home-item item-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-2">
                                            <div className="main-banner-content">
                                            <p
                                                    className={
                                                        isVisible ? "animated fadeInUp text-capitalize" : ''
                                                    }
                                                >
                                                    {/* Inspired IT Solutions, Empowering Success! */}
                                                    <span className=" fw-bold">NamlSoft </span>
                          aspires to be become your trusted digital solutions partner, working on simplifying operations and effectively solving real-world challenges.
                                                </p>
                                                <div className="main-banner-vision" >
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInUp " : ''
                                                    }
                                                >
 {/* Cloud Solutions */}
 Digital Product And Solutions

                                                </h1>

                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInUp text-capitalize" : ''
                                                    }
                                                >
{/* Sky's Not the Limit - It's Just the Beginning: Elevate Your Business with Cutting-Edge Cloud Solutions!  */}           
Bridging the gap between virtual and real world through interactive digital solutions
</p> 
</div>
                                                
                                                <div 
                                                    className={
                                                        `banner-btn ${isVisible ? "animated fadeInUp" : ''}`
                                                    }
                                                >
                                                  
                                                </div>
                                            </div>
                                            
                                            <div 
                                                className={
                                                    `banner-image ${isVisible ? "animated fadeInUp" : ''}`
                                                }
                                            >
                                                <img src="/images/home-one/home-1-shape.png" alt="Image" />
                                                <img src="/images/home-one/home-1-img3.png" className="banner-img" alt="image" />
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        );
    }
}

export default BannerSlider;