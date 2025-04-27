import React, { Component } from 'react'
import { Faq_Question } from './KeyFeaturesData'
import Modal from '../../DilogueBox/Modal'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MatRecordBlog from './MatRecordBlog';

export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null,
    };
  }

  handleChange = (panel) => (event, isExpanded) => {
    this.setState({ expanded: isExpanded ? panel : null });
  };

  render() {
    const { expanded } = this.state;
    return (
        <>
        <div className="container ">
      <div >
      <MatRecordBlog/>
      </div>
<div className="" style={{boxShadow: "0 5px 40px 0 rgba(0, 0, 0, 0.11)"}}>
<div className="heading mx-auto pt-3 mt-5">
<h3 className='mb-0' style={{color : "#1079F3"}}>Frequently Asked Questions </h3>
<div className="bar mt-2"></div>
</div>
<div className="my-3">
{Faq_Question.map((faq) => (
          <Accordion
            key={faq.id}
            className=""
            expanded={expanded === faq.id}
            onChange={this.handleChange(faq.id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={faq.id}
              id={`${faq.id}-header`}
            >
              <div className="d-flex align-items-start">
                <img src="/images/Vector.svg" alt="Vector Image" width={20} height={20} className="" />
                <div className='text-start mx-3'>
                  <h6 >{faq.Question}</h6>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p className='pt-0 text-start' style={{maxWidth:"100%" , paddingLeft:"2.2rem"}}>{faq.answer}</p>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
    </div>
        </div>

</>
    )
  }
}
