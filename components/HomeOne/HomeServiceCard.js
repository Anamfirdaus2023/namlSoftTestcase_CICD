import React, { Component } from 'react'
import Link from 'next/link';
import { t } from 'i18next';



export default class HomeServiceCard extends Component {

    
  render() {
    const services = [
      {
        imgSrc: "/images/home-one/TechBasedServices.png",
        title: "Technology Based Services",
        description: "Offering cutting-edge Salesforce services and innovative Adobe solutions, we empower businesses to streamline their operations and enhance their digital presence"
      },
      {
        imgSrc: "/images/home-one/web-mob-devlopment.png",
        title: "Product Development",
        description: "Transforming ideas into market-ready products through innovative design and agile development methodologies."
      },
      {
      imgSrc: "/images/home-one/Cloud-Services.png",
      title: "Cloud Services",
      description: "Implementing scalable and secure cloud solutions to enhance operational efficiency and support business growth."
      },
      {
      imgSrc: "/images/home-one/others.png",
      title: "Other Services",
      description: "Offering a range of technology services, including Adobe XD and Salesforce expertise, to meet your diverse business needs."
      },

];


    return (
        <section className='container home '>

<div className='ptb-50'>
<div className="grid-container">
  {services.map((service, index) => (
    <div key={index} className="card home-service-card p-4">
      <div className="img-container my-3">
        <img src={service.imgSrc} className="img" alt={service.title} />
      </div>
      <h6 className="title">{t(service.title)}</h6>
      <p style={{fontSize:"13px"}}>{t(service.description)}</p>
    </div>
  ))}
</div>

<div className="pt-50 row justify-content-between">
    <div className="col-lg-6 col-md-12 col-sm-12 col-12 pe-5">
    <h2 className="fs-xl font-semibold mb-4 pe-5 " style={{fontSize:"1.25rem", lineHeight:"1.75rem"}}>
     {t('portfolio')} <span className='naml'>{t('Naml')}</span><span className="soft">{t('Soft')}</span> {t('established')}
    </h2>
    <a target='_blank' href="/Products/Health/Matrecord/" className=" bg-default text-white rounded-3 py-2 px-3 productHVR justify-content-center">
      {t('Our Products')}  <i className='bx bx-right-arrow-alt position-relative mb-4'style={{top:"2px"}}></i>
    </a>

    </div>
    {/* <div className="col-1"></div> */}
    <div className="col-lg-6 col-md-12 col-sm-12 col-12 ">
    <p> <span className='naml fw-bold'>{t('Naml')}</span><span className="soft fw-bold">{t('Soft')}</span> {t('Product Discription')}</p>
    </div>
</div>


<div className="pt-50">
<div className="ChooseUsContent">
  <div className="image-container">
    <img src="/images/home-one/TeamImg.png" className="team-img" alt="namlsoft Team" />
  </div>
  <div className="text-container">
    <h6 className="title text-uppercase">
      {t('WHY CHOOSE')} <span className='naml'>{t('Naml')}</span><span className="soft">{t('Soft')}</span>
    </h6>

    <div className="text-card">
      <div className="text-content">
        <h6>{t('Expertise and Innovation')}</h6>
        <p className="description">{t('At')} <span className='naml fw-bold'>{t('Naml')}</span><span className="soft fw-bold">{t('Soft')}</span>{t(', we')}</p>
      </div>
    </div>
    <div className="text-card">
      <div className="text-content">
        <h6>{t('Client-Centric Approach')}</h6>
        <p className="description">{t('We believe')}</p>
      </div>
    </div>
    <div className="text-card">
      <div className="text-content">
        <h6>{t('Proven Track Record')}</h6>
        <p className="description">{t('With a portfolio')}</p>
      </div>
    </div>
  </div>
</div>

</div>
</div>





</section>    )
  }
}
