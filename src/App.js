import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import './assets/scss/app.scss';
import './assets/fontAwesomeConnection';

const MainPage = lazy(() => import('./layouts/MainPage'));
const CooksPage = lazy(() => import('./layouts/Cooks'));

const App = () => {
   return (
      <BrowserRouter>
         <div className="app">
            <Header />
            <div className="main-content">
               <Suspense fallback={<div>loading...</div>}>
                  <Route exact path="/" component={MainPage} />
                  <Route exact path="/contacts" component={CooksPage} />
               </Suspense>
            </div>
            <Footer />
         </div>
      </BrowserRouter>
   );
};

export default App;
