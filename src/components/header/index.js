import React from 'react';
import './index.scss';
import LoginMenu from '../login';
import LogoIcon from '../../assets/images/header/header-logo-icon.png';
import AssetsIcon from '../../assets/images/header/header-assets-icon.png';
import BasketIcon from '../../assets/images/header/header-basket-icon.png';
import BurgerIcon from '../../assets/images/header/header-burger-icon.png';
import FavriteIcon from '../../assets/images/header/header-favrite-icon.png';
import MassageIcon from '../../assets/images/header/header-message-icon.png';
import UserIcon from '../../assets/images/header/header-user-icon.png';

const Index = () => {
   return (
      <header className="header">
         <div className="logo">
            <img src={LogoIcon} alt="" />
         </div>
         <div className="header-input">
            <input className="search" type="text" />
         </div>
         <div className="header-assets">
            <img src={AssetsIcon} alt="" />
         </div>
         <div className="header-box">
            <img src={MassageIcon} alt="" />
            <img src={FavriteIcon} alt="" />
            <img src={BasketIcon} alt="" />
         </div>
         <div className="header-user">
            <img src={UserIcon} alt="" />
            <LoginMenu />
         </div>
         <div className="header-menu">
            <img src={BurgerIcon} alt="" />
         </div>
      </header>
   );
};

export default Index;
