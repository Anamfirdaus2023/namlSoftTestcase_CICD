import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
import JobCard from './JobCard';
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





export default class CareerContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          visibleCount: 3
        };
      }
    
      showMore = () => {
        this.setState((prevState) => ({
          visibleCount: prevState.visibleCount + 3
        }));
      }



    state = { 
        display: false    
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }



    
  render() {
    const { data ,    jobDetails , jobDetailsList} = this.props;
    const { visibleCount } = this.state;


    return (
        <>
        <div className="main-banner-area">
        {this.state.display ? <OwlCarousel 
            className="home-sliders owl-carousel owl-theme"
            {...options}
        >
 {data.map((item, index) => (
                    <div key={index} className={`home-item `} style={{backgroundImage:item.bgClass , backgroundPosition:"center"}}>
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50">
                                            <div className="main-banner-content" style={{maxWidth:"100%"}}>
                                                <div className="main-banner-vision top-0 ">
                                                    <h1 className={ isVisible ? "animated fadeInUp text-center" : ''} style={{fontSize:"50px"}}>
                                                        {item.visionTitle}
                                                    </h1>
                                                     <p className={isVisible ? "animated fadeInUp text-capitalize text-center" : ''}>
                                                    {item.description}
                                                </p>
                                                </div>


                                                {item.btnText && item.btnLink && (
                                                    <div className={` banner-btn text-center ${isVisible ? "animated fadeInUp" : ''}`}>
                                                        <Link href="#Section" className='mx-auto'>
                                                            <a className="default-btn">{item.btnText}</a>
                                                        </Link>
                                                    </div>
                                                )}

                                                
                                            </div>
                                            
                                            {/* <div className={`banner-image ${isVisible ? "animated fadeInUp" : ''}`}>
                                                {item.images.map((image, imgIndex) => (
                                                    <img key={imgIndex} src={image.src} alt={image.alt} className={image.className} />
                                                ))}
                                            </div> */}
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                ))}
     

          


        </OwlCarousel> : ''}
    </div>


    <div className='services-section career-section bg-color py-5'>
        <div className="container" id='Section'>
        <div className="section-title mb-4">
                        <h3 className=''>{jobDetails.jobType}</h3>
                        <p style={{maxWidth:"100%"}}> {jobDetails.description}</p>
                        <div className="bar"></div>

                    </div>
<div className="d-flex justify-content-center">
<div className="d-grid">
  {jobDetailsList.length > 0 ? (
    jobDetailsList.slice(0, visibleCount).map((job, index) => (
      <div key={index}>
        <JobCard
          jobTitle={job.jobTitle}
          jobLocation={job.jobLocation}
          jobId={job.jobId}
          jobType={job.jobType}
          skills={job.skills}
          index={index}
          issueDate={job.issueDate}
          rolesResponsibilities={job.rolesResponsibilities}
          
        />
      </div>
    ))
  ) : null}
</div>
{jobDetailsList.length === 0 && (
  <h1 className="text-center py-3">No job openings available at the moment.</h1>
)}
</div>
    
{visibleCount < jobDetailsList.length && (
<div className="text-center mt-4">
    <button onClick={this.showMore} className='btn default-btn'>See More</button>
</div>
        )}
    </div>
        </div>
        </>
    )
  }
}
