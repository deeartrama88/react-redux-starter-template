import React from 'react';
import ProductList from '../components/products/productList/ProductsList';
import MainPageTitle from '../components/common/MainPageTitle';
import '../assets/scss/mainPage.scss';

const MainPage = () => {
   return (
      <div className="container">
         <MainPageTitle />
         <ProductList />
      </div>
   );
};

export default MainPage;
