import React, { Component } from "react";
import Navbar from "../../../components/Layout/Navbar";
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
// import NotFound from "../404"
import Footer from "../../../components/Layout/Footer";
import FAQ from "../../../components/Projects/Matrecord/FAQ";
import Modal from "../../../components/DilogueBox/Modal";
import { FeatureRecordsData, MatDetails, ProdyctCarouselItems } from "../../../components/Projects/Matrecord/KeyFeaturesData";
import MatRecordPricingTable from "../../../components/Projects/Matrecord/MatRecordPricingTable";
import MTR_Review from "../../../components/Projects/Matrecord/MTR_Review";
import MTR_LandingPage from "../../../components/Projects/Matrecord/MTR_LandingPage";
import MatRecordBlog from "../../../components/Projects/Matrecord/MatRecordBlog";
import MTR_PricingPlan from "../../../components/Projects/Matrecord/MTR_PricingPlan";

const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const OwlCarousel = dynamic(import('react-owl-carousel3'), {
  ssr: false,
});



class Matrecord extends Component {
  state = {
    isOpen: true,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };
  render() {
    const options = {
      loop: true,
      margin: 0,
      nav: true,
      mouseDrag: true,
      items: 1,
      dots: false,
      autoplay: true,
      smartSpeed: 200,
      autoplayHoverPause: true,
      navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
  }
    return (
      <>
        <Navbar />
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="5r4IHh_RvUk" 
          onClose={() => this.setState({ isOpen: false })}
          youtube={{ autoplay: 1, mute: 1 }}
        />

 <section className="ProductPage section-title MTR">
  <MTR_LandingPage openModal={this.openModal} />
  {/* <MTR_Review/>  */}
  <MTR_PricingPlan/>
  <FAQ/>

  <Modal />
 </section>

        <Footer />
      </>
    );
  }
}

export default Matrecord;