import React, { Component } from 'react';
import Link from 'next/link';
import SidebarContactForm from './SidebarContactForm';
import { t } from 'i18next';


class SidebarModal extends Component {

    state = {
        modal: false
    };

    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    render() {
        return (
            <>
                <div className={`sidebar-modal ${this.props.active}`}>
                    <div className="sidebar-modal-inner">
                        <div className="sidebar-about-area">
                            <div className="title">
                                <h2>{t('About Us')}</h2>
                                <p>
                                    <span className="naml fw-bold">{t('Naml')}</span>
                                    <span className="soft fw-bold">{t('Soft')}</span>
                                    {t('is a digital product and solutions company that specializes in digital solutions and services for the healthcare and manufacturing industries. It is headquartered in the World Trade Centre, Kharadi, Pune, India, with a sales office in Wykrshire, USA.')}
                                </p>


                            </div>
                        </div>

                        <div className="sidebar-contact-feed">
                            <h2>{t('Contact')}</h2>

                            {/* Sidebar Contact Form */}
                            <SidebarContactForm />
                        </div>

                        <div className="sidebar-contact-area">
                            <div className="contact-info">
                                <div className="contact-info-content">
                                    <h2>
                                        {/* <a className="pnumber">+91 9860321822</a> */}
                                        <a className="pnumber" dir="ltr">+91 9860321822</a>

                                        <span className="or">{t('OR')}</span>
                                        <a className="email">contactus@namlsoft.com</a>
                                    </h2>

                                    <ul className="social">
                                        <li>
                                            <a href="https://www.linkedin.com/company/namlsoft/" target="_blank">
                                                <i className='bx bxl-linkedin'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className='bx bxl-youtube'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/profile.php?id=61555328679397" target="_blank">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                {/* <i className='bx bxl-twitter'></i> */}
                                                <i className="fa-brands fa-x-twitter">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="#aba5a5" />
                                                    </svg>

                                                </i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/matrecord_emr/" target="_blank">
                                                <i className='bx bxl-instagram'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Close Modal */}
                        <span onClick={this.closeModal} className="close-btn sidebar-modal-close-btn">
                            <i className="flaticon-cancel"></i>
                        </span>
                    </div>
                </div>
            </>
        );
    }
}

export default SidebarModal;