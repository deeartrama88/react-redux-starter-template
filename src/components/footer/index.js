import React from 'react';
import GoogleMail from '../../assets/images/footer/footer-gmail-icon.png';
import ArtIcon from '../../assets/images/footer/footer-art-icon.png';
import FacebookIcon from '../../assets/images/footer/footer-facebook-icon.png';
import InstaIcon from '../../assets/images/footer/footer-insta-icon.png';
import LinkedinIcon from '../../assets/images/footer/footer-linkedin-icon.png';
import YoutubeIcon from '../../assets/images/footer/footer-youtube-icon.png';
import '../../assets/scss/footer.scss';

const Footer = () => {
   return (
      <footer className='footer'>
         <div className="container">
            <span className='footer-title'>CONTACTS</span>
            <span className='footer-desc'>Feel free to contact, join us in social media and help us to create better shop!</span>
         </div>
         <div className='footer-social'>
            <a href="/"><img src={GoogleMail} alt="icon"/></a>
            <a href="/"><img src={ArtIcon} alt="icon"/></a>
            <a href="/"><img src={FacebookIcon} alt="icon"/></a>
            <a href="/"><img src={InstaIcon} alt="icon"/></a>
            <a href="/"><img src={LinkedinIcon} alt="icon"/></a>
            <a href="/"><img src={YoutubeIcon} alt="icon"/></a>
         </div>
      </footer>
   );
};

export default Footer;
