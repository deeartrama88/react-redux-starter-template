import React from 'react';
import ProductPreview from '../productPreview/ProductPreview';
import mockData from '../mockData';
import './productList.scss';

const ProductList = () => {
   return (
      <div className="product-list">
         {mockData.map(product => {
            return <ProductPreview key={product.id} product={product} />;
         })}
      </div>
   );
};

export default ProductList;
