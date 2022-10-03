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
import {Context} from "./Context/Context";
function App() {
  return (
    <div className="App">
      <Context.Provider value={{Data}}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
