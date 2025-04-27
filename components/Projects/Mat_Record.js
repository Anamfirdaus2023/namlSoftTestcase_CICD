import React, { Component } from 'react';
import Modal from '../DilogueBox/Modal';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});


class Mat_Record extends Component {

    state = {
        isOpen: true,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

 //   constructor(props) {
//     super(props);
//     this.state = {
//         isOpen: true // Set isOpen to true initially to open the modal
//     };
//      // Created a ref for the button
// this.moreDetailsButtonRef = React.createRef();
// }

// componentDidMount() {
//     this.openModal(); // Call openModal() when the component is mounted

//     // Automatically close the modal after 1 minute (60000 milliseconds)
//     setTimeout(() => {
//       this.setState({ isOpen: false }, () => {
//           // After the modal is closed, programmatically click the "For More Details" button
//           this.moreDetailsButtonRef.current.click();
//       });
//   }, 72000); // 1 minute = 60000 milliseconds
// }

// openModal() {
//     this.setState({ isOpen: true }); // Function to open the modal
// }



    render() {
        return (
            <div className="services-details-area ptb-100">

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({ isOpen: false })} 
                    youtube={{ autoplay: 1, mute: 1 }}
                />

<Modal/>
                
                <div className="container pt-70">
                    <div className="services-details-video">
                        <div className="details-image">
                            <img src="/images/service-details/demoVideoImg.png" alt="image" />
                            <div className="details-video">
                                <div
                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                    className="video-btn popup-youtube"
                                > 
                                    <i className="bx bx-play"></i>
                                </div>
                            </div>
                        </div>
 
                        <div className="development-text">
                <h3>
                  Mat <span>Record</span>
                </h3>
                <div className="bar"></div>
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ab modi in, eaque sapiente et odit esse id velit quae nihil ipsum ea aspernatur vero voluptatum accusantium consequuntur blanditiis unde.

                </p>
              </div>
                    </div>

                    <div className="services-details-overview bor-tb">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">

                                    <h3>Problem Statment</h3>
                    <p>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div > <span className="fw-bold"> SaaS</span>- Software as Service using Mobile and Web App</div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >                       <span className="fw-bold">PaaS</span>- Platform as Service using Mobile and Web App
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >                        Publishing of Apps on Cloud, Apple and Google Play Stores
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >                       <span className="fw-bold">PaaS</span>- Platform as Service using Mobile and Web App
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >                        Publishing of Apps on Cloud, Apple and Google Play Stores
                        </div>
                      </div>
                    </p>
                                  

                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src="/images/service-details/services-details3.jpg" alt="image" />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview bor-tb">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image" style={{height:"500px"}}>
                                <img src="/images/service-details/MatImg.png" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>Solution statement</h3>
                                    <p>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div > <span className="fw-bold"> SaaS</span>- Software as Service using Mobile and Web App</div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >                       <span className="fw-bold">PaaS</span>- Platform as Service using Mobile and Web App
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >                        Publishing of Apps on Cloud, Apple and Google Play Stores
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >                       <span className="fw-bold">PaaS</span>- Platform as Service using Mobile and Web App
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >                        Publishing of Apps on Cloud, Apple and Google Play Stores
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >                        Publishing of Apps on Cloud, Apple and Google Play Stores
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="fa fa-light fa-circle marker me-3 position-relative t-11"></i>
                        <div >                        Publishing of Apps on Cloud, Apple and Google Play Stores
                        </div>
                      </div>


                    </p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>   

                    <div className="text-center">
                        <button className="default-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ref={this.moreDetailsButtonRef}>For More Details</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Mat_Record;