import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import { Context } from "../Context/Context";
function Product(props) {
  const context = useContext(Context);
  const navigate = useNavigate();

  function addToCart() {
    context.Data.map((item) => {
      if (props.name === item.name && item.status === "Add to cart") {
        item.status = "Remove";
        props.setRefresh(!props.refresh);
        props.setTotalPrice(props.totalPrice + props.price);
      } else if (props.name === item.name) {
        item.status = "Add to cart";
        props.setRefresh(!props.refresh);
        if (localStorage.getItem(props.name) !== null) {
          props.setTotalPrice(
            props.totalPrice - props.price * localStorage.getItem(props.name)
          );
        } else {
          props.setTotalPrice(props.totalPrice - props.price);
          console.log(localStorage.getItem(item.name));
        }
        localStorage.removeItem(props.name);
      }
    });
  }

  return (
    <div className="outer-div-product">
      <button
        className="add-to-cart"
        onClick={() => {
          addToCart();
          props.increaseCartNumber(props.name);
          props.decreaseCartNumber(props.name);
        }}
      >
        {`${props.status}`}
      </button>
      <img className="product-images" src={props.image} />
      <p className="product-name-p">
        <span className="product-span">Product Name:</span>
        {props.name}
      </p>
      <div className="div-around-price-and-button">
        <p className="product-price-p">
          <span className="product-span">Product Price:</span>
          {props.currency === "$" ? props.price + "$" : props.price * 3 + "Gel"}
        </p>
        <button
          onClick={() => {
            navigate(`/menu/${props.name}`);
          }}
          className="details"
        >
          Details
        </button>
      </div>
    </div>
  );
}

export default Product;
