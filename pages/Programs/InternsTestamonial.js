import React, { Component } from "react";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const testimonials = [
   
    {
        name: "Irfan Pathan",
        image: "/images/students/ifran-pathan.jpeg", // 
        feedback: "Qamar Sir's mentorship transformed my career, guiding me from a non-technical background to a successful Salesforce professional with unwavering support.",
        designation : 'Senior Salesforce Consultant',
        company : 'Atom Inc',
        linkdin: 'https://www.linkedin.com/',
    },
    {
        name: "Faiz Ahmed",
        image: "/images/students/faiz.png", // 
        feedback:"Qamar is an excellent trainer, providing real-world project training and career guidance.",
        designation : 'Front end developer',
        company : 'Namlsoft LLP ',
        linkdin: 'https://www.linkedin.com/',
    },
    {
        name: "Mohd Ashraf Behlim",
        image: "/images/students/ashrafb.jpg", // 
        feedback:"Mr. Qamar's mentorship has been invaluable, simplifying complex IT concepts and guiding my career growth",
        designation : 'Senior Cloud Security Engineer',
        company : 'Netsurion Technologies',
        linkdin: 'https://www.linkedin.com/',
    },{
        name: "Md Kaif Ansari",
        image: "/images/students/kaif.png", // 
        feedback: "Interning at Namlsoft enhanced my backend skills with real-world projects and Qamar sir's valuable guidance.",
        designation : '',
        company : '',

        linkdin: 'https://www.linkedin.com/',
    },
    {
        name: "Tauseef",
        image: "/images/students/avtar-male.png", // 
        feedback: "Qamar bhai's mentorship and guidance were invaluable in my IT career growth and success.",
        designation : 'Technical Lead',
        company : 'Metamind System',
        linkdin: 'https://www.linkedin.com/',
    },
    {
        name: "Anam Firdaus ",
        image: "/images/students/female_avatar.jpg", // 
        feedback: "Qamar sir's guidance and mentorship have been invaluable, enhancing my skills and boosting my confidence for future opportunities.",
        designation : 'QA Engineer',
        company : 'Namlsoft LLP ',
        linkdin: 'https://www.linkedin.com/',
    },{
        name: "Arbaz Shaikh ",
        image: "/images/students/arbaz.jpg", // 
        feedback: "Qamar sir's mentorship shaped my skills and confidence, simplifying automation tools and preparing me for IT challenges ahead.",
        designation : 'Test Analyst ',
        company : 'Namlsoft LLP ',
        linkdin: 'https://www.linkedin.com/',
    },{
        name: "Md Altamash ",
        image: "/images/students/altamash.webp", // 
        feedback: "Qamar sir's mentorship simplified complex IT concepts, enhancing my skills and confidence for a successful career.",
        designation : 'Senior executive ',
        company : 'Vois ',
        linkdin: 'https://www.linkedin.com/',
    },{
        name: "Yassar Yelurkar",
        image: "/images/students/yassar.jpg", // 
        feedback: "Qamar sir's guidance during my internship honed my technical and soft skills, helping me secure a job at TCS.",
        designation : 'System Engineer ',
        company : 'TCS   ',
        linkdin: 'https://www.linkedin.com/',
    },{
        name: "Afsar khan",
        image: "/images/students/avtar-male.png", // 
        feedback: "Qamar sir's mentorship greatly enhanced my UI/UX skills and career growth with his hands-on guidance and expertise.",
        designation : 'UI/UX Designer',
        company : 'Namlsoft LLP ',
        linkdin: 'https://www.linkedin.com/',
    },{
        name: "Danish Ahmad ",
        image: "/images/students/avtar-male.png", // 
        feedback:"Very good mentor and trainer to build their carrier in information technology field ",
        designation : 'Flutter developer ',
        company : 'Valere labs pvt ltd Pune ',
        linkdin: 'https://www.linkedin.com/',
    },
    {
        name: "Shahbaz Shaikh ",
        image: "/images/students/avtar-male.png", // 
        feedback: "Qamar's mentorship and practical insights have been invaluable, simplifying concepts and enhancing my technical expertise.",
        designation : 'Software Engineer',
        company : 'NamlSoft LLP ',
        linkdin: 'https://www.linkedin.com/',
    },
    {
        name: "Nida Mushtakh Deshmukh",
        image: "/images/students/female_avatar.jpg", // 
        feedback: "Qamar Sir's mentorship and expertise have been invaluable, simplifying concepts and guiding my growth as an IT professional.",
        designation : 'Data Engineer ',
        company : 'NamlSoft LLP ',
        linkdin: 'https://www.linkedin.com/',
    },{
        name: "Mohammad Ausef Umair",
        image: "/images/students/avtar-male.png", // 
        feedback: "Qamar Sir provides opportunities based on talent and skills. His guidance and support during my internship were invaluable to my career growth.",
        designation : 'Analyst Programmer L2',
        company : 'Xceedance ',
        linkdin: 'https://www.linkedin.com/',
    },
    {
        name: "Mohd Saqeeb",
        image: "/images/students/avtar-male.png", // 
feedback: "Qamar Sir's guidance was invaluable in honing my Flutter skills, providing freshers opportunities to grow in a collaborative environment.",
        designation : 'Android Developer',
        company : 'Sec2Pay India E-Services Pvt Ltd ',
        linkdin: 'https://www.linkedin.com/',
    },
];

