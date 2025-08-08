import React from "react";
import CountUpOnView from "./CountUpOnView";
import "./AboutPage.css";
import Navbar from "./Navbar";

const AboutUs = () => {
    return (
        <>
        <Navbar />
        <div className="about-page-container">
            <p className="title"> About Us </p>
            <p className="sub-title">
                {" "}
                From a Simple Idea to a Sustainable Reality.{" "}
            </p>

            <div className="section1">
                <p className="main-about"> Small choices can create big change. Our journey started with a simple goal: to make sustainable living accessible, beautiful, and effortless for everyone. Every product you'll find here is thoughtfully curated, ethically sourced, and designed to be kind to our planet. Thank you for joining us in building a greener future, one conscious choice at a time. </p>

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
                <div className="heading"> The Spark: <br /> Our Journey </div>
                <div className="content">
                    <p> Like many of you, we were growing increasingly concerned about our planet's future. We were frustrated by the endless plastic, the confusing labels, and how difficult it was to find products that were truly good for our families and the environment. It felt like making the right choice was always the hardest one.

                        That frustration sparked an idea: What if we could create one place—a trusted destination—where every item was carefully vetted for its quality, ethics, and environmental impact? What if we could do the research, so you wouldn't have to?

                        And so, EcoStore was born. It started in a small living room in Pune with a handful of products and a big dream. We weren't just building a store; we were creating the resource we wished we had.</p>
                </div>
            </div>
            <div className="section3">
                <div className="heading"> Our Mission & <br /> Vision </div>
                <div className="content">
                    <h3> Our Mission</h3>
                    <p> To make sustainable living effortless and inspiring by curating a collection of high-quality, ethically sourced, and genuinely eco-friendly products that you can trust and love.</p>

                    <h3> Our Vision </h3>
                    <p> We envision a world where conscious consumerism is the norm, not the exception. A future where every home is filled with products that are kind to the people who make them, the people who use them, and the planet we all share. </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutUs;