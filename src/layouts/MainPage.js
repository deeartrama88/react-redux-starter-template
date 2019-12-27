import React from 'react';
import ProductList from '../components/products/productList/ProductsList';

const MainPage = () => {
   return (
      <div className="container">
         <h1>Products list</h1>
         <ProductList />
      </div>
   );
};

export default MainPage;
