import React, { useState } from 'react';
import '../CSS/Contacts.css';
import DOMPurify from 'dompurify';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameError('');
    setEmailError('');
    setMessageError('');

    let isValid = true;

    // Check if name field is empty
    if (name.trim() === '') {
      setNameError('Please enter your name');
      isValid = false;
    }

    // Check if email field is empty or contains an invalid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === '') {
      setEmailError('Please enter your email');
      isValid = false;
    } else if (!emailRegex.test(email.trim())) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    // Check if message field is empty
    if (message.trim() === '') {
      setMessageError('Please enter a message');
      isValid = false;
    }

    if (isValid) {
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      alert("Saved successfully!");
      setName('');
      setEmail('');
      setMessage('');
    }
  };


  return (<>
    <h2>Keep in Touch</h2>
    <div className='contact-container'>
  
    <div className="contact-form-container">
      
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="contact-form-input"
        />
        {nameError && <div className="error-message">{DOMPurify.sanitize(nameError)}</div>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="contact-form-input"
        />
        {emailError && <div className="error-message">{DOMPurify.sanitize(emailError)}</div>}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="contact-form-message"
        ></textarea>
        {messageError && <div className="error-message">{DOMPurify.sanitize(messageError)}</div>}

        <button type="submit" className="contact-form-submit">Submit</button>
      </form>
    </div>
    <div className="contact-map-container">
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe className='map'
          width="450"
          height="450"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=athi river&t=&z=10&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          marginheight="0"
          marginwidth="0"></iframe>
      </div>
    </div>
  </div>
  </div>
  </>
);
}

export default Contact;
