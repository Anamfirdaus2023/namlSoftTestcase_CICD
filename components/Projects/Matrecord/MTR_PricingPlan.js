// import React, { Component } from 'react';
// import { IPDPricingPlans, OPDPricingPlans } from './KeyFeaturesData';
// import Tooltip from '@mui/material/Tooltip';

// export default class MTR_PricingPlan extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activePlan: 0, // Set default active plan to 0 (first plan)
//     };
//   }

//   handlePlanClick = (planIndex) => {
//     this.setState({ activePlan: planIndex });
//   };

//   render() {
//     const { activePlan } = this.state;
//     const allPlans = IPDPricingPlans.concat(OPDPricingPlans);

//     return (
//       <div className='container'>
//         <div className="MTR_Pricing_Plan">
//           <h2 className="heading" style={{ fontSize: "2rem" }}>
//             MatRecord's <span>Offering Plans</span>
//           </h2>
//           <div className="bar mt-2"></div>

//           <div className="row my-5">
//             <div className="col-md-3 col-12">
//               <div className="table-container">
//                 <table className="plans-table">
//                   <thead>
//                     <tr>
//                       <th>IPD Plans</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {IPDPricingPlans.map((plan, index) => (
//                       <tr
//                         key={index}
//                         onClick={() => this.handlePlanClick(index)}
//                         className={activePlan === index ? 'active-row' : ''}
//                       >
//                         <td>{plan.title}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                   <thead>
//                     <tr>
//                       <th>OPD Plans</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {OPDPricingPlans.map((plan, index) => (
//                       <tr
//                         key={index + IPDPricingPlans.length}
//                         onClick={() => this.handlePlanClick(index + IPDPricingPlans.length)}
//                         className={activePlan === index + IPDPricingPlans.length ? 'active-row' : ''}
//                       >
//                         <td>{plan.title}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div className="col-md-9 col-12">
//               <div className="pricing-container">
//                 <div className="pricing-cards-container">
//                   {allPlans.map((plan, planIndex) => (
//                     <div
//                       className={`pricing-card ${activePlan === planIndex ? 'active' : 'inactive'}`}
//                       key={planIndex}
//                     >
//                       <div className={`pricing-header row d-flex align-items-center pro-header`}>
//                         <div className="col-xl-4 col-md-4 col-sm-12 col-12 mb-2">
//                           <h4 className="pricing-title">{plan.title}</h4>
//                         </div>
//                         <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-2">
//                           <div className="pricing-price">
//                             {plan.price ? (
//                               <span className="price-amount w-100">{plan.price}</span>
//                             ) : (
//                               <Tooltip title="Click here to Get in touch with our sales team for detailed pricing information and custom quotes.">
//                                 <span
//                                   className="price-amount w-100"
//                                   style={{ fontSize: '15px', padding: '5px 10px' }}
//                                   data-bs-toggle="modal"
//                                   data-bs-target="#staticBackdrop"
//                                 >
//                                   Contact Us For More Details
//                                 </span>
//                               </Tooltip>
//                             )}
//                           </div>
//                         </div>
//                         <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-2">
//                           <div className="pricing-footer">
//                             <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
//                               Request Demo
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="pricing-features" style={{ minHeight: '270px' }}>
//                         <ul className="row align-items-center px-4 py-2">
//                           {plan.features.map((feature, featureIndex) => (
//                             <li key={featureIndex} className="col-xl-4 col-md-6 col-sm-6 col-12 text-start li">
//                               <span>{feature.name}</span>
//                               <ul className="ps-5 sub-feature">
//                                 {feature.subfeatures.map((subfeature, subIndex) => (
//                                   <li key={subIndex}>{subfeature}</li>
//                                 ))}
//                               </ul>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';
import { freePlans, IPDPricingPlans, OPDPricingPlans } from './KeyFeaturesData';
import Tooltip from '@mui/material/Tooltip';

export default class MTR_PricingPlan extends Component {


  render() {

    return (
      <div className='container'>
        <div className="MTR_Pricing_Plan">
          <h2 className="heading" style={{ fontSize: "2rem" }}>
          💥 Start for FREE — No Strings Attached!
          </h2>
          <div className="bar mt-2"></div>

          <h2 className="display-5 fw-bold mb-3"></h2>
        <p className="lead text-muted w-100 ">
         <span className='text-primary fw-bold'>MatRecord’s</span>  <strong className="fw-bold">Free Plan</strong> gives you everything you need to kickstart your digital health records journey.
        </p>
        <div className="" >
  <div className="text-center w-100">
    <p className="fs-5 mb-2 w-100 m-0" style={{maxWidth:"100%"}}>
      <strong>Get started with MatRecord for FREE</strong> — your first 500 patient records are absolutely free. You can also <strong>register 50+ ANC records every week</strong> and <strong>track birth records</strong> with ease.
    </p>
    <p className="fst-italic small text-secondary">
      🌟 Upgrade anytime as your needs grow — but until then, enjoy the power of MatRecord for free!
    </p>
  </div>
</div>


          <div className="row my-5">
          {freePlans.map((plan, planIndex) => (

            <div className="col-lg-6 col-md-12 col-sm-12 col-12"  key={planIndex}>
              <div className="pricing-container">
                <div className="pricing-cards-container">
                    <div
                      className={`pricing-card`}
                     
                    >
                      <div className={`pricing-header ${plan.headerClass}`}>
                      <div style={{width:"120px"}}>

                      <p className="price-amount mx-0">{plan.price}</p>
                      </div>
                          <h4 className="pricing-title">{plan.title}</h4>
                          <div className="pricing-footer">
                            <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                              Request Demo
                            </button>
                          </div>
                      </div>
                      <div className="pricing-features" style={{ minHeight: '450px' }}>
                        <ul className="row align-items-center px-4 py-2">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="col-xl-6 col-md-6 col-sm-6 col-12 text-start li">
                              <span>{feature.name}</span>
                              <ul className="ps-5 sub-feature">
                                {feature.subfeatures.map((subfeature, subIndex) => (
                                  <li key={subIndex}>{subfeature}</li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                </div>
              </div>
            </div>
          ))}

          </div>
        </div>
      </div>
    );
  }
}
