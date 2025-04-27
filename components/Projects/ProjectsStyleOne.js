import React, { Component } from 'react';
import Link from 'next/link';

class ProjectsStyleOne extends Component {
    render() {
        return (
            <section className="projects-section pt-100 pb-70">
                <div className="container-fluid mw-1920">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects">
                                <div className="projects-image">
                                    <img src="/images/projects/project1.jpg" alt="image" />
                                </div>

                                <div className="projects-content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>App Update & Rebrand</h3>
                                        </a>
                                    </Link>
                                    
                                    <Link href="/project-details">
                                        <a>
                                            <span>Research and startup</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects">
                                <div className="projects-image">
                                    <img src="/images/projects/project2.jpg" alt="image" />
                                </div>

                                <div className="projects-content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>IT Consultancy</h3>
                                        </a>
                                    </Link>

                                    <Link href="/project-details">
                                        <a>
                                            <span>Research and startup</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="single-projects">
                                <div className="projects-image">
                                    <img src="/images/projects/project3.jpg" alt="image" />
                                </div>

                                <div className="projects-content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>Digital Marketing</h3>
                                        </a>
                                    </Link>

                                    <Link href="/project-details">
                                        <a>
                                            <span>Research and startup</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="single-projects">
                                <div className="projects-image">
                                    <img src="/images/projects/project4.jpg" alt="image" />
                                </div>

                                <div className="projects-content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>App Development</h3>
                                        </a>
                                    </Link>

                                    <Link href="/project-details">
                                        <a>
                                            <span>Research and startup</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects">
                                <div className="projects-image">
                                    <img src="/images/projects/project5.jpg" alt="image" />
                                </div>

                                <div className="projects-content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>IT Solutions</h3>
                                        </a>
                                    </Link>

                                    <Link href="/project-details">
                                        <a>
                                            <span>Research and startup</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-projects">
                                <div className="projects-image">
                                    <img src="/images/projects/project6.jpg" alt="image" />
                                </div>

                                <div className="projects-content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>Data Management</h3>
                                        </a>
                                    </Link>

                                    <Link href="/project-details">
                                        <a>
                                            <span>Research and startup</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects">
                                <div className="projects-image">
                                    <img src="/images/projects/project7.jpg" alt="image" />
                                </div>

                                <div className="projects-content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>E-commerce Development</h3>
                                        </a>
                                    </Link>

                                    <Link href="/project-details">
                                        <a>
                                            <span>Research and startup</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectsStyleOne;