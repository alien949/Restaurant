import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import CartProduct from "./CartProduct";
import "./Cart.css";
function Cart(props) {
  const context = useContext(Context);
  const [refresh, setRefresh] = useState(false);

  //remove all button function
  function removeAll() {
    context.Data.map((item) => {
      item.status = "Add to cart";
      setRefresh(!refresh);
      localStorage.clear();
      props.setTotalPrice(0);
      props.setCartNumber(0)
    });
  }

  return (
    <div className="cart-outer-div">
      <div className="total-price-and-remove-all-div">
        <p className="cart-total-price">
          Total Price:
          {props.currency === "$"
            ? props.totalPrice + " $"
            : props.totalPrice * 3 + " Gel"}
        </p>
        <button className="remove-all" onClick={removeAll}>
          Remove All
        </button>
      </div>
      {context.Data.map((item) => {
        if (item.status === "Remove") {
          return (
            <CartProduct
              refresh={refresh}
              setRefresh={setRefresh}
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              status={item.status}
              totalPrice={props.totalPrice}
              setTotalPrice={props.setTotalPrice}
              currency={props.currency}
              decreaseCartNumber={props.decreaseCartNumber}
            />
          );
        }
      })}
    </div>
  );
}

export default Cart;
