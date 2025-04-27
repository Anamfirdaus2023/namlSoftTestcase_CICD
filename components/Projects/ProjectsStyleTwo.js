import React, { Component } from 'react';
import Link from 'next/link';

class ProjectsStyleTwo extends Component {
    render() {
        return (
            <section className="protfolio-section ptb-200">
                <div className="container">
                    <div className="section-title">
                        <h2>Our <span>Impressive</span> Portfolio</h2>
                        <p>Explore our portfolio and witness the embodiment of innovation, creativity, and excellence. Each project tells a story of customized solutions, impeccable design, and tangible results, showcasing our commitment to transforming visions into reality.</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-protfolio">
                                <div className="image">
                                    <Link href="/service-details">
                                        <a>
                                            <img src="/images/portfolio/portfolio1.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/service-details">
                                        <a>
                                            <h3>Application Development and Maintenance</h3>
                                            <span>Mobile Application &  </span>
                                            <span>Web Application </span> 
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-protfolio">
                                <div className="image">
                                    <Link href="/service-details-cloud">
                                        <a>
                                            <img src="/images/portfolio/portfolio2.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                     <Link href="/service-details-cloud">
                                        <a>
                                            <h3>AWS Cloud Solutions <span className=""style={{visibility:"hidden"}}>and Maintenance</span></h3>
                                            <span>Software Services  & </span>
                                            <span>Cloud Server Services</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-protfolio">
                                <div className="image">
                                    <Link href="/tech-services">
                                        <a>
                                            <img src="/images/portfolio/portfolio3.png" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/tech-services">
                                        <a>
                                            <h3>Technology Services <span className=""style={{visibility:"hidden"}}>and Maintenance</span></h3>
                                            <span>Adobe</span>
                                            <span>Salesforce Services</span>
                                        </a>
                                    </Link>
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

export default ProjectsStyleTwo;