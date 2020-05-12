import React from 'react';
// import GoogleMail from '../../assets/images/footer/footer-gmail-icon.png';
// import ArtIcon from '../../assets/images/footer/footer-art-icon.png';
// import FacebookIcon from '../../assets/images/footer/footer-facebook-icon.png';
// import InstaIcon from '../../assets/images/footer/footer-insta-icon.png';
// import LinkedinIcon from '../../assets/images/footer/footer-linkedin-icon.png';
// import YoutubeIcon from '../../assets/images/footer/footer-youtube-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../assets/scss/footer.scss';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <span className="footer-title">CONTACTS</span>
            <span className="footer-desc">
               Feel free to contact, join us in social media and help us to
               create better shop!
            </span>
         </div>
         <div className="footer-social">
            <a href="/">
               {/*<img src={GoogleMail} alt="icon" />*/}
               <FontAwesomeIcon icon='envelope' />
            </a>
            <a href="/">
               {/*<img src={ArtIcon} alt="icon" />*/}
               <FontAwesomeIcon icon={['fab', 'artstation']} />
            </a>
            <a href="/">
               {/*<img src={FacebookIcon} alt="icon" />*/}
               <FontAwesomeIcon icon={['fab', 'facebook-square']} />
            </a>
            <a href="/">
               {/*<img src={InstaIcon} alt="icon" />*/}
               <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a href="/">
               {/*<img src={LinkedinIcon} alt="icon" />*/}
               <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
            <a href="/">
               {/*<img src={YoutubeIcon} alt="icon" />*/}
               <FontAwesomeIcon icon={['fab', 'youtube']} />
            </a>
         </div>
      </footer>
   );
};

export default Footer;
