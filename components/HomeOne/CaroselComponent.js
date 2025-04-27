import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';



const OwlCarousel = dynamic(() => import('react-owl-carousel3'), { ssr: false });
const options = {
  loop: true,
  margin: 0,
  nav: false,
  mouseDrag: true,
  items: 1,
  dots: true,
  autoplay: true,
  smartSpeed: 500,
  autoplayHoverPause: true,
  // navText: [
  //     "<i class='bx bx-chevron-left'></i>",
  //     "<i class='bx bx-chevron-right'></i>",
  // ],
}

const carouselItems = [
  {
    id: 1,
    title: "Our Products",
    subtitle: "MatRecord",
    description: "MatRecord is an EMR (Electronic Medical Records) software designed for gynecologists, nursing homes, and hospitals. It simplifies the management of obstetrics and gynecology patient records, baby birth records, and hospital records in digital form.",
    link: "/Products/Health/Matrecord/",
    image: "/images/home-one/MTR-BANNER-2.png"
  },
  {
    id: 2,
    title: "Our Products",
    subtitle: "MatRecord",
    description: "MatRecord is an EMR (Electronic Medical Records) software designed for gynecologists, nursing homes, and hospitals. It simplifies the management of obstetrics and gynecology patient records, baby birth records, and hospital records in digital form.",
    link: "/Products/Health/Matrecord/",
    image: "/images/home-one/MTR-BANNER-2.png"
  },

];
export default class CaroselComponent extends Component {
  state = {
    display: true
  };

  componentDidMount() {
    this.setState({ display: true })
  }

  render() {
    return (
      <>

        <div className="container" dir="ltr">
          <div className="mx-auto" style={{ width: "90%" }}>
            <div className=" Home-carosel">
              <div className="">
                {this.state.display ? (
                  <OwlCarousel className="home-slider" {...options}>
                    {carouselItems.map(item => (
                      <div className="home-item item-bg4" key={item.id}>
                        <VisibilitySensor>
                          {({ isVisible }) => (
                            <div className="row banner-content">
                              <div className="col-md-6 col-12 p-5">
                                <h5 className={`text-uppercase mb-2 text-white title mb-5 ${isVisible ? "animated fadeInUp" : ''}`}>{t(item.title)}</h5>
                                <h6 className={`mb-2 text-white mb-3 ${isVisible ? "animated fadeInUp" : ''}`}>{item.subtitle}</h6>
                                <p className={`text-capitalize text-white mb-4 ${isVisible ? "animated fadeInUp" : ''}`} style={{ fontSize: "14px" }}>{t(item.description)}</p>
                                <div className={`banner-btn text-start ${isVisible ? "animated fadeInUp" : ''}`}>
                                  <Link href={item.link} className="text-white"><span>{t('Learn More')} <i class='bx bx-right-arrow-alt position-relative ' style={{ top: "2px" }}></i></span></Link>
                                </div>
                              </div>
                              <div className={`banner-image col-md-6 col-12 ${isVisible ? "animated fadeInUp" : ''}`}>
                                <img src={item.image} alt="Image" />
                              </div>
                            </div>
                          )}
                        </VisibilitySensor>
                      </div>
                    ))}
                  </OwlCarousel>
                ) : ''}
              </div>
            </div>
          </div>
        </div>

      </>


    );
  }
}
