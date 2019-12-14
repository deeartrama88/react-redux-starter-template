import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
   const { id } = useParams();
   return (
      <div className="container">
         <h1>Product Page {id}</h1>
      </div>
   );
};

export default ProductPage;
