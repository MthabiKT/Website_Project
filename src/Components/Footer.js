import React from 'react';
import '../CSS/Footer.css';

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='copy-right'>
        <p>&copy; 2023 My Website. All rights reserved.</p>
      </div>
       <div className='social-media'>
        <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-facebook-f'></i></a>
        <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-twitter'></i></a>
        <a href='https://instagram.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-instagram'></i></a>
        <a href='https://github.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-github'></i></a>
        <a href='https://medium.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-medium'></i></a>
        <a href='https://linkedin.com/' target='_blank' rel='noopener noreferrer'><i className='fab fa-linkedin'></i></a>
      </div>
    </footer>
  );
}

export default Footer;
