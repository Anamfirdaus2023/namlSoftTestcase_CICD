import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import SidebarModal from './SidebarModal';
import i18n from '../i18nFiles/i18n';
import { t } from 'i18next';

class Navbar extends Component {

    // Sidebar Modal
    state = {
        sidebarModal: false
    };
    toggleModal = () => {
        this.setState({
            sidebarModal: !this.state.sidebarModal
        });
    }

    // Search Form
    state = {
        searchForm: false,
    };
    handleSearchForm = () => {
        this.setState(prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let { products } = this.props;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area fixed-top bg-default ">
                    <nav className="navbar navbar-expand-md">
                        <div className="container">
                            <Link href="/">
                                <a className="navbar-brand" style={{ height: "100px", width: "100px" }}>
                                    <img src="/images/logoVVV.png" alt="logo" className='logo theme-logo' style={{ width: "100%", height: "100%" }} />
                                    <img src="/images/NmalSoft-Logo-White.png" alt="logo" className='logo white-logo' style={{ width: "100%", height: "100%" }} />
                                </a>
                            </Link>

                            <button
                                onClick={this.toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">

                                    {/* /// all home pages display none => custimising according to need */}



                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link">{t("Home")}</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/about" activeClassName="active">
                                            <a className="nav-link">{t("About")}</a>
                                        </Link>
                                    </li>



                                    <li className="nav-item d-none">
                                        <Link href="/projects2" activeClassName="active">
                                            <a className="nav-link">
                                                Portfolio
                                            </a>
                                        </Link>
                                    </li>

                                    {/* <li className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <a className="nav-link">Services</a>
                                                </Link>
                                            </li> */}


                                    {/* /// all home pages display none => custimising according to need */}
                                    {/* start */}

                                    <li className="nav-item ">
                                        <Link href="/services" activeClassName="active">
                                            <a className="nav-link">
                                                {t("Services")} <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/service-details" activeClassName="active">
                                                    <a className="nav-link">{t("Digital Product Solution")}</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/tech-services" activeClassName="active">
                                                    <a className="nav-link">{t("Technology Based Services")}</a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>
                                    <li className="nav-item ">
                                        <Link href="#" activeClassName="active">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                {t("Industry")} <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/Products/Health/Matrecord" activeClassName="active">
                                                    <a className="nav-link">Healthcare - MatRecord</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/Products/Manufacturing" activeClassName="active">
                                                    <a className="nav-link">Manufacturing</a>
                                                </Link>

                                            </li>
                                        

                                        </ul>
                                    </li>

                                    {/* Resources  */}
                                    <li className="nav-item ">
                                        <Link href="#" activeClassName="active">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                {t("Resources")} <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="https://www.instagram.com/matrecord_emr/">
                                                    <a target="_blank" rel="noopener noreferrer">{t("Blogs")}</a>
                                                </Link>
                                            </li>


                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/Programs/Internship" activeClassName="active">
                                            <a className="nav-link">{t("Internship Program")}</a>
                                        </Link>
                                    </li>
                                    {/* Career  */}
                                    {/* <li className="nav-item ">
                                        <Link href="/Career/FullTimeJob" activeClassName="active">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                            Career <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                        <li className="nav-item">
                                                <Link href="/Career/Intern" activeClassName="active">
                                                    <a className="nav-link">Internship</a>
                                                </Link>
                                            </li>
                                        <li className="nav-item">
                                                <Link href="/Career/FullTimeJob" activeClassName="active">
                                                    <a className="nav-link">Fulltime Job</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li> */}

                                    {/* end */}



                                    {/* /// all home pages display none => custimising according to need */}
                                    {/* start */}
                                    <li className="nav-item d-none">
                                        <Link href="/#">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Blog <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog" activeClassName="active">
                                                    <a className="nav-link">Blog Grid</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/blog2" activeClassName="active">
                                                    <a className="nav-link">Blog Right Sidebar</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/blog-details" activeClassName="active">
                                                    <a className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    {/* end */}

                                    {/* <li className="nav-item">
                                        <Link href="/Career/FullTimeJob" activeClassName="active">
                                            <a className="nav-link">Career</a>
                                        </Link>
                                    </li> */}
                                    <li className="nav-item contact_us">
                                        <Link href="/contact" activeClassName="active">
                                            <a className="nav-link">{t('Contact us')}</a>
                                        </Link>
                                    </li>

                                    {/*customizing as per need team , pricing, faq , user , sign in , signup , 404 error , comingsoon */}

                                </ul>
                            </div>

                            <div className="others-options">
                                {/* <div className="option-item">
                                    <i 
                                        onClick={this.handleSearchForm} 
                                        className="search-btn flaticon-search"
                                        style={{
                                            display: this.state.searchForm ? 'none' : 'block'
                                        }}
                                    ></i>
                                    <i 
                                        onClick={this.handleSearchForm} 
                                        className={`close-btn flaticon-cancel ${this.state.searchForm ? 'active' : ''}`}
                                    ></i>
                                    
                                    <div 
                                        className="search-overlay search-popup"
                                        style={{
                                            display: this.state.searchForm ? 'block' : 'none'
                                        }}
                                    >
                                        <div className='search-box'>
                                            <form className="search-form">
                                                <input className="search-input" name="search" placeholder="Search" type="text" />
                                                <button className="search-button" type="submit">
                                                    <i className="flaticon-search"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="burger-menu" onClick={this.toggleModal}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div> */}

                                <button onClick={this.toggleModal} className=" contact-btn px-3 py-1 border-0 rounded-md transition duration-500">{t("Contact")}</button>
                                {/* <select
                                    className="block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={i18n.language}
                                    onChange={(e) => {
                                        const lang = e.target.value;
                                        i18n.changeLanguage(lang);
                                    }}
                                >
                                    <option value="en">English</option>
                                    <option value="ar">عربي</option>
                                </select> */}
                                <button
                                    onClick={() => {
                                        const nextLang = i18n.language === 'en' ? 'ar' : 'en';
                                        i18n.changeLanguage(nextLang);
                                    }}
                                        className=" mx-2 contact-btn px-3 py-1 border-0 rounded-md transition duration-500"
                                >
                                    {i18n.language === 'en' ? 'عربي' : 'English'}
                                </button>






                            </div>
                        </div>
                    </nav>
                </div>

                {/* Right Sidebar Modal */}
                <SidebarModal onClick={this.toggleModal} active={this.state.sidebarModal ? 'active' : ''} />
            </>
        );
    }
}

export default Navbar;
