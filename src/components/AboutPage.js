import React from "react";
import CountUpOnView from "./CountUpOnView";
import "./AboutPage.css";

const AboutUs = () => {
  return (
    <div className="about-page-container">
      <p className="title"> About Us </p>
      <p className="sub-title">
        {" "}
        From a Simple Idea to a Sustainable Reality.{" "}
      </p>

      <div className="section1">
        <p className="main-about">Small choices can create big change... </p>

        <div className="figures">
          <div className="item1">
            <div className="num">
              <CountUpOnView end={1500} suffix="+" />
            </div>
            <div className="caption"> Trees Planted </div>
          </div>
          <div className="item2">
            <div className="num">
              <CountUpOnView end={99} suffix="%" />
            </div>
            <div className="caption"> Plastic Free Packaging</div>
          </div>
          <div className="item3">
            <div className="num">
              <CountUpOnView end={5000} suffix="+" />
            </div>
            <div className="caption">Eco-friendly Customers</div>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="heading">
          {" "}
          The Spark: <br /> Our Journey{" "}
        </div>
        <div className="content">
          <p>Like many of you, we were growing increasingly concerned... </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
