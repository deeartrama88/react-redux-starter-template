import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const LoginMenu = () => {
   return (
      <div className="login">
         <FontAwesomeIcon icon="user" />
         <span className="text">Login</span>
      </div>
   );
};

export default LoginMenu;
