import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';
import BlogSidebar from '../components/Blog/BlogSidebar';

class Blog2 extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <PageBanner 
                    pageTitle="Blog Right Sidebar" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Blog Right Sidebar" 
                    bgImage="item-bg-4" 
                /> 

                <section className="blog-section ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <div className="image">
                                                <Link href="/blog-details">
                                                    <a>
                                                        <img src="/images/blog/blog1.jpg" alt="image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="content">
                                                <span>20 April 2020</span>
                                                <h3>
                                                    <Link href="/blog-details">
                                                        <a>Great Tips To Earn More Money From Digital Industry</a>
                                                    </Link>
                                                </h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>

                                                <Link href="/blog-details">
                                                    <a className="read-more">Read More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <div className="image">
                                                <Link href="/blog-details">
                                                    <a>
                                                        <img src="/images/blog/blog2.jpg" alt="image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="content">
                                                <span>21 April 2020</span>
                                                <h3>
                                                    <Link href="/blog-details">
                                                        <a>The Billionaire Guide On Design That will Get You Rich</a>
                                                    </Link>
                                                </h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                                                
                                                <Link href="/blog-details">
                                                    <a className="read-more">Read More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <div className="image">
                                                <Link href="/blog-details">
                                                    <a>
                                                        <img src="/images/blog/blog3.jpg" alt="image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="content">
                                                <span>22 April 2020</span>
                                                <h3>
                                                    <Link href="/blog-details">
                                                        <a>Making Peace With The Feast Or Famine Of Freelancing</a>
                                                    </Link>
                                                </h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                                                
                                                <Link href="/blog-details">
                                                    <a className="read-more">Read More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <div className="image">
                                                <Link href="/blog-details">
                                                    <a>
                                                        <img src="/images/blog/blog4.jpg" alt="image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="content">
                                                <span>23 April 2020</span>
                                                <h3>
                                                    <Link href="/blog-details">
                                                        <a>Startup Marketing Solution For Business Owner</a>
                                                    </Link>
                                                </h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                                                
                                                <Link href="/blog-details">
                                                    <a className="read-more">Read More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <div className="image">
                                                <Link href="/blog-details">
                                                    <a>
                                                        <img src="/images/blog/blog5.jpg" alt="image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="content">
                                                <span>24 April 2020</span>
                                                <h3>
                                                    <Link href="/blog-details">
                                                        <a>Web Development Best Work In Future World</a>
                                                    </Link>
                                                </h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                                                
                                                <Link href="/blog-details">
                                                    <a className="read-more">Read More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-blog">
                                            <div className="image">
                                                <Link href="/blog-details">
                                                    <a>
                                                        <img src="/images/blog/blog6.jpg" alt="image" />
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="content">
                                                <span>24 April 2020</span>
                                                <h3>
                                                    <Link href="/blog-details">
                                                        <a>Instagram Feed Add To Your WordPress Site</a>
                                                    </Link>
                                                </h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
                                                
                                                <Link href="/blog-details">
                                                    <a className="read-more">Read More</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Pagination */}
                                    <div className="col-lg-12 col-md-12">
                                        <div className="pagination-area">
                                            <Link href="#">
                                                <a className="prev page-numbers">
                                                    <i className="flaticon-left"></i>
                                                </a>
                                            </Link>

                                            <Link href="#">
                                                <a className="page-numbers">1</a>
                                            </Link>

                                            <span className="page-numbers current" aria-current="page">2</span>

                                            <Link href="#">
                                                <a className="page-numbers">3</a>
                                            </Link>

                                            <Link href="#">
                                                <a className="page-numbers">4</a>
                                            </Link>

                                            <Link href="#">
                                                <a className="next page-numbers">
                                                    <i className="flaticon-right"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>  
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </section>
                
                <Footer />
            </>
        );
    }
}

export default Blog2;