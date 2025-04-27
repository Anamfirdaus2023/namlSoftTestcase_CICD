// components/CookieBanner.js
import React, { Component } from 'react';
import CookieConsent from 'react-cookie-consent';
import { t } from 'i18next';


class CookieBanner extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

handleScroll = () => {
  const banner = document.getElementById('cookie-banner');
  if (banner && window.scrollY > 100) {
    banner.classList.add('show');
    window.removeEventListener('scroll', this.handleScroll); // Remove listener after showing the banner
  }
};


  // Navbar
  _isMounted = false;
  state = {
      display: false,
      collapsed: true
  };
  componentDidMount() {
      let elementId = document.getElementById("cookie-banner");
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
  

  handleAccept = () => {
    console.log("Cookies accepted!");
  };

  render() {
    return (
        <div  id="cookie-banner">

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        style={{ background: "#13005a" }}
        buttonStyle={{ color: "#FFFFFF", fontSize: "13px" , background:"orange" }}
        expires={365}
        onAccept={this.handleAccept}
        containerClasses="cookie-banner"
        // Add an id for easier selection
        buttonClasses="btn accept-button" 
      >
        {t('We use cookies')}{" "}
        <a href="/privacy-policy" style={{ color: "#FFF", textDecoration: "underline" }}>{t('Learn more')}</a>
      </CookieConsent>
        </div>
    );
  }
}

export default CookieBanner;
