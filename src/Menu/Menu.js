import React, { useContext } from "react";
import { Context } from "../Context/Context";
import Product from "./Product";
import "./Menu.css"
let x = 0;
function Menu() {
  const context = useContext(Context);
  
  return (
    <div className="products-outer-div">
      {context.Data.map((product) => {
        x=x+1;
        if(x<=10){
        return (
          <Product
            key={product.id}
            category={product.category}
            name={product.name}
            price={product.price}
            status={product.status}
            description={product.description}
            image={product.image}
          />
        );}
      })}
    </div>
  );
}

export default Menu;
