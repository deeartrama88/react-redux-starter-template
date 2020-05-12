import React from 'react';
import ProductDetails from '../components/products/productDeteils/ProductDeteils';
import MainPageTitle from '../components/common/MainPageTitle';

const ProductPage = () => {
   return (
      <div className="container">
         <MainPageTitle />
         <ProductDetails />
      </div>
   );
};

export default ProductPage;
