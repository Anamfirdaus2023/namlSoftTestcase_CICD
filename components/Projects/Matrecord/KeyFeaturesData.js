 import React from 'react';
 
 export  const teamMembers = [
  {
    name: 'Qamar Khan',
    role: 'Product Manager',
    description: 'Product Manager, with over 17+ years of IT industry experience in designing and developing Software Apps and Products on Adobe InDesign windows and Macintosh OS, Web and Mobile Apps.',
    image: '/images/team/QK.png',
    email:'qamar.khan@namlsoft.com',
    socials: {
      linkedin: 'https://www.linkedin.com/in/qamar-khan-46a92774/',
      facebook: 'https://www.facebook.com/',
      twitter: 'https://www.twitter.com/'
    }
  },
  {
    name: 'Tayyab Shaikh',
    role: 'Sales Manager',
    description: 'Sales Manager, With over 25+ years of mastery in sales management, Tayyab Shaikh brings invaluable wisdom and leadership to our team, guiding us towards unprecedented success.',
    image: '/images/team/TS.png',
    email:'tayyab@namlsoft.com',
    socials: {
      linkedin: 'https://www.linkedin.com/',
      facebook: 'https://www.facebook.com/',
      twitter: 'https://www.twitter.com/'
    }
  }, {
    name: 'Mohsin Dadarkar',
    role: 'HR Manager',
    description: 'With extensive expertise and a proven track record, Mohsin Dadarkar excels as our HR leader, fostering a thriving and dynamic workplace for our team.',
    image: '/images/team/MD.png',
    email:'mohsin.dadarkar@namlsoft.com',
    socials: {
      linkedin: 'https://in.linkedin.com/in/mohsin-dadarkar-4a386023/',
      facebook: 'https://www.facebook.com/',
      twitter: 'https://www.twitter.com/'
    }
  },
  
  // Add more team members as needed
];

export const TeamMembers = [
    {
      name: 'Qamar Khan',
      role: 'Product Manager',
      description: 'Product Manager, with over 17+ years of IT industry experience in designing and developing Software Apps and Products on Adobe InDesign windows and Macintosh OS, Web and Mobile Apps.',
      imgSrc: '/images/team/QK.png',
      email:'qamar.khan@namlsoft.com',
      socialLinks: [
        { platform: "linkedin", iconClass: "bx bxl-linkedin", url: "https://www.linkedin.com/in/qamar-khan-46a92774/" },
        
        ],
    },
    {
      name: 'Tayyab Shaikh',
    role: 'Sales Manager',
    description: 'Sales Manager, With over 25+ years of mastery in sales management, Tayyab Shaikh brings invaluable wisdom and leadership to our team, guiding us towards unprecedented success.',
    imgSrc: '/images/team/TS.png',
    email:'tayyab@namlsoft.com',
      socialLinks: [
        { platform: "linkedin", iconClass: "bx bxl-linkedin", url: "#" },
        
        ],
    },
    {
      name: 'Mohsin Dadarkar',
      role: "Operation's Head",
      description: 'With extensive expertise and a proven track record, Mohsin Dadarkar excels as our HR leader, fostering a thriving and dynamic workplace for our team.',
      imgSrc: '/images/team/MD.png',
      email:'mohsin.dadarkar@namlsoft.com',
      socialLinks: [
        { platform: "linkedin", iconClass: "bx bxl-linkedin", url: "https://in.linkedin.com/in/mohsin-dadarkar-4a386023/" },
        
        ],
    },
];

// -----------------Plans-------------------

