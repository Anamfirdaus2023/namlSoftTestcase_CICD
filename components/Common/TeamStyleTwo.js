import React, { Component } from 'react';
import Link from 'next/link';

class TeamStyleTwo extends Component {
    render() {
        const { additionalClass } = this.props;
        return (
            <section className={`team-section  pb-70 ${additionalClass}`}>
                <div className="container">
                    <div className="section-title">
                        <h2>Our Team</h2>
                        {/* <p>Our leadership team, a synergy of talent and passion, is the cornerstone of our success. With a blend of creativity, technical prowess, and unwavering dedication, they turn ideas into innovations, challenges into triumphs, and dreams into tangible realities. Choose the power of our team; your vision, our expertise – a partnership bound for greatness.</p> */}
                        <p>Our success is largely due to our talented and passionate leadership team. They transform concepts into inventions, difficulties into victories, and aspirations into attainable realities by combining creativity, technological know-how, and unrelenting determination. Select our team's strength; your vision and our knowledge form a winning alliance. </p>
                        <div className="bar"></div>

                    </div>
<div className="mx-auto">

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="team-item">
                                <div className="image">
                                    <img src="/images/team/QK.png" alt="image" className='img' />
                                    {/* <div className="img"></div> */}
                                    <ul className="social">
                                        <li>
                                            <a href="https://www.linkedin.com/in/qamar-khan-46a92774/" target="_blank">
                                                <i className='bx bxl-linkedin'></i>
                                            </a> 
                                        </li>
                                       

                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Qamar Khan</h3>
                                    {/* <span>Managing Partner & Senior Technical Architect</span> */}
                                    <span>Product Manager</span>
                                </div>
                                <div className="content mt-0 pt-0 px-2">
                                    {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis sed quas alias omnis natus nulla Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis sed quas.</p> */}
                                    {/* <p>Technical Architect, with over 17+ years of experience in the IT industry,, specializing in Adobe InDesign for Windows and Macintosh OS, as well as web and mobile app development. </p> */}
                                    <p> Product Manager, with over 17+ years of IT industry experience in designing and developing Software Apps and Products on Adobe InDesign windows and Macintosh OS, Web and Mobile Apps. </p>
                                    {/* <p>With 17+ years of  experience in  IT industry of  web, and mobile app development. Expert in diverse sectors like print, advertising, and healthcare, using technologies like React Native & Flutter.</p> */}

                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-none">
                            <div className="team-item">
                                <div className="image">
                                    <img src="/images/team/AS.png" alt="image" className='img' />
                                    {/* <div className="img"></div> */}
                                    <ul className="social">
                                        <li>
                                            <a href="https://www.linkedin.com/in/asif-sayed-06881b44?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                                <i className='bx bxl-linkedin'></i>
                                            </a> 
                                        </li>
                                       

                                    </ul>
                                </div>

                                <div className="content">
                                <h3>Asif Sayed</h3>
                                <span>Sales & Marketing Manager</span>
                                </div>
                                <div className="content mt-0 pt-0 px-2">
<p>Highly motivated sales professional with 10+ years in Real Estate Industry with a proven track record of converting sales prospects into loyal customers and developing a network of referrals to grow sales. </p>
                                </div>
                            </div>
                        </div>

                     

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3 d-none">
                            <div className="team-item">
                                <div className="image">
                                    {/* <img src="/images/team/team3.jpg" alt="image" /> */}
                                    <div className="img"></div>


                                    <ul className="social">
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className='bx bxl-linkedin'></i>
                                            </a> 
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className='bx bxl-facebook'></i>
                                            </a> 
                                        </li>
                                        <li> 
                                            <a href="https://www.twitter.com/" target="_blank">
                                            <i className="fa-brands fa-x-twitter">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="#ffffff"/>
</svg>

                          </i>
                                            </a> 
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Name</h3>
                                    <span>Designation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default TeamStyleTwo;