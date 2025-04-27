import React, { Component } from 'react'
import { TeamMembers, teamMembers } from '../Projects/Matrecord/KeyFeaturesData';

export default class TeamStyleThree extends Component {
  render() {
    const { additionalClass } = this.props;

    return (
        <section className={`team-section ${additionalClass}`}>
<div className="container">
<div className="py- team4">
  <div className="container">

    <div className="section-title mb-4">
                        <h3>Our Team</h3>
                        <p>Our success is largely due to our talented and passionate leadership team. They transform concepts into inventions, difficulties into victories, and aspirations into attainable realities by combining creativity, technological know-how, and unrelenting determination. Select our team's strength, your vision and our knowledge form a winning alliance. </p>
                        <div className="bar"></div>

                    </div>

    <div className="row ">
     
    {TeamMembers.map((member , index) => (
        <div className="col-lg-4  mb-4" key={index}>
          <div className="row p-4 mx-3 TeamCard">
            <div className="col-md-12" >
              <div className="img mx-auto">
       <img
          src={member.imgSrc}
          alt={member.name}
          className="img-fluid rounded-circle w-100 h-100"
        /> 
              </div>
            </div>
            <div className="col-md-12 text-center content" >
              <div className="pt-2">
                <h5 className="mt-3 font-weight-medium mb-0">{member.name}</h5>
                <p className="text-primary mb-0  fw-light subtitle" >{member.role}</p>
                <p className="TeamContent TeamEmail subtitle ">{member.email}</p>
                <p className='text-start discription mb-0'>{member.description}</p>
                <ul className="list-inline mb-0 ">
                  {member.socialLinks.map((link, index) => (
                    <li className="list-inline-item" key={index}>
                      <a href={link.url} className="text-decoration-none d-block px-1" target='_blank'>
                        <i className={link.iconClass}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

</div>
        </section>
     )
  }
}
