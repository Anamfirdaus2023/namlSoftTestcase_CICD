import React, { Component } from "react";
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';


class ServiceDevelopment extends Component {
  render() {
    return (
      <section className="development-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="development-image">
                <img src="/images/development.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="development-text">
                <h3>
                 {t('Web & Mobile')} <span>{t('Development')}</span>
                </h3>
                <div className="bar"></div>
                <p>
                  {t('Professional mobile and web application development suited to your companys requirements.We develop intuitive, seamless user-friendly that increase interaction and the visibility of your company.')}
                </p>
              </div>

              <div className="development-content">
                <div className="icon">
                  <i className="flaticon-blog"></i>
                </div>
                <h3>{t('UI/UX Design')}</h3>
                <p>

                  {t('Designing user interfaces and user experiences with')} <span className="soft"> {t('Adobe XD')}  </span> {t('and')} <span className="soft">{t('Figma design tools.')}</span>. {t('We provide specialist services with Adobes cutting-edge tools, assuring seamless design for your company.')}
                </p>
              </div>

              <div className="development-content">
                <div className="icon bg-05dbcf">
                  <i className="flaticon-setting"></i>
                </div>
                <h3>{t('Web Development')}</h3>
                <p>
                 {t('Custom web application development for your business requirements. We develop streamlined, user-friendly web apps with')} <span>MySQL Databases</span>  {t('utilizing')}  <span> MERN Stack </span>, <span>PHP</span> {t('and')}{" "}
                  <span>Larval Frameworks</span> {t('that increase interaction and strengthen the presence of your company.')}
                </p>
              </div>

              <div className="development-content">
                <div className="icon bg-fec66f">
                  <i className="flaticon-cellphone"></i>
                </div>
                <h3>{t('Mobile Development')}</h3>
                <p>
                
                  {t('Expert mobile application development tailored to your companys demands. We design smooth, user-friendly Android and iOS apps using')}<span> React Native</span> {t('and')} <span> Flutter Frameworks</span> {t('cross-platform technology to promote interaction and boost your brands presence.')}
                </p>
              </div>

              <div className="development-content">
                <div className="icon bg-66a6ff">
                  <i className="flaticon-devices"></i>
                </div>
                <h3>{t('Responsive Design')}</h3>
                <p>
                  {t('Crafting responsive designs with')} <span>Material UI </span> {t('and')} <span> Bootstrap 5</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ServiceDevelopment;
