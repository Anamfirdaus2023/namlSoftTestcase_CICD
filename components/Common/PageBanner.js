import React, { Component } from 'react';
import Link from 'next/link';

class PageBanner extends Component {
    render() {

        let { pageTitle, homePageUrl, homePageText, activePageText, bgImage } = this.props;
        
        return (
            <div className={`page-title-area pt-50 ${bgImage}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-content">
                                <h2>{pageTitle}</h2>
                                <ul className='d-none'>
                                    <li>
                                        <Link href={homePageUrl}>
                                            <a>{homePageText}</a>
                                        </Link>
                                    </li>
                                    <li>{activePageText}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageBanner;