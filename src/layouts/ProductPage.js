import React from 'react';
import ProductDetails from '../components/products/productDeteils/ProductDeteils';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
   const { id } = useParams();
   return (
      <div className="container">
         <h1>Product Page {id}</h1>
         <ProductDetails />
      </div>
   );
};

export default ProductPage;
