import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import Product from "./Product";
import "./Menu.css";
function Menu(props) {
  const context = useContext(Context);
  const [refresh, setRefresh] = useState(false);
  const [filter, setFilter] = useState("All");

  function filterProduct(e) {
    setFilter(e.target.value);
    console.log(filter);
  }
  return (
    <div className="products-outer-div">
      <select className="menu-select" onClick={filterProduct}>
        <option>All</option>
        <option>Main Dish</option>
        <option>Side Dish</option>
        <option>Drinks</option>
        <option>Dessert</option>
      </select>
      {context.Data.map((product) => {
        if (filter === "All") {
          return (
            <Product
              refresh={refresh}
              setRefresh={setRefresh}
              key={product.id}
              category={product.category}
              name={product.name}
              price={product.price}
              status={product.status}
              description={product.description}
              image={product.image}
              totalPrice={props.totalPrice}
              setTotalPrice={props.setTotalPrice}
              currency={props.currency}
              increaseCartNumber={props.increaseCartNumber}
              decreaseCartNumber={props.decreaseCartNumber}
            />
          );
        } else if (filter === product.category) {
          return (
            <Product
              refresh={refresh}
              setRefresh={setRefresh}
              key={product.id}
              category={product.category}
              name={product.name}
              price={product.price}
              status={product.status}
              description={product.description}
              image={product.image}
              totalPrice={props.totalPrice}
              setTotalPrice={props.setTotalPrice}
              currency={props.currency}
              increaseCartNumber={props.increaseCartNumber}
              decreaseCartNumber={props.decreaseCartNumber}
            />
          );
        }
      })}
    </div>
  );
}

export default Menu;
