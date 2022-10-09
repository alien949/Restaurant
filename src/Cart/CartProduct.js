import React, { useState, useContext, useEffect } from "react";
import Plus from "../Images/plus-sign.png";
import Minus from "../Images/minus-sign.png";
import { Context } from "../Context/Context";
import "./CartProduct.css";
function CartProduct(props) {
  const context = useContext(Context);
  const [quantity, setQuantity] = useState(1);

  //increase quantity of food + increase Total price
  function increaseQuantity() {
    setQuantity(quantity + 1);
    props.setTotalPrice(props.totalPrice + props.price);
  }

  //decrease quantity of food + decrease Total price
  function decreaseQuantity() {
    context.Data.map((item) => {
      if (item.name == props.name && quantity > 1) {
        setQuantity(quantity - 1);
        props.setTotalPrice(props.totalPrice - props.price);
      } else if (item.name == props.name && quantity === 1) {
        setQuantity(0);
        item.status = "Add to cart";
        props.setTotalPrice(props.totalPrice - props.price);
      }
    });
  }

  // remove food
  function removeHandler() {
    context.Data.map((item) => {
      if (props.name === item.name) {
        item.status = "Add to cart";
        localStorage.removeItem(props.name);
        props.setRefresh(!props.refresh);
        props.setTotalPrice(props.totalPrice - props.price * quantity);
      }
    });
  }

  //set quantity in localStorage
  useEffect(() => {
    if (localStorage.getItem(props.name) !== null) {
      setQuantity(JSON.parse(localStorage.getItem(props.name)));
    }
  }, []);

  //get quantity from localStorage
  useEffect(() => {
    if (quantity >= 1) {
      localStorage.setItem(props.name, JSON.stringify(quantity));
    } else {
      localStorage.removeItem(props.name);
    }
  }, [quantity]);

  //render product in cart if quantity >0
  if (quantity > 0) {
    return (
      <div className="cart-particular-product-outer-div">
        <button className="cart-remove-particular-food" onClick={()=>{removeHandler();props.decreaseCartNumber(props.name)}}>
          Remove
        </button>
        <img className="cart-product-image" src={props.image} />
        <div className="cart-div-beside-img">
          <p className="cart-product-name">
            <span className="cart-product-name-span">Product Name:</span>
            {props.name}
          </p>
          <p className="cart-product-price">
            <span>
              Price:
              <span className="price-amount-span">
                {props.currency === "$"
                  ? props.price + "$"
                  : props.price * 3 + "Gel"}
              </span>
            </span>
            <span>
              SUM:
              <span className="price-amount-span">
                {props.currency === "$"
                  ? props.price * quantity + "$"
                  : props.price * quantity * 3 + "Gel"}
              </span>
            </span>
          </p>
          <div className="cart-quantity-div">
            <img src={Minus} onClick={decreaseQuantity} />
            <span>Quantity:{quantity}</span>
            <img
              src={Plus}
              onClick={() => {
                increaseQuantity();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CartProduct;
