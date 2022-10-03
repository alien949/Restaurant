import React, { useEffect, useState } from "react";
import "./Home.css";
import horizontalLine from "../Images/horizontal-line-white.png";
import resturantPhotoOne from "../Images/resturant-photo-1.jpg";
import resturantPhotoTwo from "../Images/resturant-photo-2.jpg";
import resturantPhotoThree from "../Images/resturant-photo-3.jpg";
import resturantPhotoFour from "../Images/resturant-photo-4.jpg";
import resturantPhotoFive from "../Images/resturant-photo-5.jpg";
import resturantPhotoSix from "../Images/resturant-photo-6.jpg";
import rightArrow from "../Images/right-arrow.png";
import leftArrow from "../Images/left-arrow.png";
let imageIndex = 0;
let clickCheker = "right";
function Home() {
  const [image, setImage] = useState([
    resturantPhotoOne,
    resturantPhotoTwo,
    resturantPhotoThree,
    resturantPhotoFour,
    resturantPhotoFive,
    resturantPhotoSix,
  ]);
  const [animation, setAnimation] = useState(false);
  const [currentImage, setCurrentImage] = useState(image[imageIndex]);

  function sliderRightClick() {
    clickCheker = "right";
    if (imageIndex < image.length - 1) {
      imageIndex++;
      setCurrentImage(image[imageIndex]);
    } else {
      imageIndex = 0;
      setCurrentImage(image[imageIndex]);
    }
    if (animation == false) {
      setAnimation(true);
    }
  }

  function sliderLeftClick() {
    clickCheker = "left";
    if (imageIndex == 0) {
      imageIndex = 5;
      setCurrentImage(image[imageIndex]);
    } else {
      imageIndex--;
      setCurrentImage(image[imageIndex]);
    }
    if (animation == false) {
      setAnimation(true);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (animation == true) {
        setAnimation(false);
      }
    }, 1500);
  }, [currentImage]);

  console.log(clickCheker);

  return (
    <div className="home-outer-div">
      <div className="div-around-imgs">
        <img className="home-horizontal-line" src={horizontalLine} />
        <img className="home-horizontal-line" src={horizontalLine} />
        <p className="home-p-welcome">Welcome to our restaurant</p>
        <img className="home-horizontal-line" src={horizontalLine} />
        <img className="home-horizontal-line" src={horizontalLine} />
      </div>

      <div className="home-slider-div">
        <img
          className="slider-arrows"
          src={leftArrow}
          onClick={sliderLeftClick}
        />
        <img
          className={`resturant-photos ${ animation && clickCheker === "left"
          && "slider-animation-left-click"
          } ${
            animation &&
            clickCheker === "right" &&
            "slider-animation-right-click"
          } `}
          src={currentImage}
        />
        <img
          className="slider-arrows"
          src={rightArrow}
          onClick={sliderRightClick}
        />
      </div>

      <p className="p-above-footer">You can order anything from our restaurant, delicious food with low price!!!</p>
    </div>
  );
}

export default Home;
