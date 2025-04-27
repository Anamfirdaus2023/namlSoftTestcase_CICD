import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';

class Signin extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <PageBanner 
                    pageTitle="Signin" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Signin" 
                    bgImage="item-bg-4" 
                /> 

                <div className="login-section ptb-100">
                    <div className="container">
                        <div className="login-form">
                            <div className="login-title">
                                <h3>Welcome Back!</h3>
                                <p>Please login to your account.</p>
                            </div>
                                
                            <form>
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password" /> 
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Keep me Sign In
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-group">
                                            <p className="forgot-password">
                                                <Link href="#">
                                                    <a>Forgot Password?</a>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-5">
                                        <div className="send-btn">
                                            <button type="submit" className="btn default-btn">Signin</button>
                                        </div>
                                    </div>

                                    <div className="col-7 pl-0">
                                        <span>Don't have account? <Link href="/signup"><a>Signup!</a></Link></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="default-shape">
                        <div className="shape-1">
                            <img src="/images/shape/shape4.png" alt="image" />
                        </div>
                        <div className="shape-2 rotateme">
                            <img src="/images/shape/shape5.svg" alt="image" />
                        </div>
                        <div className="shape-3">
                            <img src="/images/shape/shape6.svg" alt="image" />
                        </div>
                        <div className="shape-4">
                            <img src="/images/shape/shape7.png" alt="image" />
                        </div>
                        <div className="shape-5">
                            <img src="/images/shape/shape8.png" alt="image" />
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    }
}

export default Signin;