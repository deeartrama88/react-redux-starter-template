import React from 'react';
import ProductList from '../components/products/productList/ProductsList';
import '../assets/scss/mainPage.scss';

const MainPage = () => {
   return (
      <div className="container">
         <div className="main-page-title">
            <div className="orange">Only stylized assets and handpainted textures</div>
            <div className="blue">In world of photoscans, photogrammetry and procedural texturing we offer an original assets, that was created by artist with love!</div>
         </div>
         <ProductList />
      </div>
   );
};

export default MainPage;
