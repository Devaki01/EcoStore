import logo from "../assets/eco_logo.png";
import profile from "../assets/bussiness-man.png";
import React from "react";
import './AboutPage.css';


const AboutUs = () => {
    return (
        <div className="about-page-container">
            <p className="title"> About Us </p>
            <p className="sub-title"> From a Simple Idea to a Sustainable Reality. </p>

            <div className="section1">
                <p className="main-about">Small choices can create big change. Our journey started with a simple goal: to make sustainable living accessible, beautiful, and effortless for everyone. Every product you'll find here is thoughtfully curated, ethically sourced, and designed to be kind to our planet. Thank you for joining us in building a greener future, one conscious choice at a time.</p>

                <div className="figures">
                    <div className="item1">
                        <div className="num">1,500+</div>
                        <div className="caption"> Tress Planted </div>
                    </div>
                    <div className="item2">
                        <div className="num">99%</div>
                        <div className="caption"> Plastic Free Packaging</div>
                    </div>
                    <div className="item3">
                        <div className="num">5K+</div>
                        <div className="caption">Eco-friendly Customers</div>
                    </div>
                </div>
            </div>

            <div className="section2">
                <div className="heading"> The Spark: <br /> Our Journey </div>
                <div className="content">
                    <p> Like many of you, we were growing increasingly concerned about our planet's future. We were frustrated by the endless plastic, the confusing labels, and how difficult it was to find products that were truly good for our families and the environment. It felt like making the right choice was always the hardest one.

                        That frustration sparked an idea: What if we could create one place—a trusted destination—where every item was carefully vetted for its quality, ethics, and environmental impact? What if we could do the research, so you wouldn't have to?

                        And so, EcoStore was born. It started in a small living room in Pune with a handful of products and a big dream. We weren't just building a store; we were creating the resource we wished we had.</p>
                </div>
            </div>
        </div>
    )

}

export default AboutUs;