const options = {
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true, // Enables navigation buttons
    dots: true,
    responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
    },
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
};

class InternsTestamonial extends Component {
    state = { isClient: false };

    componentDidMount() {
        this.setState({ isClient: true });
    }

    render() {
        return (
            <section className="testimonial-section py-5 mb-5">
                {/* Section Title */}
                <div className="text-center">
                        {/* <FontAwesomeIcon icon={faStar} className="text-warning"/>  */}
                    <h2 className="fw-bold text-white">Student Testimonials</h2>
                    <p className="text-light">
                        Hear from our students who have successfully completed the program and secured jobs!
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="container">
                    {this.state.isClient && (
                        <OwlCarousel className="owl-theme mt-4" {...options}>
                            {testimonials.map((testimonial, index) => (
                                <div className="item" key={index}>
                                    <div className="testimonial-card">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="testimonial-img"
                                        />
                                        <h5 className="testimonial-name">{testimonial.name}</h5>
                                        <h5 className="text-warning" style={{fontSize:'14px'}}>{testimonial.designation} - {testimonial.company} </h5>
                                        <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                                        <div className="social">

                                            <a href={[[testimonial.linkdin]]} target="_blank">
                                                <i className='bx bxl-linkedin'></i>
                                            </a> 
                                        
                                    </div>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    )}
                </div>

                {/* Custom Styling */}
                <style jsx>{`
                    .testimonial-section {
                        background: linear-gradient(135deg, #1e3c72, #2a5298);
                        padding: 80px 0;
                    }
                    .testimonial-card {
                        background: white;
                        padding: 20px;
                        border-radius: 15px;
                        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
                        text-align: center;
                        transition: transform 0.3s ease-in-out;
                        height:300px;
                        position:relative;

                    }
                    .testimonial-card:hover {
                        transform: translateY(-5px);
                    }
                    .testimonial-img {
                        width: 100px !important;
                        height: 100px;
                        object-fit: cover;
                        border-radius: 50%;
                        margin: 0 auto 15px;
                        border: 3px solid #ffcc00;
                    }
                    .testimonial-name {
                        font-weight: bold;
                        color: #2a5298;
                        margin-bottom: 10px;
                    }
                    .testimonial-feedback {
                        font-size: 14px;
                        color: #555;
                        margin-bottom: 10px;
                    }
                    .testimonial-rating {
                        color: #ffcc00;
                        font-size: 18px;
                    }
                    .custom-nav-btn {
                        background: white;
                        padding: 10px;
                        border-radius: 50%;
                        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                        transition: all 0.3s;
                    }
                    .custom-nav-btn:hover {
                        background: #ffcc00;
                    }
                    .social{
                    position:absolute;
                    top:10px;
                    right:10px;
                    display:none
                    }
                    .testimonial-card:hover .social {
                        display: inline-block;
                    }
                    .social i{
  height: 35px;
  width: 35px;
  line-height: 35px;
  background-color: #086AD8;
  color: #ffffff;
  font-size: 14px;
  border-radius: 30px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
                    }
                `}</style>
            </section>
        );
    }
}

export default InternsTestamonial;
// import React, { Component } from 'react'

// export default class InternsTestamonial extends Component {
//   render() {
//     return (
//       <div>InternsTestamonial</div>
//     )
//   }
// }
