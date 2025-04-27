import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class NavbarStyleTwo extends Component {

    // Search Form
    state = {
        searchForm: false,
    };
    handleSearchForm = () => {
        this.setState( prevState => {
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
               <div id="navbar" className="navbar-area fixed-top navbar-two">
                    <nav className="navbar navbar-expand-md">
                        <div className="container">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/images/logo.png" alt="logo" />
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
                                    <li className="nav-item">
                                        <Link href="/#" activeClassName="active">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Home <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a className="nav-link">Home One</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index2" activeClassName="active">
                                                    <a className="nav-link">Home Two</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index3" activeClassName="active">
                                                    <a className="nav-link">Home Three</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index4" activeClassName="active">
                                                    <a className="nav-link">Home Four</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index5" activeClassName="active">
                                                    <a className="nav-link">Home Five </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index6" activeClassName="active">
                                                    <a className="nav-link">Home Six</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index7" activeClassName="active">
                                                    <a className="nav-link">Home Seven</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index8" activeClassName="active">
                                                    <a className="nav-link">Home Eight</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about" activeClassName="active">
                                            <a className="nav-link">About</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/#" activeClassName="active">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Services <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <a className="nav-link">Services Style One</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/services2" activeClassName="active">
                                                    <a className="nav-link">Services Style Two</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/service-details" activeClassName="active">
                                                    <a className="nav-link">
                                                        Service Details
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/#">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Projects <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/projects" activeClassName="active">
                                                    <a className="nav-link">Projects Style One</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/projects2" activeClassName="active">
                                                    <a className="nav-link">Projects Style Two</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/project-details" activeClassName="active">
                                                    <a className="nav-link">
                                                        Project Details
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/#">
                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                Pages <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/team" activeClassName="active">
                                                    <a className="nav-link">Team</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/pricing" activeClassName="active">
                                                    <a className="nav-link">Pricing</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a className="nav-link">FAQ</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/#">
                                                    <a className="nav-link" onClick={e => e.preventDefault()}>
                                                        User <i className='bx bx-chevron-down'></i>
                                                    </a>
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link href="/signin" activeClassName="active">
                                                            <a className="nav-link">Sign In</a>
                                                        </Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link href="/signup" activeClassName="active">
                                                            <a className="nav-link">Sign Up</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/404" activeClassName="active">
                                                    <a className="nav-link">404 Error Page</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <a className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link href="/terms-conditions" activeClassName="active">
                                                    <a className="nav-link">Terms & Conditions</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
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

                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-options">
                                <div className="option-item">
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
                                </div>
                                
                                <Link href="/signin">
                                    <a className="default-btn">Sign In</a>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default NavbarStyleTwo;
