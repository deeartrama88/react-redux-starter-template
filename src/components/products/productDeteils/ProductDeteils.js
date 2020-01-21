import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { combineReducers } from 'redux';
import { addToCart } from '../../../store/actions/product';
import './ProductDeteils.scss';
import ProductMain from '../../../assets/images/ProductDetails/product-main-img.jpg';
import ProductCart from '../../../assets/images/ProductDetails/product-cart-icon.png';

const ProductDetails = () => {
   const {id} = useParams();
   console.log(id);
   return (
      <div className="product">
         <div className="product-main">
            <img src={ProductMain} alt="" />
            <div className="product-pack">
               <div className="product-pack_subtitle">Fantasy Sword pack</div>
               <button className="product-pack_btn">+ Add to wish list</button>
            </div>
            <hr />
            <div className="product-caption">
               <div className="product-caption_desc">Description:</div>
               <div className="product-caption_text">
                  Stylized swords set, low poly, optimized for mobile games,
                  handpainted textures, diffuse only. Can be used in many games,
                  good for different purpose. Can be used as weapon and as
                  props. 4 models in pack.
               </div>
               <hr />
            </div>
         </div>
         <div className="product-box">
            <div className="wrap">
               <span className="product-box_price">12.00$</span>
               <span className="product-box_text">Royalty Free License</span>
               <button className="producr-btn">
                  <img className="producr-btn_icon" src={ProductCart} alt="" />
                  <span className="producr-btn_text">Add to cart</span>
               </button>
            </div>
            <div className="sidebar">
               <h3 className="sidebar-title">3d model details</h3>
               <div className="sidebar-headline">Formats:</div>
               <ul className="box">
                  <li className="box-col">OBJ</li>
                  <li className="box-col">FBX</li>
                  <li className="box-col">3ds Max(.max) ver. 2020</li>
               </ul>
               <ul className="input">
                  <li className="input-col">
                     Animated
                     <div className="input-col_style red">
                        <div className="input-col_border red"> </div>
                     </div>
                  </li>
                  <li className="input-col">
                     Rigged
                     <div className="input-col_style green">
                        <div className="input-col_border green"> </div>
                     </div>
                  </li>
               </ul>
               <ul className="object">
                  <li className="object-details">
                     Polygons <span>1302</span>
                  </li>
                  <li className="object-details">
                     Vertices <span>1330</span>
                  </li>
               </ul>
               <ul className="meta">
                  <li className="meta-box">
                     Textures: <span>Diffuse only</span>
                  </li>
                  <li className="meta-box">
                     UV Mapping: <span>non-overlapping</span>
                  </li>
                  <li className="meta-box">
                     Publish date: <span>2019-11-03</span>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

const mapPropsToState = dispatch => combineReducers({
   addToCart
}, dispatch);

export default connect(null, mapPropsToState)(ProductDetails);
