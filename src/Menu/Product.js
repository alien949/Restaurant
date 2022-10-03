import React from "react";
import "./Product.css";
function Product(props) {
  return (
    <div className="outer-div-product">
      <img className="product-images" src={props.image} />
      <p className="product-name-p">
        <span className="product-span">Product Name:</span>
        {props.name}
      </p>
      <div className="div-around-price-and-button">
        <p className="product-price-p">
          <span className="product-span">Product Price:</span>
          {props.price}$
        </p>
        <button className="add-to-cart">Add To Cart</button>
      </div>
    </div>
  );
}

export default Product;
