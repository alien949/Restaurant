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
function App() {
  const [currency, setCurrency] = useState("$");
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartNumber, setCartNumber] = useState(0);

  function increaseCartNumber(productName) {
    Data.map((item) => {
      if (item.status === "Remove" && item.name === productName) {
        setCartNumber(cartNumber + 1);
        console.log("gaeshva");
      }
    });
  }

  function decreaseCartNumber(productName) {
    Data.map((item) => {
      if (item.status === "Add to cart" && item.name === productName) {
        setCartNumber(cartNumber - 1);
        console.log("gaeshva");
      }
    });
  }

  useEffect(() => {
    return localStorage.clear();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ Data: Data }}>
        <Routes basename="/tothepoint_login">
          <Route
            path="/"
            element={
              <Header
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
            <Route path="*" element={<Home />} />
            <Route
              path="menu/:id"
              element={<ParticularProduct currency={currency} />}
            />
          </Route>
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
