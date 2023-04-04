import { useState } from 'react';
import DOMPurify from 'dompurify';
import Social from './Social';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError('Please enter your name');
      return;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Please enter your email');
      return;
    } else {
      setEmailError('');
    }

    if (!message) {
      setMessageError('Please enter a message');
      return;
    } else {
      setMessageError('');
    }

    // Submit the form
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container">
      <h2 className="text-center mb-5">Keep in Touch</h2>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`form-control ${nameError ? 'is-invalid' : ''}`}
              />
              {nameError && <div className="invalid-feedback">{DOMPurify.sanitize(nameError)}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`form-control ${emailError ? 'is-invalid' : ''}`}
              />
              {emailError && <div className="invalid-feedback">{DOMPurify.sanitize(emailError)}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`form-control ${messageError ? 'is-invalid' : ''}`}
              ></textarea>
              {messageError && <div className="invalid-feedback">{DOMPurify.sanitize(messageError)}</div>}
            </div>

            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </form>
        </div>
        <div className="col-lg-6">
          <div className="embed-responsive embed-responsive-1by1">
            <iframe
              title="Map"
              className="embed-responsive-item"
              src="https://maps.google.com/maps?q=athi%20river&t=&z=10&ie=UTF8&iwloc=&output=embed" 
            height={250}
            width={250}
            ></iframe>
          </div>
        </div>
      </div>
      <Social/>
    </div>
  );
};

export default ContactForm;
