import React from 'react';
import ProductList from '../components/products/productList/ProductsList';
import TestList from '../components/TestItems/TestList';

const MainPage = () => {
   return (
      <div className="container">
         <h1>Products list</h1>
         <ProductList />
         <TestList />
      </div>
   );
};

export default MainPage;
