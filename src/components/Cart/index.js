import React from 'react';
import { connect } from 'react-redux';
import { CartTitle, CartItemsList } from "./components/common";
import './index.scss';

const Cart = ({cart}) => {
    return (
        <div className="cart">
            <CartTitle title="Busket" />
            <CartItemsList items={cart} />
        </div>
    )
};

const mapStateToProps = state => ({
    cart: state.cartReducer
});

export default connect(mapStateToProps, null)(Cart);