import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; don't need?
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';

const UpperRight = function () {

  return (
    <div className="upper-right">
      <ProductInfo />

      <StyleSelector />

      <AddToCart />
    </div>
  );
};

export default UpperRight;
