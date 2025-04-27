import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                {/* <PageBanner 
                    pageTitle="Privacy Policy" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Privacy Policy" 
                    bgImage="item-bg-4" 
                />  */}

<div className="conditions-section ptb-150">
          <div className="container">
            <div className="single-privacy">
              <h3 className="mt-0 text-uppercase" style={{fontFamily:"'Tinos', serif"}}>Privacy Policy</h3>
              <p>
                <span className="naml fw-bold">Naml</span>
                <span className="soft fw-bold">Soft</span>  is committed to
                protecting the privacy and security of your personal
                information. This Privacy Policy describes how we collect, use,
                disclose, and store your information when you use our website,
                products, and services. By accessing or using our services, you
                consent to the practices outlined in this policy.
              </p>

              <h5>Information We Collect</h5>
              <p>
                We may collect personal information that you provide to us
                directly, such as your name, email address, phone number, and
                company details. Additionally, we may automatically collect
                certain information when you visit our website or use our
                services, including your IP address, device information, and
                usage patterns.
              </p>
              <h5>How We Use Your Information</h5>
              <p>
                We use the information we collect for various purposes,
                including:
              </p>
              <ul>
                <li>
                  <p>
                    <span className="fw-bold text-dark">
                      Providing and Improving Services:
                    </span>{" "}
                    To deliver and maintain our products and services, and to
                    continuously improve their quality and features.
                  </p>
                </li>
                <li>
                  <p>
                    <span className="fw-bold text-dark">Communication: </span>{" "}
                    To respond to your inquiries, provide customer support, and
                    send important updates or notifications.
                  </p>
                </li>
                <li>
                  <p>
                    <span className="fw-bold text-dark">Marketing: </span> With
                    your consent, we may send you promotional materials and
                    information about our products and services.
                  </p>
                </li>
                <li>
                  <p>
                    <span className="fw-bold text-dark">Analytics: </span> To
                    analyze and understand how users interact with our website
                    and services, helping us enhance user experience and
                    optimize performance.
                  </p>
                </li>
                <li>
                  <p>
                    <span className="fw-bold text-dark">
                      Legal Compliance:{" "}
                    </span>{" "}
                    To comply with applicable laws, regulations, and legal
                    processes.
                  </p>
                </li>
              </ul>
              <h5>Information Sharing</h5>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. However, we may share your information with
                trusted service providers and partners who assist us in
                delivering and improving our services. These third parties are
                required to keep your information confidential and are
                prohibited from using it for any purpose other than providing
                services on our behalf.
              </p>
              <h5>Data Security</h5>
              <p>
                We employ industry-standard security measures to protect your
                information from unauthorized access, disclosure, alteration,
                and destruction. Despite our efforts, no system can guarantee
                absolute security, but we continually strive to enhance our
                security procedures.
              </p>
              <h5>Your Choices</h5>
              <p>
                You have the right to control the personal information you
                provide to us. You can update your preferences, opt-out of
                marketing communications, or request the deletion of your data
                by contacting us at<a href="tel:+917738193413" className=""> +91 7738193413.</a>
              </p>
              <h5>Cookies and Tracking Technologies</h5>
              <p>
                We use cookies and similar technologies to enhance your
                experience, analyze usage patterns, and personalize content. You
                can manage your cookie preferences through your browser
                settings.
              </p>
              <h5>Changes to the Privacy Policy</h5>
              <p>
                We may update this Privacy Policy to reflect changes in our
                practices or applicable laws. Please review this policy
                periodically for any updates. Your continued use of our services
                after changes to the policy constitute your acceptance of the
                revised terms.
              </p>
              <h5>Contact Us</h5>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy, please contact us at <a href="mailto:contactus@namlsoft.com" className="">contactus@namlsoft.com</a>/ <a href="tel:+917738193413" className=""> +91 7738193413.</a>
              </p>
              <p>This Privacy Policy is effective as of 22-11-2023 and was last updated on 22-11-2023.</p>
              {/* <h3>Welcome to NamlSoft Terms & Conditions</h3> */}
            </div>
          </div>
        </div>
                
                <Footer />
            </>
        );
    }
}

export default PrivacyPolicy;