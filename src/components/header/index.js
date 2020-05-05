import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import LoginMenu from '../login';
import LogoIcon from '../../assets/images/header/header-logo-icon.png';

const Index = () => {
    return (
        <header className="header">
           <div className="container">
              <div className="logo">
                 <img src={LogoIcon} alt=""/>
              </div>
              <div className="header-input">
                 <input className="search" type="text"/>
              </div>
              <div className="header-desktop-menu">
                 <div className="header-assets">
                    <FontAwesomeIcon icon="database" />
                    <span className="header-assets-title">My Assets</span>
                 </div>
              </div>
              <div className="header-cart-menu">
                 <FontAwesomeIcon icon={['far', 'comment-alt']} />
                 <FontAwesomeIcon icon={['far', 'heart']} />
                 <FontAwesomeIcon icon="shopping-cart" />
              </div>
              <div className="header-user">
                 <LoginMenu/>
              </div>
              <div className="header-menu">
                 <FontAwesomeIcon icon="bars" />
              </div>
           </div>
        </header>
    );
};

export default Index;
