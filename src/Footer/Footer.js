import React from "react";
import "../Footer/Footer.css";
import Google from "../Images/google-plus.png";
import Facebook from "../Images/facebook.png";
import Youtube from "../Images/youtube.png";
import Logo from "../Images/logo.png";
function Footer() {
  function logoEnter() {
    let logo = document.querySelector(".logo");
    logo.style.transform = `rotateY(360deg)`;
  }

  function logoLeave() {
    let logo = document.querySelector(".logo");
    logo.style.transform = `rotateY(0deg)`;
  }

  return (
    <div id="footer" className="footer-outer-div">
      <span className="crypto">C.E.O CRYPTO</span>
      <div className="div-around-footer-imgs">
        <a href="https://mail.google.com/" target="_blank">
          <img className="footer-website-imgs" src={Google} />
        </a>
        <a href="https://www.facebook.com/crypto.crypto.7" target="_blank">
          <img className="footer-website-imgs" src={Facebook} />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img className="footer-website-imgs" src={Youtube} />
        </a>
      </div>
      <img
        onMouseOver={logoEnter}
          
        

        onMouseLeave={logoLeave}
        className="logo"
        src={Logo}
      />
    </div>
  );
}

export default Footer;
