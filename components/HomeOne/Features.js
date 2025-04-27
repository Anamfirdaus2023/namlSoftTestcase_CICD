import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <section className="features-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Creative Features</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="features-content">
                                <div className="icon">
                                    <i className="flaticon-blueprint"></i>
                                </div>
                                <h3>Great Design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="features-content">
                                <div className="icon">
                                    <i className="flaticon-update"></i>
                                </div>
                                <h3>Optimal Choice</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="features-content">
                                <div className="icon left-icon">
                                    <i className="flaticon-security"></i>
                                </div>
                                <h3>Finest Quality</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="features-content">
                                <div className="icon">
                                    <i className="flaticon-clock"></i>
                                </div>
                                <h3>Time Saving</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;