import React, { Component } from 'react';
import Link from 'next/link';

class ProjectDetailsContent extends Component {
    render() {
        return (
            <section className="project-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src="/images/service-details/services-details2.jpg" alt="projects" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="project-details-image">
                                <img src="/images/service-details/services-details3.jpg" alt="projects" />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="projects-details-desc">
                                <h3>Competitor Analysis</h3>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> Core Development</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p>
                                </div>

                                <div className="features-text">
                                    <h4><i className="flaticon-tick"></i> Define Your Choices</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                                </div>

                                <p>Nost rud no eos, no impedit dissenti as mea, ea vide labor amus neglegentur vix. Ancillae intellegat vix et. Sit causae laoreet nolu ise. Ad po exerci nusquam eos te. Cu altera expet enda qui, munere oblique theo phrastu ea vix. Ne nec modus civibus modera tius, sit ei lorem doctus. Ne docen di verterem reformidans eos. Cu altera expetenda qui, munere oblique theophr astus ea vix modus civiu mod eratius.</p>

                                <div className="project-details-info">
                                    <div className="single-info-box">
                                        <h4>Client</h4>
                                        <span>James Anderson</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Category</h4>
                                        <span>Network, Marketing</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Date</h4>
                                        <span>February 28, 2020</span>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Share</h4>
                                        <ul className="social">
                                            <li>
                                                <a href="https://www.linkedin.com/" target="_blank">
                                                    <i className='bx bxl-linkedin'></i>
                                                </a> 
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank">
                                                    <i className='bx bxl-facebook'></i>
                                                </a> 
                                            </li>
                                            <li> 
                                                <a href="https://www.twitter.com/" target="_blank">
                                                    <i className='bx bxl-twitter'></i>
                                                </a> 
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/" target="_blank">
                                                    <i className='bx bxl-instagram'></i>
                                                </a> 
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="single-info-box">
                                        <Link href="#">
                                            <a className="default-btn" target="_blank">Live Preview</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectDetailsContent;