import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import ServiceDevelopment from '../HomeOne/ServiceDevelopment';
import ServiceDetailsCloudContent from './ServiceDetailsCloud';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';



const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class ServiceDetailsContent extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <div className="services-details-area pt-70">

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo
                    channel='youtube'
                    isOpen={this.state.isOpen}
                    videoId='_ysd-zHamjk'
                    onClose={() => this.setState({ isOpen: false })}
                />
                {/* temt display is none 
                 */}
                 <div className="container">
                 <div className="text">
              <h3 className="heading">{t('We offer valuable services')}</h3>
              <p>
              {t('Transforming visions into digital reality: Expert web and mobile development, seamless software cloud services, and reliable cloud server solutions')}
              </p>
            </div>
                    <ServiceDevelopment/>
                    <ServiceDetailsCloudContent/>

                 </div>

                <div className="container d-none">
                    <div className="services-details-video">
                        <div className="details-image  d-none">
                            <img src="/images/service-details/services-details1.jpg" alt="image" />
                            <div className="details-video">
                                <div
                                    onClick={e => { e.preventDefault(); this.openModal() }}
                                    className="video-btn popup-youtube"
                                >
                                    <i className="bx bx-play"></i>
                                </div>
                            </div>
                        </div>

                        {/* <div className="text">
                            <h3 className='heading'>We Provide Useful Services</h3>
                            <p>A brand-new IT Product and Service company offering IT services and solution for manufacturing industry vertical, automotive, industrial, process equipment, electrical switchgears, plastic mould/tool manufacturers, personal care like Saloon industry.</p>
                        </div> */}
                    </div>

                    <div className="services-details-overview bor-tb mt-0">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3 className='heading fw-bold'>{t('Mobile Application Development')}</h3>
                                    <p>Expert mobile application development tailored to your business needs. We design , develop & maintain user-friendly apps that drive engagement and boost your brand's presence</p>

                                    <div className="features-text">
                                        <h4 className='fw-bold'>Cross Platform Android and iOS App </h4>
                                        <p>
                                            <div className="d-flex">
                                                <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                                                <div >                   React Native and Flutter Frameworks.
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                                                <div >Native Android Kotlin and iOS Swift App</div>
                                            </div>


                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image" style={{maxWidth:"400px", maxHeight:"400px"}}>
                                    <img src="/images/service-details/App.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview bor-tb">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src="/images/service-details/WebDev.png" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">

                                <div className="services-details-desc">
                                    <h3 className='heading fw-bold'>Web Application Development</h3>
                                    <p>Expert web application development tailored to your business needs. We create seamless, user-friendly web apps that drive engagement and boost your brand's presence</p>

                                    <div className="features-text">
                                        {/* <h4 className='fw-bold'>Web Application Development using different Technologies</h4> */}
                                        <p>
                                        <div className="d-flex">
                                                <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                                                <div >                                         
                                                e-Commerce platform &  integration platforms like Adobe eCommerce (Magneto).

                                                </div>
                                            </div>
                                        <div className="d-flex">
                                                <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                                                <div >                                         
                                                MERN Stack , Next js ,   PHP and Larval framworks , MySQL Databases.

                                                </div>
                                            </div>
                                     

                                          </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default ServiceDetailsContent;