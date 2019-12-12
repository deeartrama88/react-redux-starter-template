import React from 'react';
import './header.scss';
import LogoIcon from '../../assets/images/header/header-logo-icon.png'
import AssetsIcon from '../../assets/images/header/header-assets-icon.png'
import BasketIcon from '../../assets/images/header/header-basket-icon.png'
import BurgerIcon from '../../assets/images/header/header-burger-icon.png'
import FavriteIcon from '../../assets/images/header/header-favrite-icon.png'
import MassageIcon from '../../assets/images/header/header-message-icon.png'
import UserIcon from '../../assets/images/header/header-user-icon.png'

const Header = () => {
   return (
      <header>
         <div>
            <img src={LogoIcon} alt=""/>
         </div>
         <div>
            <input type="text"/>
         </div>
         <div>
            <img src={AssetsIcon} alt=""/>
         </div>
         <div>
            <img src={MassageIcon} alt=""/>
            <img src={FavriteIcon} alt=""/>
            <img src={BasketIcon} alt=""/>
         </div>
         <div>
            <img src={UserIcon} alt=""/>
         </div>
         <div>
            <img src={BurgerIcon} alt=""/>
         </div>
      </header>
   )
};

export default Header;