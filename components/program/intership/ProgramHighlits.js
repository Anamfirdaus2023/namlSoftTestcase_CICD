import React, { Component } from "react";

class ProgramHighlights extends Component {
    render() {
        const { Data, title, description , onOpenDialog  } = this.props;

        return (
            <>
                <section className="container py-3 mb-3">
                    {/* Section Title */}
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="fw-bold">{title} </h2>
                            <p className="text-muted">{description} <span onClick={onOpenDialog} style={{cursor:'pointer'}} className="text-default fw-bold text-primary text-decoration-underline cursor pe-auto">Click Here To Enroll</span> </p>
                        </div>
                    </div>

                    {/* Cards Section */}
                    <div className="row g-4 mt-4">
                        {Data.map((item, index) => (
                            <div className="col-md-6 col-lg-4" key={index}>
                                {/* Apply hover effect class here */}
                                <div className="card shadow-sm p-4 border-0 text-center card-hover">
                                    <i className={`${item.icon} fa-2x ${item.color}`}></i>
                                    <h5 className="fw-bold mt-3">{item.title}</h5>
                                    <p className="text-muted">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hover Effect Styles */}
                <style>{`
                    .card-hover {
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                    }
                    .card-hover:hover {
                        transform: scale(1.05);
                        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
                        border:0.2px solid gray !important;
                    }
                `}</style>
            </>
        );
    }
}

export default ProgramHighlights;