export const OPDPricingPlans = [
  {
    title: "Pro Lite Plan (OPD)",
    price: "₹12,000 / Year",
    features: [
      {
        name: "Obstetric Records (ANC)",
        subfeatures: ["Patient Details", "Obstetric Details"],
      },
      {
        name: "OPD Records (NANC)",
        subfeatures: ["Patient Details", "Patient Examination"],
      },
      {
        name: "Print Ready PDF",
        subfeatures: ["Download", "Share"],
      },
      {
        name: "Clinic Account",
        subfeatures: ["Clinic Details ", "Doctor Details"],
      },
      {
        name: "Local Backup",
        subfeatures: ["Xls File Format", "Anytime"],
      },
      {
        name: "2 User Access",
        subfeatures: ["Admin", "Attendant"],
      },
    ],
    headerClass: "opd-header"
  },
  {
    title: "Pro Plan (OPD)",
    // price: "₹15,000 / Year",
    features: [
      {
        name: "Obstetric Records (ANC)",
        subfeatures: ["Patient Details", "Obstetric Details"],
      },
      {
        name: "OPD Records (NANC)",
        subfeatures: ["Patient Details", "Patient Examination"],
      },
      {
        name: "Followup Record (ANC)",
        subfeatures: ["Prescription", "Investigations"],
      },
      {
        name: "Print Ready PDF",
        subfeatures: ["Download", "Share"],
      },
      {
        name: "Clinic Account",
        subfeatures: ["Clinic Details ", "Doctor Details"],
      },
      {
        name: "Local Backup",
        subfeatures: ["Xls File Format", "Anytime"],
      },
      {
        name: "2 User Access",
        subfeatures: ["Admin", "Attendant"],
      },
    ],
    headerClass: "pro-header"
  },
  {
    title: "Elite Plan (OPD)",
    // price: "₹20,000 / Year",
    features: [
      {
        name: "Obstetric Records (ANC)",
        subfeatures: ["Patient Details", "Obstetric Details"],
      },
      {
        name: "OPD Records (NANC)",
        subfeatures: ["Patient Details", "Patient Examination"],
      },
      {
        name: "Followup Record (ANC)",
        subfeatures: ["Prescription", "Investigations"],
      },
      {
        name: "Follow up Records (NANC)",
        subfeatures: ["Prescription", "Investigations"],
      },
      {
        name: "Billing Management",
        subfeatures: ["Consultation Fee", "Hospital Bill"],
      }, 
      {
        name: "Print Ready PDF",
        subfeatures: ["Download", "Share"],
      },
      {
        name: "Clinic Account",
        subfeatures: ["Clinic Details ", "Doctor Details"],
      },
      {
        name: "Local Backup",
        subfeatures: ["Xls File Format", "Anytime"],
      },
      {
        name: "2 User Access",
        subfeatures: ["Admin", "Attendant"],
      },
      
    ],
    headerClass: "opd-header"
  },
];

