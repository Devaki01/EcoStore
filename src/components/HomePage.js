import React from 'react';
import './HomePage.css';
import about from '../assets/about.jpg';
// import faq_image from '../assets/faq_image.jpg';
import products_image_1 from '../assets/products_image_1.jpg';
import products_image_2 from '../assets/products_image_2.jpg';
import products_image_3 from '../assets/products_image_3.jpg';
import products_image_4 from '../assets/products_image_4.jpg';
import leather_bag from '../assets/leather_bag.png';
import profile from '../assets/bussiness-man.png';
import logo from '../assets/eco_logo.png';
import Navbar from './Navbar';

const HomePage = () => {

    const productImages = [
        { id: 1, src: products_image_1, alt: 'Yellow shoes' },
        { id: 2, src: products_image_2, alt: 'Sack bags' },
        { id: 3, src: products_image_3, alt: 'Radishes in a net bag' },
        { id: 4, src: products_image_4, alt: 'Folded clothes and glasses' },
    ];

    const testimonials = [
        {id: 1, src: profile, name: 'Aparna Desai', designation: 'software developer', main: '“Switching to this store has been a game-changer for my household.”', complete: 'I’ve always wanted to reduce plastic waste but didn’t know where to start. This site made it so easy. The bamboo toothbrushes, reusable bags, and compostable packaging are amazing! Plus, everything arrived plastic-free. You can tell they really care about the planet.' },
        {id: 2, src: profile, name: 'Jerome Renner', designation: 'wildlife photographer', main: '“Finally, a brand that walks the talk on sustainability.\n' +
                'Loved it !! ”', complete: 'I was skeptical at first, but the quality of the eco-friendly cleaning products blew me away. They’re affordable, effective, and totally guilt-free. It feels good knowing I’m supporting a company that’s genuinely making a difference.' }

    ]

    return (
        <>
        <Navbar />
            <div className="home-page-container">


                <div className="hero-section">
                    <p className="hero-headline">
                        ACCESS TO HIGH QUALITY  <br />
                        <span className="eco-friendly">ECO-FRIENDLY </span> <br />
                        PRODUCTS AND SERVICES
                    </p>
                    <button className="get-started-button">GET STARTED</button>
                </div>

            </div>

            <div className="about-page">
                <div className="about-page-container">
                    <div className="Title"> About Us </div>
                    <p className="about-content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    {/*<div className="figures">*/}
                    {/*    <div className="figures-item">*/}
                    {/*        <p> 1000+ </p>*/}
                    {/*        <p> </p>*/}
                    {/*    </div>*/}
                    {/*    <div className="figures-item"></div>*/}
                    {/*    <div className="figures-item"></div>*/}
                    {/*</div>*/}
                </div>
                <div> <img src={about} alt="image" className="about-image"/> </div>
            </div>

            <div className="product-page-container">
                <div className="top-actions">
                    <button className="see-more-button">See more products</button>
                </div>
                <div className="main-content-header">
                    <p className="main-headline">
                        Top Selling Product of the <br />
                        year Collection
                    </p>
                    <div className="description-and-cta">
                        <p className="description-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
                        </p>
                        <button className="shop-now-button">Shop Now</button>
                    </div>
                </div>
                <div className="product-grid">
                    {productImages.map(product => (
                        <div key={product.id} className="product-card">
                            <img src={product.src} alt={product.alt} className="product-image" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="faq-section">
                {/*<div className="image"> <img src={faq_image} alt="faq_image" /> </div>*/}
                <div className="faq"> </div>
            </div>

            <div className="special-collection">
                <div className="special-collection-item">
                    <div>
                        <p className="special_collection_title"> Best Leather bag collection for you </p>
                        <p className="special_collection_subtitle"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                        <button className="shop-now-button-special-connection"> Shop Now </button>
                    </div>
                    <div>
                        <img src={leather_bag} alt="leather_bag" className="leather_bag" />
                    </div>
                </div>
            </div>

            <div className="testimonials">
                <div className="testimonials-title">
                    <p>Our happy clients</p>
                </div>
                <div className="testimonials-container">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonials-item">
                            <div className="testimonials-item-title">
                                <img src={testimonial.src} alt={testimonial.alt} className="profile" />
                                <div className="testimonials-item-person">
                                    <p className="testimonials-name">{testimonial.name}</p>
                                </div>
                            </div>
                            <p className="testimonials-designation">{testimonial.designation}</p>
                            <div className="testimonials-item-content">
                                <p className="testimonials-main">{testimonial.main}</p>
                                <p className="testimonials-complete">{testimonial.complete}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer">
                <div className="footer-container">
                    <div className="footer-col1">
                        <p className="footer-title"> <img src={logo} alt="logo" className="logo" /> </p>
                        <p className="footer-subtitle"> Eco Essentials for Everyday Life </p>
                        <p className="address"> 📍 Green Roots Pvt. Ltd.21 Eco Avenue, Indiranagar Bangalore, Karnataka – 560038 India </p>
                        <p> ✉️ Email: <br /> hello@greenroots.in </p>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <h2> Customer Services </h2>
                            <li> My orders </li>
                            <li> Shopping and Returns </li>
                            <li> Terms and Conditions </li>
                            <li> Privacy Policy </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <h2> Products </h2>
                            <li> Men </li>
                            <li> Women </li>
                            <li> Clothing </li>
                            <li> Accessories </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <h2> Company Info </h2>
                            <li> About us </li>
                            <li> Our Values </li>
                            <li> How it works? </li>
                            <li> Refer and Earn </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul>
                            <h2> Follow Us </h2>
                            <li> Twitter </li>
                            <li> Instagram </li>
                            <li> LinkedIn </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>

    );


};

export default HomePage;