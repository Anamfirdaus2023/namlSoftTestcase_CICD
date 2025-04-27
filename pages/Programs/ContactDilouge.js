import React, { Component } from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';


import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Slide,
  Button,
} from "@mui/material";

class ContactDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open || false, // Open on mount if true
      name: "",
      email: "",
      number: "", // Changed from contact to number
      errors: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      this.setState({ open: this.props.open });
    }
  }

  // Close the dialog
  handleClose = () => {
    this.setState({ open: false });
    if (this.props.onClose) {
      this.props.onClose(); // Notify the parent component
    }
  };

  // Handle input changes
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // Validate form fields
  validateForm = () => {
    const { name, email, number } = this.state;
    let errors = {};

    if (!name.trim()) {
      errors.name = "Name is required!";
    }

    if (!email.trim()) {
      errors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format!";
    }

    if (!number.trim()) {
      errors.number = "Phone number is required!";
    } else if (!/^\d{10,11}$/.test(number)) {
      errors.number = "Phone number must be 10-11 digits!";
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.validateForm()) {
      const { name, email, number } = this.state; // Corrected to use number

      try {
        const response = await fetch(`${baseUrl}/sendEmail`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify({
          name,
          email,
          number,
          subject: "Internship Program Inquiry",  // Updated subject
          text: `Dear Team,

I am interested in learning more about your internship program and how I can apply. 

Here are my details:
- **Name:** ${name}
- **Email:** ${email}
- **Phone:** ${number}

I would love to know more about the eligibility criteria, duration, and opportunities available. Looking forward to your response.

Best Regards,  
${name}`  // Updated email content
        }),
        //   mode:"no-cors"
        });

        const result = await response.json();
        console.log('result',result)
        if (response.ok) {
          this.props.onClose(); // Close the dialog from parent
          MySwal.fire({
            title: "Congratulations!",
            text: "Thank you! We'll get in touch soon.",
            icon: "success",
            timer: 4000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
        } else {
          throw new Error(result.message || "Something went wrong");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        this.props.onClose(); // Close the dialog from parent
        MySwal.fire({
          title: "Error!",
          text: "Failed to send email. Please try again later.",
          icon: "error",
          showConfirmButton: true,
        });
      }
    }
  };

  render() {
    const { name, email, number, errors } = this.state;
    const { open, onClose } = this.props; // Controlled by parent

    return (
      <Dialog
        open={open}
        onClose={onClose} // Closes when clicking outside
        TransitionComponent={Slide}
        transitionDuration={500}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle className="d-flex justify-content-between align-items-center fw-bold bg-primary text-light">
          <span></span>
          <span>{t('🤝 Enroll Now and Transform Your Career!')}</span>
          <div
            className="d-flex justify-content-center align-items-center rounded-circle p-3"
            style={{ width: "25px", height: "25px", cursor: "pointer", background: "red" }} // Ensure circular shape
            onClick={onClose}
          >
            <button
              type="button"
              className="btn-close"
              style={{ width: "10px", height: "10px", color: "white" }} // Makes the close button white
            ></button>
          </div>
        </DialogTitle>

        <DialogContent>
          <Typography
            variant="body1"
            color="textSecondary"
            align="center"
            className="mt-4"
          >
           {t('Have questions or want to book a seat? Fill in your details, and our team will reach out to you soon!')}
          </Typography>

          <div className="contact-form pb-2" style={{ boxShadow: "none" }}>
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>{t('Name')}</label>
                    <input
                      type="text"
                      name="name"
                      placeholder={t('Name')}
                      className="form-control"
                      value={name}
                      onChange={this.handleChange}
                      required
                    />
                    {errors.name && (
                      <small className="text-danger">{errors.name}</small>
                    )}
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
                      value={email}
                      onChange={this.handleChange}
                      required
                    />
                    {errors.email && (
                      <small className="text-danger">{errors.email}</small>
                    )}
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
                  placeholder={t('Phone Number')}
                  className="form-control"
                  value={number}
                  onChange={this.handleChange}
                  required
                />
                {errors.number && (
                  <small className="text-danger">{errors.number}</small>
                )}
              </div>

              <div className="text-center mt-5">
                <Button type="submit" variant="contained" color="primary">
                  {t('Submit')}
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>

        <Box textAlign="center" py={2} bgcolor="#f8f9fa">
          <Typography variant="body2" color="textSecondary">
           {t('Powered by')} <strong className="text-primary">{t('NamlSoft')}</strong> 🚀
          </Typography>
        </Box>
      </Dialog>
    );
  }
}

export default ContactDialog;