export const IPDPricingPlans = [
  {
    title: "Pro Lite Plan (IPD)",
    price: "₹24,000 / Year",
    features: [
      {
        name: "Obstetric Records (ANC)",
        subfeatures: ["Patient Details", "Obstetric Details"],
      },
      {
        name: "Delivery Records (ANC)",
        subfeatures: ["Twins ", "Triplet"],
      },
      {
        name: "Baby Birth Record ",
        subfeatures: ["Baby Details", "Diagnosis Details"],
      },
      {
        name: "Hospital Records",
        subfeatures: ["Delivery Records", "MLC Records"],
      },
      {
        name: "Print Ready PDF",
        subfeatures: ["Download", "Share"],
      },
      {
        name: "Hospital Account",
        subfeatures: ["Hospital Details ", "Doctor Details"],
      },
      {
        name: "Local Backup",
        subfeatures: ["Xls File Format", "Anytime"],
      },
      {
        name: "2 User Access",
        subfeatures: ["Admin", "Attendant"],
      },
    ],
    headerClass: "opd-header"
  },
  {
    title: "Pro Plan (IPD)",
    // price: "₹25,000 / Year",
    features: [
      {
        name: "Obstetric Records (ANC)",
        subfeatures: ["Patient Details", "Obstetric Details"],
      },
      {
        name: "Followup Record (ANC)",
        subfeatures: ["Prescription", "Investigations"],
      },
      {
        name: "Delivery Records ",
        subfeatures: ["Twins ", "Triplet"],
      },
      {
        name: "Discharge Card",
        subfeatures: ["Clinical History", "Treatment Given"],
      },
      {
        name: "Baby Birth Record ",
        subfeatures: ["Baby Details", "Diagnosis Details"],
      },
      {
        name: "Hospital Records",
        subfeatures: ["Delivery Records", "MLC Records"],
      },
      {
        name: "Print Ready PDF",
        subfeatures: ["Download", "Share"],
      },
      {
        name: "Hospital Account",
        subfeatures: ["Hospital Details ", "Doctor Details"],
      },
      {
        name: "Local Backup",
        subfeatures: ["Xls File Format", "Anytime"],
      },
      {
        name: "2 User Access",
        subfeatures: ["Admin", "Attendant"],
      },
    ],
    headerClass: "pro-header"
  },
  {
    title: "Elite Plan (IPD)",
    // price: "₹30,000 / Year",
    features: [
      {
        name: "Obstetric Records (ANC)",
        subfeatures: ["Patient Details", "Obstetric Details"],
      },
      {
        name: "Followup Record (ANC)",
        subfeatures: ["Prescription", "Investigations"],
      },
      {
        name: "Delivery Records ",
        subfeatures: ["Twins ", "Triplet"],
      },
      {
        name: "Discharge Card",
        subfeatures: ["Clinical History", "Treatment Given"],
      },
      {
        name: "Baby Birth Record ",
        subfeatures: ["Baby Details", "Diagnosis Details"],
      },
      {
        name: "Hospital Records",
        subfeatures: ["Delivery Records", "MLC Records"],
      },
      
      {
        name: "Billing Management",
        subfeatures: ["Hospital Bill", "Delivery Packages"],
      },  
      {
        name: "Print Ready PDF",
        subfeatures: ["Download", "Share"],
      },
      {
        name: "Hospital Account",
        subfeatures: ["Hospital Details ", "Doctor Details"],
      },
      {
        name: "Local Backup",
        subfeatures: ["Xls File Format", "Anytime"],
      },
      {
        name: "2 User Access",
        subfeatures: ["Admin", "Attendant"],
      },
    ],
    headerClass: "opd-header"
  },
];

export const freePlans = [
  {
    title: "Basic Plan-OPD ",
    price: "Free",
    features: [
      {
        name: "Obstetric Records (ANC)",
        subfeatures: ["Patient Details", "Obstetric Details"],
      },
      {
        name: "OPD Records (NANC)",
        subfeatures: ["Patient Details", "Patient Examination"],
      },
      {
        name: "Clinic Records",
        subfeatures: ["Download", "Share"],
      },
      {
        name: "Clinic Account",
        subfeatures: ["Clinic Details ", "Doctor Details"],
      },
      {
        name: "Prescription Print Ready PDF",
        subfeatures: ["Download", "Share"],
      },
      {
        name: "Local Backup",
        subfeatures: ["Xls File Format", "Anytime"],
      },
      {
        name: "One User Access",
        subfeatures: ["Admin",],
      },
    ],
    headerClass: "opd-header"
  },
  {
    title: "Basic Plan-IPD",
    price: "Free",
    features: [
      {
        name: "Obstetric Records (ANC)",
        subfeatures: ["Patient Details", "Obstetric Details"],
      },
      {
        name: "Delivery Records",
        subfeatures: ["Twins", "Triplets"],
      },
      {
        name: "Baby Birth Records",
        subfeatures: ["Baby Details ", "Diagnosis Details"],
      },
      {
        name: "Hospital Records",
        subfeatures: ["Delivery Records ", "MLC Records"],
      },
      {
        name: "Hospital Account",
        subfeatures: ["Hospital Details ", "Doctor Details"],
      },
      {
        name: "Prescription Print Ready PDF",
        subfeatures: ["Download", "Share"],
      },
      {
        name: "Local Backup",
        subfeatures: ["Xls File Format", "Anytime"],
      },
      {
        name: "One User Access",
        subfeatures: ["Admin",],
      },
    ],
    headerClass: "pro-header"
  },
]


