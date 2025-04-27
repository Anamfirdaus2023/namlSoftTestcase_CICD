import React , {useState} from 'react'
import baseUrl from '../../utils/baseUrl';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import axios from 'axios'

// Import your styles if you have defined them in a separate CSS file

const alertContent = (massege) => {
  MySwal.fire({
      title: 'Congratulations!',
      text: massege ,
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


export default function Modal() {

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
          const url = `${baseUrl}/hopitalSendEmail`;
          const { name, email, number, subject, text } = contact;
          const payload = { name, email, number, subject, text };
          const response = await axios.post(url, payload);
          setContact(INITIAL_STATE);
          alertContent("Your message was successfully send and will back to you soon");
      } catch (error) {
          console.log(error)
      }
  };


  return (
    <div className='text-center my-3'>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Request A Demo?</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-lg-6">

<div className="form-group text-start">
<label>Hospital Name</label>
<input 
    type="text" 
    name="name" 
    placeholder="Hospital Name" 
    className="form-control" 
    value={contact.name}
  onChange={handleChange} 
    required 
/>
</div>
</div>

<div className="col-lg-6">

                  <div className="form-group text-start">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange} 
                      required
                      />

                      </div>
                  </div>
              
                <div className="col-lg-6">

                <div className="form-group text-start">
                                <label>Phone Number</label>
                                <input 
                                   type="text"
                                   inputMode="numeric"
                                   pattern="[0-9]+"
                                   maxLength={11}
                                   name="number" 
                                   placeholder="Phone number" 
                                   className="form-control" 
                                   value={contact.number}
                                   onChange={handleChange} 
                                   required 
                                   />
                                   </div> 
                            </div>
                            <div className="col-lg-6">

                            <div className="form-group text-start">
                                <label>Subject</label>
                                <input 
                                    type="text" 
                                    name="subject" 
                                    placeholder="Subject" 
                                    className="form-control" 
                                    value={contact.subject}
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            </div>


                            <div className="form-group text-start">
                                <label>Message</label>
                                <textarea 
                                    name="text" 
                                    cols="30"   
                                    rows="6" 
                                    placeholder="Write your message..." 
                                    className="form-control" 
                                    value={contact.text}
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            </div>
                <div className="send-btn w-50 mx-auto ">
                  <button type="submit" className="default-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

