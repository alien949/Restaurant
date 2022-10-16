import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Data from "./Data/data.json";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { Context } from "./Context/Context";
import Cart from "./Cart/Cart";
import ParticularProduct from "./ParticularProduct/ParticularProduct";
import RegisterForm from "./Register/RegisterForm";

function App() {
  const [formVisible, setFormVisible] = useState(false);
  const [currency, setCurrency] = useState("$");
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartNumber, setCartNumber] = useState(0);
  const [isLogged, setIsLogged] = useState(false);
  //increasing number of cart
  function increaseCartNumber(productName) {
    Data.map((item) => {
      if (item.status === "Remove" && item.name === productName) {
        setCartNumber(cartNumber + 1);
      }
    });
  }
  // decreasing number of cart
  function decreaseCartNumber(productName) {
    Data.map((item) => {
      if (item.status === "Add to cart" && item.name === productName) {
        setCartNumber(cartNumber - 1);
      }
    });
  }
  // show login form or hide it
  function formVisibleHandler(e) {
    const form = document.querySelector(".register-login-form");
    const login = document.querySelector("#login");
    if (form !== null && !form.contains(e.target) && e.target.id !== "login") {
      setFormVisible(false);
    }
  }
  //eventListener on window
  window.addEventListener("click", formVisibleHandler);

  return (
    <div className="App">
      <Context.Provider
        value={{ Data: Data, isLogged: isLogged, setIsLogged: setIsLogged }}
      >
        <Routes basename="/tothepoint_login">
          <Route
            path="/restaurant"
            element={
              <Header
                setFormVisible={setFormVisible}
                formVisible={formVisible}
                currency={currency}
                setCurrency={setCurrency}
                cartNumber={cartNumber}
              />
            }
          >
            <Route path="home" element={<Home />} />
            <Route
              path="menu"
              element={
                <Menu
                  decreaseCartNumber={decreaseCartNumber}
                  setTotalPrice={setTotalPrice}
                  totalPrice={totalPrice}
                  currency={currency}
                  increaseCartNumber={increaseCartNumber}
                />
              }
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="cart"
              element={
                <Cart
                  cartNumber={cartNumber}
                  setCartNumber={setCartNumber}
                  decreaseCartNumber={decreaseCartNumber}
                  setTotalPrice={setTotalPrice}
                  totalPrice={totalPrice}
                  currency={currency}
                />
              }
            />
            <Route path="/restaurant" element={<Home />} />
            <Route
              path="menu/:id"
              element={
                <ParticularProduct
                  currency={currency}
                  cartNumber={cartNumber}
                  setCartNumber={setCartNumber}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                />
              }
            />
            <Route path="Register" element={<RegisterForm />} />
          </Route>
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
