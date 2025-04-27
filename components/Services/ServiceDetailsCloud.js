import React, { Component } from "react";
import dynamic from "next/dynamic";
import { t } from 'i18next';


const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

class ServiceDetailsCloudContent extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <div className="services-details-area pb-70">
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

         
          </div>

          <div className="services-details-overview bor-tb">
           
     

            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
              <div className="development-text">
                <h3>
                 {t('Cloud')} <span>{t('Services')}</span>
                </h3>
                <div className="bar"></div>
              </div>
                <div className="services-details-desc">
                  <h3 className="heading fw-bold">{t('Software Cloud Services')}</h3>
                  <p>
                    {t('We develop, design and architect business solution for your business with the latest cloud technologies.')}
                  </p>

                  <div className="features-text">
                    <h4 className="fw-bold">
                      {t('Business solutions and development')} {" "}
                    </h4>
                    <p className="text-capitalize">
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div > <span className="fw-bold"> SaaS</span>- {t('Software as Service using Mobile and Web App')}</div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div ><span className="fw-bold">PaaS</span>- {t('Platform as Service using Mobile and Web App')}
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >  {t('Publishing of Apps on Cloud, Apple store and Google Play Stores')}
                        </div>
                      </div>


                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="services-details-image">
                  <img
                    src="/images/service-details/CloudServices.png"
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
                    src="/images/service-details/AWS-cloud-IMG.png"

                    alt="image"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="services-details-desc">
                  <h3 className="heading fw-bold">{t('Cloud Server Services')}</h3>
                  <p>
                   {t('We offer AWS , DevOps , Azure services to your business requirements high-performance solutions tailored to your business requirements, ensuring server security , monitoring and maintenance.')}
                  </p>

                  <div className="features-text">
                    {/* <h4 className="fw-bold">
                      Web Application Development using different Technologies
                    </h4> */}
                    <p className="text-capitalize">

                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >{t('Domain name purchase, domain transfer')}</div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >{t('Cloud Computing, EC2 Instances, IAM User, Policies, S3 Bucket')}</div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >{t('LightSail Sever setup with Nginx routing')}</div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >{t('Static web hosting and Application Load balancing')}</div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >{t('SSL Secure website hosting by Certbot, ACM AWS Certificate Manager')}</div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >AWS CloudFront</div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >{t('Domain Mail Configuration Services')} </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >{t('Application deployment')}</div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >{t('Jenkins and GitHub CICD Pipeline')}</div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >{t('Docker container-based platform service for highly portable workloads applications')}</div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >{t('Kubernetes extensible, open-source platform for managing containerized workloads and services')}</div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >{t('DevOPS managed dedicated resources')}</div>
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

export default ServiceDetailsCloudContent;
