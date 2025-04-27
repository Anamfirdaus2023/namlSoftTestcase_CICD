import React, { Component } from "react";
import dynamic from "next/dynamic";
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';


const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

class ServiceDetailsTech extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <div className="services-details-area pt-70 pb-70">
        {/* If you want to change the video need to update below videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="_ysd-zHamjk"
          onClose={() => this.setState({ isOpen: false })}
        />
        {/* temt display is none
         */}
        <div className="container">
          <div className="services-details-video">
            <div className="details-image  d-none">
              <img
                src="/images/service-details/services-details1.jpg"
                alt="image"
              />
              <div className="details-video">
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    this.openModal();
                  }}
                  className="video-btn popup-youtube"
                >
                  <i className="bx bx-play"></i>
                </div>
              </div>
            </div>

            <div className="text">
              <h3 className="heading">{t('We Provide Useful Services')}</h3>
              <p>
               {t('We optimize operations, enhance scalability, and  Salesforce CPQ &  Admin consultation managed services , and creative design to drive innovation and growth for your organization.')}
              </p>
            </div>
          </div>

          <div className="services-details-overview bor-tb">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="services-details-desc">
                  <h3 className="heading fw-bold"> Adobe InDesign </h3>
                  <p>
                    {t('Empowering creativity with Adobe expertise. We offer specialized services harnessing Adobes cutting-edge tools, ensuring seamless design, multimedia, and digital experiences for your business.')}
                  </p>

                  <div className="features-text">
                    <h4 className="fw-bold">{t('Core Services')}</h4>
                    <p className="text-capitalize">
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >
                          {t('Adobe InDesign Desktop and Server Plugin Development')}
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >
                          {t('Porting services into InDesign latest version')}
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >
                         {t('DAM – Digital Assets Managment integration with Adobe InDesign')}
                        </div>
                      </div>



                    </p>
                  </div>

                  <div className="features-text">
                    <h4 className="fw-bold">{t('Product workflow design and development')}</h4>
                    <p className="text-capitalize">
                    <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >
                        {t('Print Ads Solutions')}
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >
                        {t('Printing Content workflow management')} 
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >
                        {t('Marketing Campaign Management')}
                        </div>
                      </div>
                    
                
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="services-details-image"  style={{maxHeight:"400px", maxWidth:"400px"}}>
                  <img
                    src="/images/service-details/id.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="services-details-overview bor-tb">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="services-details-image">
                  <img
                    src="/images/service-details/Sales-force-img.png"
                    alt="image"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="services-details-desc">
                  <h3 className="heading fw-bold"> Salesforce</h3>
                  <p>
                    {t('Transform your business with Salesforce expertise. Our services leverage the power of Salesforce, offering tailored solutions for CRM, automation, and customer engagement, driving growth and efficiency in your sales process.')}
                  </p>

                  <div className="features-text">
                    <h4 className="fw-bold">{t('Services')}</h4>
                    <p className="text-capitalize">
                    <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >
                        {t('Salesforce Integration with Web based Apps or Platform services using Restful APIs')}
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >
                        {t('Salesforce CPQ and Admin consultation managed services')}
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

export default ServiceDetailsTech;
