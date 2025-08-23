import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './ShopPage.css';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'water-bottles', name: 'Water Bottles' },
    { id: 'bags', name: 'Bags & Totes' },
    { id: 'kitchen', name: 'Kitchen & Dining' },
    { id: 'personal-care', name: 'Personal Care' }
  ];

  const products = [
    {
      id: 1,
      name: "Eco-Friendly Bamboo Water Bottle",
      price: 29.99,
      originalPrice: 39.99,
      discount: 25,
      category: "water-bottles",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
      rating: 4.8,
      reviewCount: 127,
      tags: ["Bamboo", "Eco-Friendly", "Reusable"]
    },
    {
      id: 2,
      name: "Reusable Shopping Bag",
      price: 12.99,
      originalPrice: 15.99,
      discount: 19,
      category: "bags",
      image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=400",
      rating: 4.6,
      reviewCount: 89,
      tags: ["Cotton", "Reusable", "Sustainable"]
    },
    {
      id: 3,
      name: "Bamboo Coffee Cup",
      price: 19.99,
      originalPrice: 24.99,
      discount: 20,
      category: "kitchen",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      rating: 4.7,
      reviewCount: 156,
      tags: ["Bamboo", "Hot Drinks", "Eco-Friendly"]
    },
    {
      id: 4,
      name: "Organic Cotton Tote",
      price: 24.99,
      originalPrice: 29.99,
      discount: 17,
      category: "bags",
      image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=400",
      rating: 4.9,
      reviewCount: 203,
      tags: ["Organic", "Cotton", "Stylish"]
    },
    {
      id: 5,
      name: "Bamboo Cutlery Set",
      price: 15.99,
      originalPrice: 19.99,
      discount: 20,
      category: "kitchen",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      rating: 4.5,
      reviewCount: 78,
      tags: ["Bamboo", "Travel", "Reusable"]
    },
    {
      id: 6,
      name: "Natural Soap Bar",
      price: 8.99,
      originalPrice: 11.99,
      discount: 25,
      category: "personal-care",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
      rating: 4.4,
      reviewCount: 92,
      tags: ["Natural", "Organic", "Handmade"]
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <>
      <Navbar />
      <div className="shop-page">
        <div className="shop-header">
          <h1>Eco-Friendly Products</h1>
          <p>Discover sustainable alternatives for everyday life</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                {product.discount > 0 && (
                  <div className="discount-badge">
                    -{product.discount}%
                  </div>
                )}
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                
                <div className="product-rating">
                  <div className="stars">
                    {renderStars(product.rating)}
                  </div>
                  <span className="rating-text">({product.reviewCount})</span>
                </div>

                <div className="product-price">
                  <span className="current-price">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="original-price">${product.originalPrice}</span>
                  )}
                </div>

                <div className="product-tags">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>

                <Link 
                  to={`/shop/product/${product.id}`} 
                  className="view-product-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ShopPage;