// export const IPDPricingPlans = [
//   {
//     title: "Pro Lite Plan (IPD) ",
//     price: "₹20,000 / Year",
//     features: [
//       "Obstetric Records",
//       "Delivery Records",
//       "Baby Birth Record",
//       "Hospital Records",
//       "Print Ready PDF ",
//       "Hospital Account ",
//       "Local Backup",
//       "2 User Access",
//     ],
//     headerClass: "opd-header"
//   },
//   {
//     title: "Pro Plan (IPD)",
//     price: "₹25,000 / Year",
//     features: [
//       "Obstetric Records ",
//       "Follow up Records ",
//       "Delivery Records",
//       "Discharge Card ",
//       "Baby Birth Record",
//       "Hospital Records",
//       "Print Ready PDF ",
//       "Hospital Account ",
//       "Local Backup",
//       "2 User Access",
//     ],
//     headerClass: "pro-header"
//   },
//   {
//     title: "Elite Plan (IPD)",
//     price: "₹30,000 / Year",
//     features: [
//       "Obstetric Records",
//       "Follow up Records ",
//       "Delivery Records",
//       "Discharge Card ",
//       "Baby Birth Record",
//       "Hospital Records",
//       "Billing Management",
//       "Print Ready PDF ",
//       "Hospital Account ",
//       "Local Backup",
//       "2 User Access",
//     ],
//     headerClass: "opd-header"
//   }
// ];

  export const MatDetails = [
    {
      id: 1,
      heading:"Comprehensive Maternity ANC Record",
      text: 'Add, update, and print patient records hassle-free.',
    },
    {
      id: 2,
      heading:"Comprehensive ANC Details",
      text: 'Detailed obstetric information, follow-up records,  delivery details and discharge card.',
    },
    {
      id: 3,
      heading:"Baby Birth Records",
      text: 'Capture vital information about the baby, mother  medical history and Vaccination card.',

    },
    {
      id: 4,
      heading:"Comprehensive Non ANC Details",
      text: 'Detailed Patient examination, Physical examination, Follow-up records, Prescription, USG, Investigation and Reciept.',

    },
    {
      id: 5,
      heading:"Data Security",
      text: 'One-record attendant login ensures limited data access for effective management.',
    },
    {
      id: 6,
      heading:"Monthly Backups",
      text: 'Easily maintain and print past month hospital delivery records',
    },
    {
      id: 7,
      heading:"Secure Cloud Storage",
      text: 'Save your hospital records on our secure AWS Cloud Servers.',
    },
   
    // Add more features as needed
  ];
  
  export const Faq_Question = [
    {
      "id": 1,
      "Question": "What exactly MatRecord software is?",
      "answer": "MatRecord is maternity and birth record management cloud-based software for Nursing Home and Hospital. And for General & Family Physician(GP) and Gynaec Consultant Non ANC record management.",
    },
    {
      "id": 2,
      "Question": "Who can use MatRecord software ?",
      "answer": "Nursing Home and Hospital. General & Family Physician(GP) and Gynaec Consultant can use MatRecord software.",
    },
    {
      "id": 3,
      "Question": "MatRecord software for IPD or OPD or Both ?",
      "answer": "MatRecord software specially designed for ANC maternity record management in Nursing Home and Hospital. General & Family Physician(GP) and Gynaec Consultant can use MatRecord software.",
    },
    {
      "id": 4,
      "Question": "What is Cloud ?",
      "answer": "Cloud is the internet where your software will work in a virtual safe and secure network.",
    },
    {
      "id": 5,
      "Question": "Who is the software company ?",
      "answer": "NamlSoft is the company who has developed MatRecord software for Nursing Homes and Hospitals for maternity record management system.",
    },
    {
      "id": 6,
      "Question": "Is software has medical bill and receipt features ?",
      "answer": "Yes, MatRecord gives you medical bill print and download copy feature for ANC and Non ANC (OPD) patients with patient details, bill particulars option, billing history, bill with receipt print and download. You can easily add your medical bill particulars with charges from your admin account.",
    },
    {
      "id": 7,
      "Question": "Where will be the hospital data stored ?",
      "answer": "Hospital data will be stored in MatRecord (NamlSoft) dedicated cloud database server.",
    },
    {
      "id": 8,
      "Question": "Can I access my Hospital data on my local computer/laptop ?",
      "answer": "Yes, 100% MatRecord hospital admin has full access to data, even admin can take a backup on a local computer.",
    },
    {
      "id": 9,
      "Question": "What will be annual maintenance charges for software?",
      "answer": "NamlSoft is offering the first year AMC free on the purchase license copy after that it varies between 15-20% on the basic license key cost.",
    },
  ];

  export const MrBlogPosts = [
    {
      id: 1,
      date: "22 January 2024",
      title:  "MatRecord App Licensed to Kala Clinic & Nursing Home, Kondhwa by NamlSoft",
      image: "/images/blog/MatrecordBlog1.png",
      content: "NamlSoft is delighted to announce the licensing of the first perpetual copy of its Digital Health Record Cloud Application, MatRecord, to Kala Clinic & Nursing Home, Kondhwa.",
      paragraph :"MatRecord is an advanced Electronic Medical Records (EMR) software designed specifically for gynecologists, nursing homes, and hospitals. Seamlessly manage patient records, ANC details, baby birth records, and medical documents. Key features include detailed ANC patient information, delivery records, and a secure cloud storage solution."
    },
    {
      id: 2,
      date: "21 July 2024",
      title:  "MatRecord App Licensed to Navjeevan Nursing Home, Hadapsar by NamlSoft",
      image: "/images/blog/navJeevan-Hospital.png",
      content: "NamlSoft is delighted to announce the licensing of the Pro IPD plan of its Digital Health Record Cloud Application, MatRecord, to Navjeevan Nursing Home, Hadapsar.",
      paragraph :"MatRecord is an advanced Electronic Medical Records (EMR) software designed specifically for gynecologists, nursing homes, and hospitals. Seamlessly manage patient records, ANC details, baby birth records, and medical documents. Key features include detailed ANC patient information, delivery records, and a secure cloud storage solution."
    },
    // {
    //   id: 2,
    //   date: "22 February 2024",
    //   title:  "MatRecord App Trial Copy Installed At Sarwat Hospital By NamlSoft",
    //   image: "/images/blog/sarwatHospital.png",
    //   content: "NamlSoft is delighted to announce the licensing of the initial Field testing copy of its Digital Health Record Cloud Application, MatRecord, to Sarwat Hospital .",
    //   paragraph :"MatRecord is an advanced Electronic Medical Records (EMR) software designed specifically for gynecologists, nursing homes, and hospitals. Seamlessly manage patient records, ANC details, baby birth records, and medical documents. Key features include detailed ANC patient information, delivery records, and a secure cloud storage solution."
    // },
    // {
    //   id: 3,
    //   date: "22 February 2024",
    //   title:  "MatRecord App Trial Copy Installed At Prega Hospital By NamlSoft",
    //   image: "/images/blog/pregaHospital.png",
    //   content: "NamlSoft is delighted to announce the licensing of the initial Field testing copy of its Digital Health Record Cloud Application, MatRecord, to Prega Hospital.",
    //   paragraph :"MatRecord is an advanced Electronic Medical Records (EMR) software designed specifically for gynecologists, nursing homes, and hospitals. Seamlessly manage patient records, ANC details, baby birth records, and medical documents. Key features include detailed ANC patient information, delivery records, and a secure cloud storage solution."
    // },
    // {
    //   id: 4,
    //   date: "22 February 2024",
    //   title:  "MatRecord App Trial Copy Installed At Hiba Hospital By NamlSoft",
    //   image: "/images/blog/hibaHospital.png",
    //   content: "NamlSoft is delighted to announce the licensing of the initial Field testing copy of its Digital Health Record Cloud Application, MatRecord, to Hiba Hospital.",
    //   paragraph :"MatRecord is an advanced Electronic Medical Records (EMR) software designed specifically for gynecologists, nursing homes, and hospitals. Seamlessly manage patient records, ANC details, baby birth records, and medical documents. Key features include detailed ANC patient information, delivery records, and a secure cloud storage solution."
    // },
  ];
  
  // {
  //   id: 5,
  //   date: "02 March 2024",
  //   title:  "MatRecord App Trial Copy Installed At Gultekdi Nursing Home By NamlSoft",
  //   image: "/images/blog/Gultekdi-Nursing Home.png",
  //   content: "NamlSoft is delighted to announce the licensing of the initial Field testing copy of its Digital Health Record Cloud Application, MatRecord, to Gultekdi Nursing Home.",
  //   paragraph :"MatRecord is an advanced Electronic Medical Records (EMR) software designed specifically for gynecologists, nursing homes, and hospitals. Seamlessly manage patient records, ANC details, baby birth records, and medical documents. Key features include detailed ANC patient information, delivery records, and a secure cloud storage solution."
  // },

