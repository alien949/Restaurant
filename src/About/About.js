import React from "react";
import "../About/About.css";
import downArrow from "../Images/down-arrow.png";
function About() {
  function dropDown(event) {
    const history = document.querySelector(".about-us-history-p");
    const cuisine = document.querySelector(".about-us-cuisine-p");
    const staff = document.querySelector(".about-us-staff-p");
    if (
      event.target.className === "down-arrow1" &&
      history.offsetHeight === 0
    ) {
      history.style.height = "200px";
    } else if (event.target.className === "down-arrow1") {
      history.style.height = "0";
    }

    if (
      event.target.className === "down-arrow2" &&
      cuisine.offsetHeight === 0
    ) {
      cuisine.style.height = "200px";
    } else if (event.target.className === "down-arrow2") {
      cuisine.style.height = "0";
    }

    if (
      event.target.className === "down-arrow3" &&
      staff.offsetHeight === 0
    ) {
      staff.style.height = "200px";
    } else if (event.target.className === "down-arrow3") {
      staff.style.height = "0";
    }
  }
  return (
    <div className="about-outer-div">
      <p className="about-us-p">About Us</p>
      <div className="history-div">
        <p className="history">History</p>
        <img className="down-arrow1" src={downArrow} onClick={dropDown} />
      </div>
      <p className="about-us-history-p">
        The building was built as a saloon in the 1900s by a Scottish stonesman
        for Pierre Guillaume. In the 1920s, the building was owned by John Lande
        who used it as a French steam laundry, which is the origin of the
        restaurant's name. In 1978, Sally Schmitt and her husband Don purchased
        the building and renovated it into a restaurant. They kept the name, the
        French Laundry, because locals still referred to the building as such.
        The French Laundry was one of the first restaurants to offer what would
        become known as California cuisine. The Schmitts ran the restaurant
        nonstop for seventeen years, before selling it to Thomas Keller in 1994.
        In 1999, Keller published The French Laundry Cookbook, which he
        considers his definitive book on cuisine. That year it won three
        International Association of Culinary Professionals (IACP) awards for
        Cookbook of the Year, Julia Child "First Cookbook" Award, and Design
        Award. In 2004, the restaurant installed a geothermal heating and air
        conditioning system. In July 2014, the Napa Valley restaurant celebrated
        its 20th anniversary with a six-hour feast for friends, locals, and
        luminaries and temporarily closed for renovations before the end of the
        year. In December 2014, while being temporarily closed for renovations,
        The French Laundry wine cellar was robbed of an estimated $500,000 of
        wine. Most of the wine was subsequently recovered. On April 7, 2015, the
        restaurant reopened following demolition of a number of buildings on the
        site. During the remainder of the renovation project, the staff worked
        out of a temporary kitchen. During the COVID-19 pandemic, The French
        Laundry closed and re-opened several times, and faced restrictions such
        as limited seating. In November 2020, Governor Gavin Newsom attended a
        private party at the restaurant, and was photographed not socially
        distancing, nor wearing a protective mask, despite guidelines issued by
        his administration ahead of an expected holiday COVID-19 surge. Newsom
        received widespread criticism as a result, and the incident attracted
        support for the recall effort against him, which nonetheless failed by a
        wide margin.
      </p>

      <div className="cuisine-div">
        <p className="cuisine">Cuisine</p>
        <img className="down-arrow2" src={downArrow} onClick={dropDown} />
      </div>
      <p className="about-us-cuisine-p">
        Every day, The French Laundry serves two different nine-course tasting
        menus, one the Chef's Tasting Menu and the other the Tasting of
        Vegetables, which is vegetarian.[17] During the winter holiday season,
        Thanksgiving, Halloween, and other holidays, the restaurant may offer
        special dishes. Both menus are US$355 per person, including gratuity for
        the base meal, although not including additional supplements such as
        caviar and truffles.[18][19] The food is mainly French with contemporary
        American influences, for example specialties such as smoked salmon
        cornets,[20][21] which were inspired by a trip to Baskin-Robbins.
      </p>

      <div className="staff-div">
        <p className="staff">Staff</p>
        <img className="down-arrow3" src={downArrow} onClick={dropDown}/>
      </div>
      <p className="about-us-staff-p">
        Every day, The French Laundry serves two different nine-course tasting
        menus, one the Chef's Tasting Menu and the other the Tasting of
        Vegetables, which is vegetarian.[17] During the winter holiday season,
        Thanksgiving, Halloween, and other holidays, the restaurant may offer
        special dishes. Both menus are US$355 per person, including gratuity for
        the base meal, although not including additional supplements such as
        caviar and truffles.[18][19] The food is mainly French with contemporary
        American influences, for example specialties such as smoked salmon
        cornets,[20][21] which were inspired by a trip to Baskin-Robbins.
      </p>
    </div>
  );
}

export default About;
