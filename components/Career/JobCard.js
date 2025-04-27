import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faIdBadge, faTasks ,faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { Chip } from '@mui/material';
import Swal from 'sweetalert2'

class JobCard extends Component {

    constructor(props) {
        super(props);
        this.handleApplyClick = this.handleApplyClick.bind(this); // Ensure the method is bound to the class context
        this.state = {
          showAllSkills: false,
          showResponsibility:false,
          isHeightExceeded: false
        };
        this.jobCardRef = React.createRef();
      }

      componentDidMount() {
        this.checkJobCardHeight();
      }
    
      checkJobCardHeight = () => {
        if (this.jobCardRef.current && this.jobCardRef.current.offsetHeight > 500) {
          this.setState({ isHeightExceeded: true });
        }
      };


    
      handleApplyClick(e) {
        e.preventDefault(); // Prevent the default anchor click behavior
        Swal.fire({
            title: 'Congratulations!',
            text: 'Please share your resume at contactus@namlsoft.com',
            icon: 'success',
            customClass: {
              confirmButton: 'swal-button-color', // Change color here
            },
          })

      }

      toggleShowAllSkills = () => {
        this.setState(prevState => ({
          showAllSkills: !prevState.showAllSkills,
        }));
      };

      toggleShowResponsibility = () => {
        this.setState(prevState => ({
          showResponsibility: !prevState.showResponsibility,
        }));
      };


  render() {
    const { jobTitle, jobLocation, jobId, rolesResponsibilities, skills, index } = this.props;
    const { showAllSkills, showResponsibility, isHeightExceeded } = this.state;
    const skillsToShow = showAllSkills ? skills : skills.slice(0, 6);
    const ResponsibilityToShow = showResponsibility ? rolesResponsibilities : rolesResponsibilities.slice(0, 6);



    return (
      <div className="job-card py-3 px-3" ref={this.jobCardRef}>
        <div className="job-header d-flex justify-content-between alighn-items-center">
        <a onClick={this.handleApplyClick} className="email-link">
            <Chip label="Apply Now" variant="outlined" className={`m-1 cursor-pointer ${index % 2 === 0 ? 'blue-chip' : 'orange-chip'}`} />
          </a>
          <p className="job-id">
            <FontAwesomeIcon icon={faIdBadge} className="job-icon" />
            <span className="id-text">{jobId}</span>
          </p>
        </div>
        <div className="text-center mb-3">
          <h5 className="job-title">{jobTitle}</h5>
          <p className="job-location text-primary">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="job-icon" />
            <span className="location-text text-primary">{jobLocation}</span>
          </p>
        </div>
        <div className="text-center">
        {skillsToShow.map((item, index) => (
  <Chip
    label={item}
    variant="outlined"
    className={`mx-1 mb-1 btn-outline-success`}
    key={index}
  />
))}
        {skills.length > 6 && (
            <Chip label={ <FontAwesomeIcon icon={showAllSkills ? faMinus : faPlus} />} variant="outlined" className="mx-1 mb-1" key={index} onClick={this.toggleShowAllSkills} />
        )}
      </div>

        <div className="job-roles">
          <h3 className="roles-heading">
            <FontAwesomeIcon icon={faTasks} className="job-icon" />
            Roles and Responsibilities
          </h3>
          {/* <ul className="roles-list">
            {ResponsibilityToShow.map((role, index) => (
              <li key={index} className="role-item">{role}</li>
            ))}
            {rolesResponsibilities.length > 7 && (
            <li key="show-more-less" onClick={this.toggleShowResponsibility} className="role-item cursor-pointer" >
              {showResponsibility ? ' Show Less' : ' Show More'}
              <FontAwesomeIcon icon={showResponsibility ? faMinus : faPlus} className='mx-1'/>
            </li>
          )}
          </ul> */}
      <ul className="roles-list" >
          {ResponsibilityToShow.map((role, index) => (
            <li key={index} className="role-item">{role}</li>
          ))}
          {rolesResponsibilities.length > 6 && isHeightExceeded && (
            <li key="show-more-less" onClick={this.toggleShowResponsibility} className="role-item cursor-pointer text-primary">
              {showResponsibility ? 'Show Less' : 'Show More'}
              <FontAwesomeIcon icon={showResponsibility ? faMinus : faPlus} className='mx-1'/>
            </li>
          )}
        </ul>
          <hr className='w-25 mx-auto'/>
        </div>
      </div>
    );
  }
}

export default JobCard;
