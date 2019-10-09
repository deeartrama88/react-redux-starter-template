import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import LoginMenu from '../login';
import Cart from '../cart';

const Header = () => {
   return (
      <header>
         <div className="container flex">
            <div className="logo">Logo</div>
            <div className="nav">
               <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/"
               >
                  <FontAwesomeIcon icon="utensils" />
                  <span className="nav-text">Dishes</span>
               </NavLink>
               <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/contacts"
               >
                  <FontAwesomeIcon icon="user-friends" />
                  <span className="nav-text">Cooks</span>
               </NavLink>
            </div>
            <div className="log-in">
               <Cart />
               <LoginMenu />
            </div>
         </div>
      </header>
   );
};

export default Header;
