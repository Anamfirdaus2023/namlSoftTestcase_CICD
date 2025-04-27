import React, { Component } from "react";
import Link from "next/link";
import { t } from 'i18next';



class ServicesStyleOne extends Component {
  render() {
    return (
      <section className="services-section bg-color ptb-200">
        <div className="container">
          <div className="section-title">
            <h2>{t('Services')}</h2>
            <p>
            {t('Unlocking potential with our essential services: web and app development experts, innovative cloud solutions, and Adobe XD and Salesforce tech proficiency for propelling your business to success in the digital age.')}
            </p>
            <div className="bar"></div>
          </div>

          <div className=" row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <Link href="/service-details">
                <div className="single-services">
                  <div className="icon">
                    <i className="flaticon-cellphone"></i>
                  </div>
                  <h3>{t('Digital Product Solution')} </h3>
                  <div className="text-left">
                  <p>{t('Mobile Application and Web Development')}</p>
                      <p>{t('Cloud Services')}</p>
                  </div>
                  <a className="read-btn">{t('Read More')}</a>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6 d-none">
              <Link href="/service-details-cloud">
                <div className="single-services">
                  <div className="icon">
                    <i className="flaticon-it"></i>
                  </div>
                  <h3>AWS Cloud Solutions</h3>
                  <div className="text-left">
                    <p>Software Cloud Services </p>
                    <p>Cloud Server Services </p>
                  </div>

                  <a className="read-btn">Read More</a>
                </div>
              </Link>
            </div>

            <div className="col-lg-4 col-md-6">
              <Link href="/tech-services">
                <div className="single-services">
                  <div className="icon">
                    <i className="flaticon-optimize"></i>
                  </div>
                  <h3>{t('Technology Based Services')}</h3>
                  <div className="text-left">
                    <p>Adobe Id</p>

                    <p>Salesforce {t('Services')}</p>
                  </div>

                  <a className="read-btn">Read More</a>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="default-shape">
          <div className="shape-1">
            <img src="/images/shape/shape4.png" alt="image" />
          </div>
          <div className="shape-2 rotateme">
            <img src="/images/shape/shape5.svg" alt="image" />
          </div>
          <div className="shape-3">
            <img src="/images/shape/shape6.svg" alt="image" />
          </div>
          <div className="shape-4">
            <img src="/images/shape/shape7.png" alt="image" />
          </div>
          <div className="shape-5">
            <img src="/images/shape/shape8.png" alt="image" />
          </div>
        </div>

        <div className="services-shape">
          <img src="/images/cloud.png" alt="image" />
        </div>
      </section>
    );
  }
}

export default ServicesStyleOne;
