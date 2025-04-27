import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layout/Footer";

class TermsConditions extends Component {
  render() {
    return (
      <>
        <Navbar />

        {/* <PageBanner 
                    pageTitle="Terms & Conditions" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Terms & Conditions" 
                    bgImage="item-bg-1" 
                />  */}

        <div className="conditions-section ptb-150">
          <div className="container">
            <div className="single-privacy">
              <h3 className="mt-0 text-uppercase" style={{fontFamily:"'Tinos', serif"}}>TERMS AND CONDITIONS</h3>
              <p>
                {" "}
                Welcome to
                <span className="naml fw-bold"> Naml</span>
                <span className="soft fw-bold">Soft </span>! These Terms and
                Conditions govern your use of our website, products, and
                services. By accessing or using our services, you agree to
                comply with and be bound by these terms. If you do not agree
                with any part of these terms, please do not use our services.
              </p>

              <h5>Use of Services</h5>
              <ul>
                <li>
                  <p>
                    <span className="fw-bold text-dark">License:</span> We grant
                    you a non-exclusive, revocable, and limited license to
                    access and use our services for their intended purpose.
                  </p>
                </li>
                <li>
                  <p>
                    <span className="fw-bold text-dark">
                      {" "}
                      User Responsibilities:{" "}
                    </span>{" "}
                    You are responsible for maintaining the confidentiality of
                    your account information, including your username and
                    password. You agree to notify us immediately of any
                    unauthorized use of your account.
                  </p>
                </li>
                <li>
                  <p>
                    <span className="fw-bold text-dark">
                      {" "}
                      Prohibited Activities:{" "}
                    </span>{" "}
                    You may not engage in any activities that violate these
                    terms or applicable laws, including but not limited to
                    unauthorized access, data scraping, and interference with
                    the proper functioning of our services.
                  </p>
                </li>
              </ul>
              <h5>Intellectual Property</h5>

              <ul>
                <li>
                  <p>
                    <span className="fw-bold text-dark"> Ownership:</span>
                    All content, trademarks, logos, and intellectual property on
                    our website and services are the property of
                    <span className="naml fw-bold"> Naml</span>
                    <span className="soft fw-bold">Soft </span> 
                    or its licensors. You may not use, reproduce, or distribute
                    any content without our express permission.
                  </p>
                </li>
                <li>
                  <p>
                    <span className="fw-bold text-dark">
                      {" "}
                      User Contributions:{" "}
                    </span>{" "}
                    By submitting content, feedback, or suggestions to us, you
                    grant us a non-exclusive, royalty-free, worldwide, perpetual
                    license to use, modify, and distribute such contributions.
                  </p>
                </li>
              </ul>

              <h5> Limitation of Liability</h5>
              <p>
                To the extent permitted by law,{" "}
                <span className="naml fw-bold"> Naml</span>
                <span className="soft fw-bold">Soft </span>  and its affiliates,
                officers, employees, and agents are not liable for any indirect,
                incidental, special, consequential, or punitive damages, or any
                loss of profits or revenues.
              </p>
              <h5> Changes to Terms and Conditions</h5>
              <p>
                We may update these Terms and Conditions to reflect changes in
                our services or applicable laws. Please review these terms
                periodically for any updates. Your continued use of our services
                after changes to the terms constitute your acceptance of the
                revised terms.
              </p>

              <h5>Contact Us</h5>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy, please contact us at{" "}
                <a href="mailto:contactus@namlsoft.com" className="">
                  contactus@namlsoft.com
                </a>
                /{" "}
                <a href="tel:+917738193413" className="">
                  {" "}
                  +91 7738193413.
                </a>
              </p>
              <p>
                This Privacy Policy is effective as of 22-11-2023 and was last
                updated on 22-11-2023.
              </p>
              {/* <h3>Welcome to NamlSoft Terms & Conditions</h3> */}
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default TermsConditions;
