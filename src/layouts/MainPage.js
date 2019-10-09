import React from 'react';
import TestItems from '../components/TestItems';

const MainPage = () => {
   return (
      <div className="container">
         <h1>Choose your meal for today:)</h1>
         <TestItems />
      </div>
   );
};

export default MainPage;
