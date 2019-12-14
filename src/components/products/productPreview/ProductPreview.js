import React from 'react';
import './productPreview.scss';

const ProductPreview = ({ product }) => {
   return (
      <div className="product-preview">

         {/* верстка продукта здесь */}
         <div className="product-preview-image">
            <img src={product.imgSrc} alt="preview image" />
         </div>
         <div className="product-preview-title">{product.title}
            <div className='product-preview-price'>{product.price}$</div>
         </div>
         <div className='product-preview-desc'>{product.desc}</div>
         <hr className='product-preview-line'/>
         <div className='product-preview-category'>
            {product.category.map(value => {
               return  <div>{value}</div>
            })}
         </div>


      </div>
   );
};

export default ProductPreview;
