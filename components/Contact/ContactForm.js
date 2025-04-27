import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'
import { t } from 'i18next';


const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {

    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
    
        // Regular expression to match only numeric characters
        const numericRegex = /^[0-9+]*$/;
    
        // Check if the input value contains only numeric characters
        if (name === "number" && !numericRegex.test(value)) {
            // If input is not numeric, do not update the state
            return;
        }
    
        // Update the state with the new value
        setContact(prevState => ({ ...prevState, [name]: value }));
    };
    
    
    

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/sendEmail`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            const response = await axios.post(url, payload);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <section className="contact-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="contact-text">
                            <h3>Have Any Queries?</h3>
                            <p>We are here to help you with all of your IT needs. Please contact us if you require technical assistance or wish to explore a customized IT solution for your company.</p>
                        </div>

                        <div className="contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>{t('Name')}</label>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder={t('Name')} 
                                                className="form-control" 
                                                value={contact.name}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>{t('Email')}</label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                placeholder={t('Email')} 
                                                className="form-control" 
                                                value={contact.email}
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label>{t('Phone Number')}</label>
                                    <input 
                                       type="text"
                                       inputMode="numeric"
                                       pattern="[0-9]+"
                                       maxLength={11}
                                        name="number" 
                                        placeholder={t('Phone number')} 
                                        className="form-control" 
                                        value={contact.number}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                    
                                <div className="form-group">
                                    <label>{t('Subject')}</label>
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        placeholder={t('Subject')} 
                                        className="form-control" 
                                        value={contact.subject}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                        
                                <div className="form-group">
                                    <label>{t('Message')}</label>
                                    <textarea 
                                        name="text" 
                                        cols="30" 
                                        rows="6" 
                                        placeholder={t('Write your message...')}
                                        className="form-control" 
                                        value={contact.text}
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                
                                <div className="send-btn">
                                    <button type="submit" className="default-btn">
                                        {t('Send Message')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact-image">
                            <img src="/images/contact.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;