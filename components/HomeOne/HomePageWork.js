  import React, { Component } from 'react'
  import Link from 'next/link';
  import { t } from 'i18next';




  export default class HomePageWork extends Component {

      
    render() {

      const cardData = [
          {
            number: 1,
            title: "Client-Centric Approach",
            description: "We begin by understanding your business needs and objectives. Our team conducts thorough research and planning to devise a strategy that aligns with your goals."
          },
          {
            number: 2,
            title: "Design and Development",
            description: "Our team work collaboratively to create innovative solutions that are both functional and visually appealing."
          },
          {
            number: 3,
            title: "Cloud Services",
            description: "Our team collaborates closely with clients to deliver customized, cutting-edge cloud solutions, ensuring a smooth and efficient transition to the cloud while maximizing performance security."
          },
          {
            number: 4,
            title: "Maintenance and Support",
            description: "We offer continuous maintenance and support to ensure that your digital solutions remain up-to-date and perform optimally."
          },
          // Add more items as needed
        ];

        const services = [
        {
          imgSrc: "/images/home-one/Vector.png", 
          title: "Increased Efficiency",
          description: "Automate tasks, streamline operations, and reduce errors to save time and focus on strategic initiatives."
        },
        {
          imgSrc: "/images/home-one/Vector-2.png",
          title: "Enhanced Customer Experience",
          description: "Offer personalized, seamless interactions through apps, websites, and cloud services to boost satisfaction and loyalty."
        },
        {
          imgSrc: "/images/home-one/Vector-3.png",
          title: "Data-Driven Insights",
          description: "By harnessing the power of data analytics, businesses can make informed decisions that drive growth and improve outcomes."
        },
        {
          imgSrc: "/images/home-one/Vector-4.png",
          title: "Future-Proofing",
          description: "Invest in digital transformation, proactive approach ensures long-term sustainability and success in an ever-changing market."
        },
    // Add more service objects here as needed
  ];



      return (
        <section className='container ptb-50' >
        <div className="how-we-work-container">
    <div className="row justify-content-between">
      <div className="col-md-6">
        <h6 className="how-we-work-title">{t('HOW WE WORK')}</h6>
        <p>
          {t('We believe that')}
        </p>
      </div>
      <div className="col-md-5">
        <h6 className="invisible how-we-work-title">{t('HOW WE WORK')}</h6>
        <h5 className="how-we-work-subtitle">
          {t('Our approach')}      
        </h5>
      </div>
    </div>
  </div>

  <div className="container mt-5">
    <div className="row row-cols-1 row-cols-md-2 g-3">
      {cardData.map((card, index) => (
        <div key={index} className="col">
          <div 
            className="card p-4 bounce-effect" 
            style={{
              border: '1px solid rgb(243 248 255)',
              borderRadius: '0.5rem',
              backgroundColor: 'rgb(243 248 255)'
            }}
          >
            <div 
              className="rounded-circle bg-default p-1 mb-3 position-relative d-flex justify-content-center align-items-center" 
              style={{ 
                height: '35px', 
                width: '35px', 
                backgroundColor: '#0C2F62' 
              }}
            >
              <p 
                className="position-absolute font-bold m-0" 
                style={{ 
                  color: 'white', 
                  fontWeight: 'bold',
                
                }}
              >
                {card.number}
              </p>
            </div>
            <div className="text-content">
              <h6 
                className="text-default" 
                style={{ color: '#0C2F62' }}
              >
                {t(card.title)}
              </h6>
              <p style={{fontSize:"13px"}}>{t(card.description)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="container home-page-work mt-5">
    <div className="img-container d-flex justify-content-end">
      <div className="img-card p-5">
        <h4 className=" font-semibold mb-4 sec-color">
          Transform your business with NamlSoft’s innovative digital solutions.
        </h4>
        <p className="text-white pb-4">
          Contact us today to learn how our expertise can propel your business to new heights. Our team is ready to partner with you and deliver solutions that drive real, measurable results.
        </p>
        <Link href="/contact" className="banner-button">
          {t('Get a Quote')}
        </Link>
      </div>
    </div>
  </div>

  <div className="mt-5 text-center w-75 mx-auto">
          <h5>{t('Why Digital')}</h5>
          <p>{t('In today’s fast-paced digital landscape')}</p>
      </div>

  <div className="mt-5 container home-service">
  <div className="d-grid gap-3" style={{gridTemplateColumns:"repeat(4, minmax(0, 1fr))"}}>
      {services.map((service, index) => (
        <div key={index} className="col">
          <div className="card p-4 home-service-card border-0 bounce-effect" style={{background:"#F4F9FF" , borderRadius:"15px"}}>
            <div className="service-icon text-start">
              <img src={service.imgSrc} alt={t(service.title)} />
            </div>
            <div className="text-content">
              <h6 className="my-3">{t(service.title)}</h6>
              <p style={{fontSize:"12px"}}>{t(service.description)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>


        </section>
      )
    }
  }
