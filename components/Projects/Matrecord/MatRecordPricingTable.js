import React, { Component } from 'react';
import Tooltip from '@mui/material/Tooltip';
// import {  CheckIcon } from '../../../public'; // Adjust the path to your SVG file

import { IPDPricingPlans, MatRecordPricing, OPDPricingPlans } from './KeyFeaturesData';
import Modal from '../../DilogueBox/Modal';
class MatRecordPricingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1, // Default to the first tab
    };
  }

  handleTabClick = (tabIndex) => {
    this.setState({ tab: tabIndex });
  };
  render() {
    const { tab } = this.state;
    return (
      <>
<div className="container">

      <div className='Pricing-table-container'>
           {/* <div className="heading mx-auto my-4">
                  <h3 className="mb-0" style={{ color: "#1079F3" }}>
                  MatRecord Offering Plans
                  </h3>
                </div> */}
                <h2 className="heading" style={{fontSize:"2rem"}}>
                MatRecord's  <span>Offering Plans</span>
                  <div className="bar mt-2"></div>
      </h2>


                <div className='d-flex justify-content-center p-1 my-4'>

<div className='tabWarp'>
  <button className='btn' style={{ backgroundColor: tab === 1 ? "#0070F2" : "", color: tab === 1 ? "#fff" : "",  }}  onClick={() => this.handleTabClick(1)}>IPD Record Plans</button>
  <button className='btn' style={{ backgroundColor: tab === 2 ? "#0070F2" : "", color: tab === 2 ? "#fff" : "",  }}   onClick={() => this.handleTabClick(2)}>OPD Record Plans </button>
</div>
</div>


{tab === 1 && 
          <div className="pricing-container">

            <h4 className='py-2'>Digitalize Your IPD Patient ANC Records</h4>
            <div className="row justify-content-center">
  {IPDPricingPlans.map((plan, planIndex) => (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-2" key={planIndex}>
      <div className="pricing-card">
        <div className={`pricing-header ${plan.headerClass}`}>
          <h4 className="pricing-title">{plan.title}</h4>
          <div className="pricing-price">
            {plan.price?
              <span className="price-amount w-100">{plan.price}</span> :
              <Tooltip title="Click here to Get in touch with our sales team for detailed pricing information and custom quotes.">
                
              <span className="price-amount w-100" style={{fontSize: "15px", padding: "5px 10px"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Contact Us For More Details
              </span>
            </Tooltip>           
             }
          </div>
        </div>
        <div className="pricing-features" style={{ minHeight: "270px" }}>
          <ul className="row align-items-center px-2">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="col-xl-6 col-md-12 col-sm-12 col-12 text-start li">
                <span>{feature.name}</span>
                <ul className='ps-4 sub-feature'>
                  {feature.subfeatures.map((subfeature, subIndex) => (
                    <li key={subIndex}>
                      {subfeature}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="pricing-footer">
          <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Request Demo</button>
        </div>
      </div>
    </div>
  ))}
</div>
          
          </div>
          }

{tab === 2 && 


<div className="pricing-container">

<h4 className='py-2'>Digitalize Your OPD Patient (ANC, Non-ANC) Records</h4>


{/* <div className="text-center mb-4 Tag ">
                  <h4 className='h2' >OPD Records Plans </h4>
                </div> */}



<div className="row justify-content-center">
  {OPDPricingPlans.map((plan, planIndex) => (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-2" key={planIndex}>
      <div className="pricing-card">
        <div className={`pricing-header ${plan.headerClass}`}>
          <h4 className="pricing-title">{plan.title}</h4>
          <div className="pricing-price">
            {plan.price?
              <span className="price-amount w-100">{plan.price}</span> :
              <Tooltip title="Click here to Get in touch with our sales team for detailed pricing information and custom quotes.">
                
              <span className="price-amount w-100" style={{fontSize: "15px", padding: "5px 10px"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Contact Us For More Details
              </span>
            </Tooltip>           
             }
          </div>
        </div>
        <div className="pricing-features" style={{ minHeight: "250px" }}>
          <ul className="row align-items-center px-2">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="col-xl-6 col-md-12 col-sm-12 col-12 text-start li">
                <span>{feature.name}</span>
                <ul className='ps-4 sub-feature'>
                  {feature.subfeatures.map((subfeature, subIndex) => (
                    <li key={subIndex}>
                      {subfeature}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="pricing-footer">
          <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Request Demo</button>
        </div>
      </div>
    </div>
  ))}
</div>


</div>

}





      </div>
</div>

      </>

    );
  }
}

export default MatRecordPricingTable;
