import React, { Component } from 'react'
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
import ProgramHighlights from './ProgramHighlits';
import InternsTestamonial from '../../../pages/Programs/InternsTestamonial';
import ContactDialog from '../../../pages/Programs/ContactDilouge';
import { ChooseUs, PerformanceHightsData } from './InternshipData';

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

export default class InternshipContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialog: true, 
        };
      }

      // Open the dialog when button is clicked
  handleOpenDialog = () => {
    this.setState({ showDialog: true });
  };

  // Close the dialog
  handleCloseDialog = () => {
    this.setState({ showDialog: false });
  };

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
    const { data } = this.props;

    return (
      <div>
         <div className="main-banner-area" dir="ltr">
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
                                                        <a className='mx-auto' onClick={this.handleOpenDialog}>
                                                            <a className="default-btn" >{item.btnText}</a>
                                                        </a>
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
      <section className={``}>
    <div className="container">
    <div className="py-5 team4">
      <div className="container">
    
        <div className="section-title mb-4">
                            <h2>About the Program</h2>
                            <div className="bar mb-3"></div>

        <div className="row justify-content-between">

                            {/* <p className='col-md-7 col-12 text-start mx-0 my-2'>
With <span className="fw-bold text-dark">5 years of excellence</span> in software development, NamlSoft LLP is a trusted name in IT innovation and training. We have successfully trained <span className="fw-bold text-dark">50+ candidates</span>, with <span className="fw-bold text-dark">30+ students</span> securing jobs in top IT companies.

Led by  <span className="fw-bold ">Qamar Khan</span>, a seasoned IT expert with <span className='text-dark fw-bold'>18 years of experience in software development</span>, we ensure unparalleled technical guidance and mentorship for aspiring IT professionals. </p>
     */}
<div className="col-md-8 col-sm-12 col-12 text-start mx-0 my-2">
     <p className=''>
    <span className="fw-bold text-dark">NamlSoft LLP</span> has established itself as a  
     <span className="fw-bold text-dark"> leading name</span> in IT innovation, training, and career transformation. 
    We have successfully trained <span className="fw-bold text-dark">50+ aspiring professionals</span>, 
    with <span className="fw-bold text-dark">30+ students</span> securing jobs in 
    <span className="fw-bold text-dark"> top-tier IT companies</span>.  

    Led by <span className="fw-bold">Qamar Khan</span>, a 
    <span className="fw-bold text-dark"> renowned IT expert</span> with 
    <span className="fw-bold text-dark">18 years of hands-on experience</span> in software development, 
    we offer <span className="fw-bold text-dark">cutting-edge training</span>, 
    real-world project exposure, and personalized mentorship to help 
    <span className="fw-bold text-dark"> turn your passion for technology into a successful career</span>.  

    Whether you're a student or a recent graduate, our expert-driven approach ensures you gain 
    <span className="fw-bold text-dark"> industry-ready skills</span> and 
    <span className="fw-bold text-dark"> a competitive edge</span> in today’s evolving tech landscape.  
</p>
<h5 className="mt-3 fw-bold text-warning">How It Works?</h5>
<ul className='text-dark list-group'>
  <li className='mb-2' style={{ listStyle: 'none' }}>
    🔹 <span className="fw-bold text-dark">Enroll & Learn – </span> Join our training programs designed for engineers.
  </li>
  <li className='mb-2' style={{ listStyle: 'none' }}>
    🔹 <span className="fw-bold text-dark">Technical Mentorship – </span> Learn with guidance from  experts.
  </li>
  <li className='mb-2' style={{ listStyle: 'none' }}>
    🔹 <span className="fw-bold text-dark">Assignments – </span> Practice through structured and practical tasks.
  </li>
  <li className='mb-2' style={{ listStyle: 'none' }}>
    🔹 <span className="fw-bold text-dark">Build Tech Skills – </span> Strengthen your expertise with focused training.
  </li>
  <li className='mb-2' style={{ listStyle: 'none' }}>
    🔹 <span className="fw-bold text-dark">Hands-on Training – </span> Work on real-world projects & industry tools.
  </li>


  <li className='mb-2' style={{ listStyle: 'none' }}>
    🔹 <span className="fw-bold text-dark">Get Certified – </span> Earn a certification to boost your career.
  </li>
</ul>

</div>
<div className="col-md-3  col-sm-12">
                            <div className="single-team">
                                <div className="image">
                                    <img src="/images/team/QK.png" alt="image" />
                                </div>

                                <div className="content mt-0">
                                    <h3>Qamar Khan</h3>
                                    <span>Technical Guide & Mentor</span>

                                    <ul className="social">
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className='bx bxl-linkedin'></i>
                                            </a> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>  
                                              </div>
                        </div>
                        <ProgramHighlights 
                        Data={PerformanceHightsData}
                        title="Internship Highlights" 
                        description="Fast-track your career with practical training, expert mentorship, and real-world projects. Gain the skills top IT companies are looking for and turn your potential into success!" 
                        onOpenDialog={this.handleOpenDialog} // Pass the function as a prop

                        />
       
      </div>

    </div>
    
    </div>
    <InternsTestamonial/>

    <ContactDialog open={this.state.showDialog} onClose={this.handleCloseDialog} />

    <ProgramHighlights 
    Data={ChooseUs}
    title="Why Choose Us?" 
    description="Elevate your career with top-notch training and real-world experience." 
    onOpenDialog={this.handleOpenDialog} // Pass the function as a prop

    />


            </section>
      </div>
    )
  }
}
