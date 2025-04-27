import React, { Component } from 'react';
import i18n from '../components/i18nFiles/i18n';
import { withTranslation } from 'react-i18next';

import Navbar from '../components/Layout/Navbar';
import HomeLanding from '../components/HomeOne/HomeLanding';
import HomeServiceCard from '../components/HomeOne/HomeServiceCard';
import CaroselComponent from '../components/HomeOne/CaroselComponent';
import HomePageWork from '../components/HomeOne/HomePageWork';
import Projects from '../components/HomeOne/Projects';
import FeedbackStyleOne from '../components/Common/FeedbackStyleOne';
import BlogPost from '../components/Common/BlogPost';
import Footer from '../components/Layout/Footer';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Index extends Component {
  componentDidMount() {
    this.updateDirection();

    // Listen to language changes
    i18n.on('languageChanged', this.updateDirection);
  }

  componentWillUnmount() {
    // Clean up event listener when component unmounts
    i18n.off('languageChanged', this.updateDirection);
  }

  updateDirection = () => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  };

  render() {
    const { t } = this.props;

    return (
      <>
        <Navbar t={t} />
        <HomeLanding t={t} />
        <HomeServiceCard t={t} />
        <CaroselComponent t={t} />
        <HomePageWork t={t} />
        <div className="d-none" style={{ display: 'none' }}>
          <Projects />
          <FeedbackStyleOne />
          <BlogPost />
        </div>
        <Footer />
      </>
    );
  }
}

export default withTranslation()(Index);
