import React, { Component } from "react";
import Link from "next/link";
import { t } from 'i18next';


class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return (
      <>
        <footer className="footer-section pt-70 pb-70 ">
          <div className="container">
          <hr className="text-white" />
            <div className="subscribe-area">
              <div className="row align-items-center d-none">
                <div className="col-lg-6 col-md-6">
                  <div className="subscribe-content ">
                    <h2>Join Our Newsletter</h2>
                    <p>
                      News letter dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <form className="newsletter-form">
                    <input
                      type="email"
                      className="input-newsletter"
                      placeholder="Enter your email"
                      name="email"
                      required
                    />
                    <button type="submit">Subscribe Now</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>{t('Connect With Us')}</h3>
                  </div>

                  <p className="text-white">
                  {t('We are here to help you with any of your IT requirements.')}
                           </p>

                  <ul className="footer-social">
                    <li>
                      <Link href="https://www.linkedin.com/company/namlsoft/">
                        <a target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a target="_blank">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.facebook.com/profile.php?id=61555328679397">
                        <a target="_blank">
                          <i className="flaticon-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#">
                        <a target="_blank">
                          {/* <i className="fab fa x-twitter"></i> */}
                          <i className="fa-brands fa-x-twitter">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                             <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="#ffffff"/>
                            </svg>
                          </i>
                          
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/#">
                        <a target="_blank">
                          <i className="flaticon-pinterest"></i>
                        </a>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="https://www.instagram.com/matrecord_emr/">
                        <a target="_blank">
                          <i className="flaticon-instagram"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>{t('Important Links')}</h3>
                  </div>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/about">
                        <a>{t('About Us')}</a>
                      </Link>
                    </li>
                    <li className="d-none">
                      <Link href="/projects2">
                        <a>{t('Portfolio')}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <a>{t('Services')}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a>{t('Contact Us')}</a>
                      </Link>
                    </li>
                    <li>
                    <Link href="https://www.facebook.com/profile.php?id=61560867870262">
                        <a target="_blank" rel="noopener noreferrer">{t('Our Blogs')}</a>
                    </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>{t('Featured Service')}</h3>
                  </div>

                  <ul className="footer-quick-links">
                    <li>
                      <Link href="/service-details">
                        <a>{t('Digital Product Solution')}</a>
                      </Link>
                    </li>
                    <li className="d-none">
                      <Link href="/service-details-cloud" >
                        <a>{t('AWS Cloud Solutions')}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/tech-services">
                        <a>{t('Technology Based Services')}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <div className="footer-heading">
                    <h3>{t('Contact Us')}</h3>
                  </div>

                <div className="footer-info-contact">
                    <i className="flaticon-phone-call text-white"></i>
                    <h3 className="text-white">{t('Phone')}</h3>
                    <span > +91 9860321822</span>
                  </div>

                  <div className="footer-info-contact">
                    <i className="flaticon-envelope text-white"></i>
                    <h3 className="text-white">{t('Email')}</h3>
                    <span>contactus@namlsoft.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </footer>

        {/* Copyright area */}
        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <p>
                    {t('Copyright &copy;')}{currentYear}{" "}
                    {/* https:/namlsoft.com/ */}
                   
                      <a className="fw-bold">
                        <span className="naml">{t('Naml')}</span>
                        <span className="soft">{t('Soft')}</span> <span className="fw-bold">LLP</span>
                      </a>
                   
                  </p>
                </div>

                <div className="col-lg-6 col-md-6">
                  <ul>
                    
                    <li>
                      <Link href="/privacy-policy" target="_blank">
                        <a  target="_blank">{t('Privacy Policy')}</a>
                      </Link>
                      {/* <Link href="#">
                        <a>Privacy Policy</a>
                      </Link> */}
                    </li>
                    <li>
                     <Link href="/terms-conditions" >
                       <a target="_blank">{t('Terms & Conditions')}</a> 
                    </Link>
                       {/* <Link href="#">
                        <a>Terms & Conditions</a>
                      </Link> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
