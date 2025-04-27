// import React, { Component } from 'react';
// import Navbar from '../components/Layout/Navbar';
// import PageBanner from '../components/Common/PageBanner';
// import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';
// import Footer from '../components/Layout/Footer';
// import { t } from 'i18next';
// import { useTranslation } from 'react-i18next';


// class ServiceDetails extends Component {
//     render() {
        

//         return (
           
//             <>
//                 <Navbar />
                
//                 <PageBanner 
//                     pageTitle="Digital Product Solution " 
//                     homePageUrl="/" 
//                     homePageText="Home" 
//                     activePageText="Digital Product Solution " 
//                     bgImage="item-bg-2" 
//                 /> 

//                 <ServiceDetailsContent />
         
//                 <Footer />
//             </>
//         );
//     }
// }

// export default ServiceDetails;


import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';
import Footer from '../components/Layout/Footer';
import { withTranslation } from 'react-i18next';

class ServiceDetails extends Component {
    render() {
        const { t } = this.props; // get the translation function

        return (
            <>
                <Navbar />

                <PageBanner 
                    pageTitle={t('pageTitles.digitalProduct')} 
                    homePageUrl="/" 
                    homePageText={t('breadcrumbs.home')} 
                    activePageText={t('breadcrumbs.digitalProduct')} 
                    bgImage="item-bg-2" 
                /> 

                <ServiceDetailsContent />

                <Footer />
            </>
        );
    }
}

export default withTranslation()(ServiceDetails); // ✅ wrap it here
