import React, { Component } from "react";
import Link from "next/link";
import TeamStyleTwo from "../Common/TeamStyleTwo";
import TeamStyleThree from "../Common/TeamStyleThree";
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';





class AboutContent extends Component {
  // Tab
  constructor(props) {
    super(props);
    this.state = {
      additionalClass: "fadeInUp animated", // Add the class by default
    };
  }

  openTabSection = (evt, tabName) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("fadeInUp");
      tabcontent[i].style.display = "none";
    }

    // Toggle the class when changing tabs
    this.setState((prevState) => ({
      additionalClass: prevState.additionalClass ? "" : "fadeInUp animated",
    }));

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).className += " fadeInUp animated";
    evt.currentTarget.className += " current";
  };

  render() {
    return (
      <>
      const { t } = useTranslation();

        <section className="about-section bor-tb pt-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-5">
                {/* <div className="about-image">
                <img src="/images/about/about-3.png" alt="image" />
              </div> */}
                <div className="about-tab pt-3">
                  <div className="tab about-list-tab">
                    {/* Tabs Nav */}
                    <ul className="tabs text-center">
                      <li
                        className="current"
                        onClick={(e) => this.openTabSection(e, "tab1")}
                      >
                        <span>{t('Our Mission')}</span>
                      </li>

                      <li onClick={(e) => this.openTabSection(e, "tab2")}>
                        <span>{t('Our Story')}</span>
                      </li>
                      <li onClick={(e) => this.openTabSection(e, "tab3")}>
                        <span>{t('Services')}</span>
                      </li>
                    </ul>

                    {/* Tab content */}
                    <div className="tab_content">
                      {/* Tabs item */}
                      <div id="tab1" className="tabs_item">
                        <div className="text">
                          <h3>{t('Just like these tiny creatures,')}</h3>
                        </div>

                        <ul className="list">
                          <li className="ps-0">
                            <p>
                              {t('At')} <span className="naml fw-bold"> {t('Naml')}</span>
                              <span className="soft fw-bold">{t('Soft')}</span>,
                              {t('believes in the power of consistency')}
                              <span className="naml fw-bold">
                                {" "}
                               {t('Trusted Digital Solution Partner')}{" "}
                              </span>{" "}
                              {t('solving real world')}
                            </p>
                          </li>
                        </ul>

                        <div className="text-center">
                          <Link href="/services" className="">
                            <a className="default-btn">{t('Discover More')}</a>
                          </Link>
                        </div>
                      </div>
                      {/* Tabs item */}

                      {/* Tabs item */}
                      <div id="tab2" className="tabs_item">
                        <div className="text">
                          <h3>
                            {t('Introducing')}{" "}
                            <span className="naml fw-bold">{t('Naml')}</span>
                            <span className="soft fw-bold">{t('Soft')}</span> {t('– Where Diligence Meets Innovation')}
                          </h3>
                        </div>

                        <ul className="list">
                          <li className="ps-0">
                            <p>
                              {t('At')} <span className="naml fw-bold">{t('Naml')}</span>
                              <span className="soft fw-bold">{t('Soft')}</span> {t(', we draw inspiration from the incredible traits of ants, known as')}{" "}
                              <span className="naml fw-bold">"{t('Naml')}"</span> {t('in Arabic, to create a dynamic and efficient work environment.')}
                            </p>
                          </li>
                          <li className="ps-0">
                            <p>
                             {t('Ants are renowned for their strong sense of community, constant communication, and loyalty to their goals. They serve their community diligently, and their efforts are even recognized in the Holy Quran.')}
                            </p>
                          </li>
                          <li className="ps-0">
                            <p>
                              {t('As we embark on our journey at')}{" "}
                              <span className="naml fw-bold">{t('Naml')}</span>
                              <span className="soft fw-bold">{t('Soft')}</span> {t(', we strive to embody these qualities in our work culture.')}
                            </p>
                          </li>
                          <li className="ps-0">
                            <p>
                              {t('Despite their')}
                            </p>
                          </li>
                          <li className="ps-0">
                            <p>
                              {t('Just like these tiny creatures,')}{" "}
                              <span className="naml fw-bold">{t('Naml')}</span>
                              <span className="soft fw-bold">{t('Soft')}</span>{" "}
                              {t('believes in the power of consistency')}{" "}
                              <span className="naml fw-bold">
                                {t('Trusted Digital Solution Partner')}
                              </span>{" "}
                              {t('solving real world challenges and transform your business visions into digital reality.')}
                            </p>{" "}
                          </li>
                        </ul>

                        <div className="text-center">
                          <Link href="/services" className="">
                            <a className="default-btn">{t('Discover More')}</a>
                          </Link>
                        </div>
                      </div>

                      <div id="tab3" className="tabs_item">
                        <div className="text">
                          <h3>
                            {t('How to generate your Creative Idea With IT Business')}
                          </h3>
                        </div>

                        <ul className="list">
                          <Link href="/service-details">
                            <li>
                              <i className="flaticon-tick"></i>
                              {t('Digital Product Solution')}
                            </li>
                          </Link>

                          <Link href="/tech-services">
                            <li>
                              <i className="flaticon-tick"></i>
                              {t('Technology Based Services')}
                            </li>
                          </Link>
                        </ul>
                        <div className="text-center">
                          <Link href="/services" className="">
                            <a className="default-btn">{t('Discover More')}</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-tab">
                  <h2>{t('About Us')}</h2>
                  <div className="bar"></div>
                  <p>
                    <span className="naml fw-bold">{t('Naml')}</span>
                    <span className="soft fw-bold">{t('Soft')}</span> {t('is a dynamic startup, established in 2023. We are committed to delivering cutting-edge digital solutions and services for the healthcare and manufacturing industries. Headquartered at the World Trade Centre in Kharadi, Pune, with a sales office in Detroit, USA. We are  dedicated tofostering innovation and achieving excellence in everything we do.')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <TeamStyleTwo additionalClass={this.state.additionalClass}/> */}
        {/* <TeamStyleThree additionalClass={this.state.additionalClass} /> */}
      </>
    );
  }
}

export default AboutContent;