import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';

  export const MatRecordPricing = [
    {
      feature: "Gyane Features",
      basicPlan:<CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />,
      proPlan: <CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />
    },
    {
      feature: "Obstetric Records (ANC)",
      basicPlan:<CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />,
      proPlan: <CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />
    },
    {
      feature: "Discharge Card",
      basicPlan:<CancelRoundedIcon className='checkIcon' style={{ width: '30px', height: '30px' }}  />,
      proPlan: <CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />
    },
    {
      feature: "Vaccination Card",
      basicPlan:<CancelRoundedIcon className='checkIcon' style={{ width: '30px', height: '30px' }}  />,
      proPlan: <CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />
    },
    {
      feature: "Billing Managment",
      basicPlan:<CancelRoundedIcon className='checkIcon' style={{ width: '30px', height: '30px' }}  />,
      proPlan: <CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />
    },
    {
      feature: "OPD Records (Non ANC)",
      basicPlan:<CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />,
      proPlan: <CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />
    },
    {
      feature: "Prescriptions",
      basicPlan:<CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />,
      proPlan: <CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />
    },
    {
      feature: "Delivery Records",
      basicPlan:<CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />,
      proPlan: <CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />
    },
    {
      feature: "Baby Birth Records ",
      basicPlan:<CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />,
      proPlan: <CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />
    },
    {
      feature: "Hospital Records ",
      basicPlan:<CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />,
      proPlan: <CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />
    },
    {
      feature: "Data Security ",
      basicPlan:<CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />,
      proPlan: <CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />
    },
    {
      feature: "Monthly Local Backup ",
      basicPlan:<CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />,
      proPlan: <CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />
    },
    {
      feature: "Cloud Based Easy Install & Use ",
      basicPlan:<CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />,
      proPlan: <CheckCircleSharpIcon className='checkedIcon' style={{ width: '30px', height: '30px' }} />
    },
   
  ];

  export const FeatureRecordsData = [
    {
      title: "Obstetric Records",
      image: "/images/projects/vector.png",
      imageFirst: true, // Flag to indicate the position of the image
      features: [
        { img: "/images/projects/MatRecord/pregnant-woman.png", label: "Obstetric Details" },
        { img: "/images/projects/MatRecord/checklist.png", label: "Follow Up Record" },
        { img: "/images/projects/MatRecord/prescriptionRx.png", label: "Prescription" },
        { img: "/images/projects/MatRecord/health-check.png", label: "Delivery Record" },
        { img: "/images/projects/MatRecord/discjargCard.png", label: "Discharge Card" },
        { img: "/images/projects/MatRecord/vaccinations.png", label: "Vaccination Card" },
        // { img: "/images/projects/MatRecord/billing.png", label: "Billing Management" },
        // { img: "/images/projects/MatRecord/curriculum-vitae.png", label: "Case Paper" },
      ]
    },
    {
      title: "OPD Records",
      image: "/images/projects/vector.png",
      imageFirst: false, // Flag to indicate the position of the image
      features: [
        { img: "/images/projects/MatRecord/history.png", label: "Menstrual History" },
        { img: "/images/projects/MatRecord/medical-staff.png", label: "Investigation" },
        // { img: "/images/projects/MatRecord/pregnant-woman.png", label: "Obstetric Details" },
        { img: "/images/projects/MatRecord/checklist.png", label: "Follow Up Record" },
        { img: "/images/projects/MatRecord/prescriptionRx.png", label: "Prescription" },
        // { img: "/images/projects/MatRecord/profile.png", label: "Patient Info" },
        // { img: "/images/projects/MatRecord/printer.png", label: "Details Print Download Share" },
        { img: "/images/projects/MatRecord/billing.png", label: "OPD Receipt" },
      ]
    },
    {
      title: "Baby Birth Record",
      image: "/images/projects/vector.png",
      imageFirst: true, // Flag to indicate the position of the image
      features: [
        { img: "/images/projects/MatRecord/baby.png", label: "Baby Information" },
        // { img: "/images/projects/MatRecord/breastfeeding.png", label: "Mother Information" },
        // { img: "/images/projects/MatRecord/businessman.png", label: "Father Information" },
        { img: "/images/projects/MatRecord/businessman.png", label: "Parents Info" },
        { img: "/images/projects/MatRecord/certificate.png", label: "Birth Certificate" },
        { img: "/images/projects/MatRecord/medical-report.png", label: "Diagnosis Details" },
        { img: "/images/projects/MatRecord/vaccination.png", label: "Baby Vaccination" },

      ]
    },

    {
      title: "Billing Management",
      image: "/images/projects/vector.png",
      imageFirst: false, // Flag to indicate the position of the image
      customized:true,
      features: [
        { img: "/images/projects/MatRecord/billing.png", label: "Billing Template" },
        { img: "/images/projects/MatRecord/online-payment.png", label: "Hospital Bill" },
        { img: "/images/projects/MatRecord/keywords.png", label: "Delivery Packages" },
        { img: "/images/projects/MatRecord/medicalBill.png", label: "Vaccination Bill" },
        { img: "/images/projects/MatRecord/payment.png", label: "Non ANC Bill " },
        { img: "/images/projects/MatRecord/help-desk.png", label: "OPD Consultation" },
      ]
    },

    {
      title: "Advanced Healthcare",
      image: "/images/projects/vector.png",
      imageFirst: false, // Flag to indicate the position of the image
      customized:true,
      features: [
        { img: "/images/projects/MatRecord/cloud-upload.png", label: "Local Backup" },
        { img: "/images/projects/MatRecord/auditory.png", label: "Data Security " },
        { img: "/images/projects/MatRecord/responsive-design.png", label: "2 Device Access" },
        { img: "/images/projects/MatRecord/help-desk.png", label: "Technical Support " },
        { img: "/images/projects/MatRecord/chat.png", label: "Patient Communication" },
        // { img: "/images/projects/MatRecord/classroom.png", label: "Prodcut Training " },
        // { img: "/images/projects/MatRecord/ai-assistant.png", label: "AI Features" },
        // { img: "/images/projects/MatRecord/web-portal.png", label: "HMIS Portal" },
        // { img: "/images/projects/MatRecord/whatsapp.png", label: "WhatsApp Push Notifications" },
        // { img: "/images/projects/MatRecord/sms.png", label: "SMS Notifications " },
      ]
    },
  
  ];


  export const ProdyctCarouselItems = [
    {
      src: "/images/projects/MatRecord/MR-img.png",
      alt: "MatRecord Image",
  },
  {
      src: "/images/projects/MatRecord/FollowUp.png",
      alt: "Follow Up Image",
  },
  {
      src: "/images/projects/MatRecord/MR-Birth Record-Lsit-Page1.png",
      alt: "Birth Record List Page",
  },
  {
      src: "/images/projects/MatRecord/MR-Discharge-Card-Page-3.png",
      alt: "Discharge card",
  }
  ]
  