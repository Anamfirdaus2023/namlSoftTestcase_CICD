import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
import { FeatureRecordsData } from './KeyFeaturesData';
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

const data = [
    {
        productImg: "/images/home-one/MRP1.png",
        description: "MatRecord is an advanced Electronic Medical Records (EMR) software designed specifically for gynecologists, nursing homes, and hospitals. Seamlessly manage patient records, Obstetric Record details, OPD Record details, baby birth records, and medical documents. Key features include detailed ANC patient information, delivery records, and a secure cloud storage solution",
        visionTitle: "MatRecord EMR for gynecologists, nursing homes & hospitals.",
        btnText: "Get Started",
        btnLink: "/contact",
        images: [
            { src: "/images/home-one/home-1-shape.png", alt: "Image", className: "" },
            { src: "/images/home-one/home-1-img1.png", alt: "Image", className: "banner-img" }
        ]
    },
    {
        productImg: "/images/home-one/MRP2.png",
        description: "Discover the future of healthcare management with MatRecord, the ultimate EMR software tailored for gynecologists and hospitals. Effortlessly manage patient and birth records with our secure cloud solution. Book your free demo now to experience seamless medical documentation and exceptional patient care!",
        visionTitle: "Schedule a Free Demo Today!",
        btnText: "Get Started",
        btnLink: "/contact",
        images: [
            { src: "/images/home-one/home-1-shape.png", alt: "Image", className: "" },
            { src: "/images/home-one/home-1-img1.png", alt: "Image", className: "banner-img" }
        ]
    },
    {
        productImg: "/images/home-one/MRP1.png", 
        description: "Experience the future of healthcare with MatRecord, the premier EMR software for gynecologists and hospitals. Effortlessly manage patient and birth records with our secure cloud solution. Book your free demo now and elevate your patient care!",
        visionTitle: "Unlock Advanced Healthcare Management – Book Your Free Demo Now!",
        btnText: "Get Started",
        btnLink: "/contact",
        images: [
            { src: "/images/home-one/home-1-shape.png", alt: "Image", className: "" },
            { src: "/images/home-one/home-1-img1.png", alt: "Image", className: "banner-img" }
        ]
    },
];

export default class MTR_LandingPage extends Component {
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
    const {  openModal } = this.props;
    
    return (
        <>
        <div className="main-banner-area ">
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
                                            <div className="row align-items-center">
                                                <div className="col-md-6 col-sm-12">
                                                <div className="main-banner-vision top-0 ">
                                                    <h1 className={ isVisible ? "animated fadeInUp text-start" : ''} style={{fontSize:"50px"}}>
                                                        {item.visionTitle}
                                                    </h1>
                                                     <p className={isVisible ? "animated fadeInUp text-capitalize text-start" : ''}>
                                                    {item.description}
                                                </p>
                                                </div>


                                                {item.btnText && item.btnLink && (
                                                    <div className={` banner-btn cursor-pointer text-start ${isVisible ? "animated fadeInUp" : ''}`}>
                                                        <a  className='mx-auto' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                            <a className="default-btn">{item.btnText}</a>
                                                        </a>
                                                    </div>
                                                )}


                                                </div>
                                                <div className="col-md-6 col-sm-12">

                                                <div className="services-details-video">
                                    <div className="details-image mb-0" style={{height:"450px"}}>
                                        <img
                                            src={item.productImg}
                                            alt={item.productImg}
                                            style={{height:"100%" , width:"100%" , objectFit:"cover" , objectPosition:"top"}}
                                        />
                                        <div className="details-video">
                                            <div
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    openModal();
                                                }}
                                                className="video-btn popup-youtube"
                                            >
                                                <i className="bx bx-play"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                                </div>
                                            </div>
                                             
                                                
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

<div className="container ptb-50">
<h2 className="heading mb-5" style={{fontSize:"2rem"}}>
                Key  <span>Features</span>
                  <div className="bar mt-2"></div>
      </h2>

    <div className="row my-3 justify-content-center">
        {FeatureRecordsData.map((record, index) => (
          <div key={index} className="col-xl-4 col-md-6 col-sm-12 col-12 mb-4">
            <div className={`keyFeature-card keyFeature-card-${index + 1}`}>
              <div className="py-3 px-2">
                <div className="text-center mb-4 Tag">
                  <h4>{record.title}</h4>
                </div>
                <div className="row">
                  {record.features.map((feature, idx) => (
                    <div className="col-md-6 col-sm-6 mb-2" key={idx}>
                      <div className="feature-item">
                        <div className="details-video">

                        </div>
                        <div className="feature-icon">
                          <img src={feature.img} alt="" />
                        </div>
                        <p className="py-0 mx-0 w-100">{feature.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
</div>



        </>
    )
  }
}
