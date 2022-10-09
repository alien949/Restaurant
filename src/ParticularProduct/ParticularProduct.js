import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";
import "./ParticularProduct.css";
import BackToMenu from "../Images/back-to-menu.png";

function ParticularProduct(props) {
  const Navigate = useNavigate();
  const context = useContext(Context);
  const { id } = useParams();
  const [refresh, setRefresh] = useState(false);

  function addToCart() {
    context.Data.map((item) => {
      if (id === item.name && item.status === "Add to cart") {
        item.status = "Remove";
        setRefresh(!refresh);
      } else if (id === item.name) {
        item.status = "Add to cart";
        setRefresh(!refresh);
      }
    });
  }

  function navigateHandler() {
    setTimeout(() => {
      Navigate(`/menu`);
    }, 600);
    const Div = document.querySelector(".particular-product-outer-div");
    Div.classList.toggle("particular-product-outer-div-animation");
  }

  return context.Data.map((item) => {
    if (item.name === id) {
      return (
        <div className="particular-product-general-div">
          <div key={item.name} className="particular-product-outer-div">
            <img
              className="back-to-menu"
              src={BackToMenu}
              onClick={() => {
                navigateHandler();
              }}
            />
            <button
              className="particular-product-add-to-cart"
              onClick={addToCart}
            >
              {item.status}
            </button>
            <img className="particular-product-images" src={item.image} />
            <p className="particular-product-name-p">
              <span className="particular-product-span">Product Name:</span>
              {item.name}
            </p>
            <p className="particular-product-description">
              <span className="particular-product-span">
                Product Description:
              </span>
              {item.description}
            </p>
            <div className="particular-product-div-around-price-and-button">
              <p className="particular-product-price-p">
                <span className="particular-product-span">Product Price:</span>
                {props.currency === "$" ? item.price + "$" : item.price * 3 + "Gel"}
              </p>
            </div>
          </div>
        </div>
      );
    }
  });
}

export default ParticularProduct;
