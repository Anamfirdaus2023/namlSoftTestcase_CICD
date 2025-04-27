import React, { Component } from "react";

class ContactInfo extends Component {
  render() {
    return (
      <div className="contact-box ptb-200 pb-70">
        <div className="container">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="single-contact-box bounce-effect p-0">
                <div className="map-size p-0">
                  <iframe
                    className="p-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4673625668725!2d73.94664207470852!3d18.552956768185226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c4e76f12f3%3A0xbf7a60acac5070d3!2sTower%201%2C%20WORLD%20TRADE%20CENTER%2C%20EON%20Free%20Zone%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1719818791452!5m2!1sen!2sin"
                    style={{ width: "100%", height: "100%", border: "0px" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                {/* <i className="flaticon-pin"></i> */}

                <div className="content-title py-4">
                  <h3 className="">Corporate Office India </h3>
                  <p className="">
                    8th Floor, World Trade Centre, Unit No.801, Dhole Patil
                    Farms Road,
                     EON Free Zone, Karadi,
                    Pune, Maharashtra, 411014, India{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-contact-box bounce-effect p-0 ">
                <div className="map-size p-0">
                  <iframe
                    className="p-0"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.5956946517204!2d-83.33539981588923!3d42.47888685329591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824b72959ef0409%3A0x8c364fbcb87b691f!2s25309%20Wykeshire%20Rd%2C%20Farmington%20Hills%2C%20MI%2048336%2C%20USA!5e0!3m2!1sen!2sin!4v1706535782217!5m2!1sen!2sin"
                    style={{ width: "100%", height: "100%", border: "0px" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                {/* <i className="flaticon-pin"></i> */}
                <div className="content-title py-4">
                  <h3 className="">
                    USA Sales & Marketing Office
                  </h3>
                  <p>
                    25309, Wykrshire Rd , Farmington Hills Michigan, <br />{" "}
                    48336 - USA
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-contact-box bounce-effect">
                <i className="flaticon-envelope"></i>
                <div className="content-title">
                  <h3>Email</h3>
                  <p>contactus@namlsoft.com</p>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-6 col-md-6  offset-lg-0">
              <div className="single-contact-box bounce-effect">
                <i className="flaticon-phone-call"></i>
                <div className="content-title">
                  <h3>Phone</h3>
                  <p className="">+91 </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ContactInfo;
