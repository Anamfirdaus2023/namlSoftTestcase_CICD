import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-section ptb-100 d-none">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Choose Us</h2>
                        <p>because we don't just offer services; we deliver tailored solutions crafted with passion and expertise. With a commitment to innovation, security, and unparalleled user experiences, we transform your challenges into opportunities, making your success our priority.</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <div className="icon">
                                    <i className="flaticon-shared-folder"></i>
                                </div>
                                <h3>Consulting</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>

                            <div className="choose-content">
                                <div className="icon">
                                    <i className="flaticon-blog"></i>
                                </div>
                                <h3>Data Management</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>

                            <div className="choose-content">
                                <div className="icon">
                                    <i className="flaticon-quality"></i>
                                </div>
                                <h3>Page Ranking</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>

                            <div className="choose-content">
                                <div className="icon">
                                    <i className="flaticon-target"></i>
                                </div>
                                <h3>Location Targeting</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-image">
                                <img src="/images/choose.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChooseUs;