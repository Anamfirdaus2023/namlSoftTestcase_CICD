import React, { Component } from 'react'
import Link from 'next/link';







const HomeLanding = ({t}) => {
    {
        // const { t } = useTranslation();
        const isVisible = true
        return (
            <div className="home bg-default">

                <div className="home-item item-bg1 pt-100">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="main-banner-content">
                                    <div className="main-banner-vision" >
                                        <h1
                                            className={
                                                isVisible ? "animated fadeInUp" : ''
                                            }
                                        >
                                            {t('Unlock Potential with')} <span className="text-second">{t('NamlSoft')}</span>
                                        </h1>
                                        {/* <h1>{t('welcome')}</h1> */}
                                        <p
                                            className={
                                                isVisible ? "animated fadeInUp text-capitalize" : ''
                                            }
                                        >
                                            {/* Inspired IT Solutions, Empowering Success! */}
                                            
                                            {t('comprehensive-suite')}
                                        </p>
                                    </div>
                                    <div
                                        className={
                                            ` banner-btn ${isVisible ? "animated fadeInUp" : ''}`
                                        }
                                    >
                                        <Link href="/contact" className="" legacyBehavior>
                                            <a id="link" className=" no-underline banner-button px-5 py-3 mt-50 bg-second text-white">{t('Get a Quote')}</a>
                                        </Link>
                                    </div>
                                </div>

                                <div
                                    className={
                                        `banner-image ${isVisible ? "animated fadeInUp" : ''}`
                                    }
                                >

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeLanding;