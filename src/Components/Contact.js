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
  const mapHtml = '<div style="overflow:hidden;resize:none;max-width:100%;width:300px;height:300px;"><div id="embed-map-display" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/view?zoom=17¢er=-1.2986,36.8397&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="googl-ehtml" href="https://www.bootstrapskins.com/themes" id="get-data-for-embed-map">premium bootstrap themes</a><style>#embed-map-display img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}</style></div>'
  const sanitizedMapHtml = DOMPurify.sanitize(mapHtml)

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Contact Us</h2>
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
      <div className='google-map-container' dangerouslySetInnerHTML={{ __html: sanitizedMapHtml }} />
    </div>
      
  );
}

export default Contact;
