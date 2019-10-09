import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const Cart = () => {
   return (
      <div className="cart">
         <FontAwesomeIcon icon="cart-plus" />
         <span className="text">Cart</span>
      </div>
   );
};

export default Cart;
