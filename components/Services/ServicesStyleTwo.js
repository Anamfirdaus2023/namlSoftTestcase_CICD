import React, { Component } from 'react';
import Link from 'next/link';

class ServicesStyleTwo extends Component {
    render() {
        return (
            <section className="agency-services-section ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>SEO  Agency <span>Services</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-agency">
                                <div className="image">
                                    <Link href="/service-details">
                                        <a>
                                            <img src="/images/agency-services/agn-service1.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/service-details">
                                        <a>
                                            <h3>Keyword Research</h3>
                                        </a>
                                    </Link>
                                    <span>Keyword</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-agency">
                                <div className="image">
                                    <Link href="/service-details">
                                        <a>
                                            <img src="/images/agency-services/agn-service2.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/service-details">
                                        <a>
                                            <h3>Digital Services</h3>
                                        </a>
                                    </Link>

                                    <span>Agency</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-agency">
                                <div className="image">
                                    <Link href="/service-details">
                                        <a>
                                            <img src="/images/agency-services/agn-service3.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/service-details">
                                        <a>
                                            <h3>Marketing Analysis</h3>
                                        </a>
                                    </Link>

                                    <span>Analysis</span>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-agency">
                                <div className="image">
                                    <Link href="/service-details">
                                        <a>
                                            <img src="/images/agency-services/agn-service5.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/service-details">
                                        <a>
                                            <h3>Marketing Agency</h3>
                                        </a>
                                    </Link>

                                    <span>Marketing</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-agency">
                                <div className="image">
                                    <Link href="/service-details">
                                        <a>
                                            <img src="/images/agency-services/agn-service6.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/service-details">
                                        <a>
                                            <h3>Data Analysis</h3>
                                        </a>
                                    </Link>

                                    <span>Explanation</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-agency">
                                <div className="image">
                                    <Link href="/service-details">
                                        <a>
                                            <img src="/images/agency-services/agn-service4.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/service-details">
                                        <a>
                                            <h3>Email Marketing</h3>
                                        </a>
                                    </Link>

                                    <span>Marketing</span>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <Link href="#">
                                    <a className="prev page-numbers">
                                        <i className="flaticon-left"></i>
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a className="page-numbers">1</a>
                                </Link>

                                <span className="page-numbers current" aria-current="page">2</span>

                                <Link href="#">
                                    <a className="page-numbers">3</a>
                                </Link>

                                <Link href="#">
                                    <a className="page-numbers">4</a>
                                </Link>

                                <Link href="#">
                                    <a className="next page-numbers">
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesStyleTwo;