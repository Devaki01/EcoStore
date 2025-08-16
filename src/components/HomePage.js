import React, { useState } from "react";
import "./HomePage.css";

import about from "../assets/about.jpg";
import products_image_1 from "../assets/products_image_1.jpg";
import products_image_2 from "../assets/products_image_2.jpg";
import products_image_3 from "../assets/products_image_3.jpg";
import products_image_4 from "../assets/products_image_4.jpg";
import leather_bag from "../assets/leather_bag.png";
import profile from "../assets/bussiness-man.png";
import logo from "../assets/eco_logo.png";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const navLinks = ["ABOUT", "CARBONO", "SHOP", "VALUES", "SUPPORT"];

const productImages = [
  { id: 1, src: products_image_1, alt: "Yellow shoes" },
  { id: 2, src: products_image_2, alt: "Sack bags" },
  { id: 3, src: products_image_3, alt: "Radishes in a net bag" },
  { id: 4, src: products_image_4, alt: "Folded clothes and glasses" },
];

const testimonials = [
  {
    id: 1,
    src: profile,
    name: "Aparna Desai",
    designation: "Software Developer",
    main: "“Switching to this store has been a game-changer for my household.”",
    complete:
      "I’ve always wanted to reduce plastic waste but didn’t know where to start. This site made it so easy. The bamboo toothbrushes, reusable bags, and compostable packaging are amazing! Plus, everything arrived plastic-free. You can tell they really care about the planet.",
  },
  {
    id: 2,
    src: profile,
    name: "Jerome Renner",
    designation: "Wildlife Photographer",
    main: "“Finally, a brand that walks the talk on sustainability. Loved it !!”",
    complete:
      "I was skeptical at first, but the quality of the eco-friendly cleaning products blew me away. They’re affordable, effective, and totally guilt-free. It feels good knowing I’m supporting a company that’s genuinely making a difference.",
  },
];

const footerLinks = [
  {
    title: "Customer Services",
    links: [
      "My orders",
      "Shipping and Returns",
      "Terms and Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Products",
    links: ["Men", "Women", "Clothing", "Accessories"],
  },
  {
    title: "Company Info",
    links: ["About us", "Our Values", "How it works?", "Refer and Earn"],
  },
  {
    title: "Follow Us",
    links: ["Twitter", "Instagram", "LinkedIn"],
  },
];

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    setHamburgerActive(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navLinks.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Navbar */}
      <div className="home-page-container">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="logo" className="logo" />
          </div>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>

          <div className="drawer-btn">
            <div
              className={`hamburger ${hamburgerActive ? "active" : ""}`}
              onClick={toggleDrawer(!open)}
              role="button"
              tabIndex={0}
              aria-label="Toggle menu"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleDrawer(!open)();
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>

          <img src={profile} alt="user" className="profile-icon" />
        </nav>

        {/* Hero */}
        <div className="hero-section">
          <p className="hero-headline">
            ACCESS TO HIGH QUALITY <br />
            <span className="eco-friendly">ECO-FRIENDLY</span> <br />
            PRODUCTS AND SERVICES
          </p>
          <button className="get-started-button">GET STARTED</button>
        </div>
      </div>

      {/* About */}
      <div className="about-page">
        <div className="about-page-container">
          <div className="Title">About Us</div>
          <p className="about-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
        <img src={about} alt="about" className="about-image" />
      </div>

      {/* Products */}
      <div className="product-page-container">
        <div className="top-actions">
          <button className="see-more-button">See more products</button>
        </div>
        <div className="main-content-header">
          <p className="main-headline">
            Top Selling Product of the <br /> Year Collection
          </p>
          <div className="description-and-cta">
            <p className="description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <button className="shop-now-button">Shop Now</button>
          </div>
        </div>
        <div className="product-grid">
          {productImages.map(({ id, src, alt }) => (
            <div key={id} className="product-card">
              <img src={src} alt={alt} className="product-image" />
            </div>
          ))}
        </div>
      </div>

      {/* Special Collection */}
      <div className="special-collection">
        <div className="special-collection-item">
          <div>
            <p className="special_collection_title">
              Best Leather Bag Collection for You
            </p>
            <p className="special_collection_subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="shop-now-button-special-connection">
              Shop Now
            </button>
          </div>
          <img src={leather_bag} alt="leather_bag" className="leather_bag" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <div className="testimonials-title">
          <p>Our Happy Clients</p>
        </div>
        <div className="testimonials-container">
          {testimonials.map(
            ({ id, src, name, designation, main, complete }) => (
              <div key={id} className="testimonials-item">
                <div className="testimonials-item-title">
                  <img src={src} alt={name} className="profile" />
                  <div className="testimonials-item-person">
                    <p className="testimonials-name">{name}</p>
                  </div>
                </div>
                <p className="testimonials-designation">{designation}</p>
                <div className="testimonials-item-content">
                  <p className="testimonials-main">{main}</p>
                  <p className="testimonials-complete">{complete}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-container">
          <div className="footer-col1">
            <p className="footer-title">
              <img src={logo} alt="logo" className="logo" />
            </p>
            <p className="footer-subtitle">Eco Essentials for Everyday Life</p>
            <p className="address">
              📍 Green Roots Pvt. Ltd. 21 Eco Avenue, Indiranagar Bangalore,
              Karnataka – 560038 India
            </p>
            <p>✉️ Email: hello@greenroots.in</p>
          </div>
          {footerLinks.map(({ title, links }) => (
            <div className="footer-col" key={title}>
              <ul>
                <h2>{title}</h2>
                {links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
