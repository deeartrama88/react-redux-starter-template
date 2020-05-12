import React from 'react';
import { connect } from 'react-redux';
import { combineReducers } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addToCart } from '../../../store/actions/product';
import './ProductDeteils.scss';
import ProductMain from '../../../assets/images/ProductDetails/product-main-img.jpg';

const ProductDetails = () => {
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
               <span className="product-box_price">$12.00</span>
               <span className="product-box_text">Royalty Free License</span>
               <button className="product-btn">
                  <FontAwesomeIcon icon="shopping-cart" />
                  <span className="product-btn_text">Add to cart</span>
               </button>
            </div>
            <div className="wrap">
               <h3 className="wrap-title">3d model formats:</h3>
               <ul className="formats">
                  <li>Unity 3D (.unitypackage, .prefab)</li>
                  <li>3D Studio (.3ds)</li>
                  <li>Autodesk (.fbx)</li>
                  <li>OBJ (.obj, .mtl)</li>
                  <li>Stereoligthography (.stl)</li>
               </ul>
               <button className="formats-btn">Request format conversion</button>
            </div>
            <div className="wrap">
               <h3 className="wrap-title">3d model detail</h3>
               <ul className="details">
                  <li>
                     <div className="property">Publish Date</div>
                     <div className="value">2019-09-05</div>
                  </li>
                  <li>
                     <div className="property">Model ID</div>
                     <div className="value">#2105953</div>
                  </li>
                  <li>
                     <div className="property">Animated</div>
                     <div className="value-approved">approved <FontAwesomeIcon icon={['far', 'check-circle']} /></div>
                  </li>
                  <li>
                     <div className="property">Rigged</div>
                     <div className="value-approved">approved <FontAwesomeIcon icon={['far', 'check-circle']} /></div>
                  </li>
                  <li>
                     <div className="property">AR / VR / low-poly</div>
                     <div className="value-approved">approved <FontAwesomeIcon icon={['far', 'check-circle']} /></div>
                  </li>
                  <li>
                     <div className="property">PBR</div>
                     <div className="value-approved">approved <FontAwesomeIcon icon={['far', 'check-circle']} /></div>
                  </li>
                  <li>
                     <div className="property">Geometry</div>
                     <div className="value">Polygon mesh</div>
                  </li>
                  <li>
                     <div className="property">Polygons</div>
                     <div className="value">36 000</div>
                  </li>
                  <li>
                     <div className="property">Vertices</div>
                     <div className="value">31 000</div>
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
