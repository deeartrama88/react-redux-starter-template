import React from 'react';
import GoogleMail from '../../assets/images/footer/footer-gmail-icon.png';
import '../../assets/scss/footer.scss';

const Footer = () => {
   return (
      <footer>
         <div className="container">Footer</div>
         <img src={GoogleMail} alt="icon" />
      </footer>
   );
};

export default Footer;
