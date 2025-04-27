import React, { Component } from 'react';
import Link from 'next/link';

class BlogSidebar extends Component {
    render() {
        return (
            <div className="widget-area pl-15" id="secondary">
                <div className="widget widget_search">
                    <div className="post-wrap">
                        <form className="search-form">
                            <label>
                                <span className="screen-reader-text">Search for:</span>
                                <input type="search" className="search-field" placeholder="Search..." />
                            </label>

                            <button type="submit"><i className='bx bx-search'></i></button>
                        </form>
                    </div>
                </div>

                <div className="widget widget-posts-thumb">
                    <h3 className="widget-title">Popular Posts</h3>

                    <div className="post-wrap">
                        <article className="item">
                            <Link href="/blog-details">
                                <a className="thumb">
                                    <span className="fullimage cover bg1" role="img"></span>
                                </a>
                            </Link>

                            <div className="info">
                                <time>February 20, 2020</time>
                                <h4 className="title usmall">
                                    <Link href="/blog-details">
                                        <a>
                                            Making Peace With The Feast Or Famine Of Freelancing
                                        </a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>

                        <article className="item">
                            <Link href="/blog-details">
                                <a className="thumb">
                                    <span className="fullimage cover bg2" role="img"></span>
                                </a>
                            </Link>

                            <div className="info">
                                <time>February 21, 2020</time>
                                <h4 className="title usmall">
                                    <Link href="/blog-details">
                                        <a>
                                            Be Healthy, Enjoy Life With Trifles Organic
                                        </a>
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>

                        <article className="item">
                            <Link href="/blog-details">
                                <a className="thumb">
                                    <span className="fullimage cover bg3" role="img"></span>
                                </a>
                            </Link>

                            <div className="info">
                                <time>February  22, 2020</time>
                                <h4 className="title usmall">
                                    <Link href="/blog-details">
                                        <a>
                                            Buy Organic Food Online And Be Healthy
                                        </a> 
                                    </Link>
                                </h4>
                            </div>

                            <div className="clear"></div>
                        </article>
                    </div>
                </div>
                
                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    <div className="post-wrap">
                        <ul>
                            <li>
                                <Link href="/blog">
                                    <a>Business <span>(10)</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog">
                                    <a>Privacy <span>(20)</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog">
                                    <a>Technology <span>(10)</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog">
                                    <a>Tips <span>(12)</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog">
                                    <a>Uncategorized <span>(16)</span></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>

                    <div className="post-wrap">
                        <div className="tagcloud">
                            <Link href="/blog">
                                <a>IT Solution (3)</a>
                            </Link>
                            <Link href="/blog">
                                <a>Uncategorized (3)</a>
                            </Link>
                            <Link href="/blog">
                                <a>Tips (2)</a>
                            </Link>
                            <Link href="/blog">
                                <a>AI Solution (2)</a>
                            </Link>
                            <Link href="/blog">
                                <a>Technology (1)</a>
                            </Link>
                            <Link href="/blog">
                                <a>Privacy (1)</a>
                            </Link>
                            <Link href="/blog">
                                <a>Business (1)</a>
                            </Link>
                        </div>
                    </div>
                </div>       
            </div>
        );
    }
}

export default BlogSidebar;