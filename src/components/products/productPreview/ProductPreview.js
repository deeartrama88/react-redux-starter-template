import React from 'react';
import './productPreview.scss';

const ProductPreview = ({ product }) => {
   return (
      <div className="product-preview">
         <h2>Product #{product.id}</h2>
         {/* верстка продукта здесь */}
         <div className="product-preview-image">
            <img src={product.imgSrc} alt="preview image" />
         </div>
         <div className="product-preview-title">{product.title}</div>
      </div>
   );
};

export default ProductPreview;
