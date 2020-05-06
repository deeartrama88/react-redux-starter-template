import React from 'react';
import './productPreview.scss';

const ProductPreview = ({ product }) => {
   return (
      <div className="product-preview">
         <div
            style={{backgroundImage: `url("${product.imgSrc}")`}}
            className="product-preview-image"
         >
         </div>
         <div className="product-preview-title">{product.title}</div>
         <div className="product-preview-price">
            <div className='category'>
               {product.category.map(value => <div key={value}>{value}</div>)}
            </div>
            <div className='price'>{product.price}$</div>
         </div>
      </div>
   );
};

export default ProductPreview;
