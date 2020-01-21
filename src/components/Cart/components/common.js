import React from 'react';

const CartTitle = ({title}) => {
    return (
        <div className="cart-title">{title}</div>
    )
};

const CartItemsList = ({items}) => {
    return (
        <div className="cart-list">
            {items.map(item => <div key={item.id}>item.id</div>)}
        </div>
    )
};

export {
    CartTitle,
    CartItemsList
}