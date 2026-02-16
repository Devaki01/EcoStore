// filepath: e:\GSSOC\new_eco\EcoStore\src\components\ProductCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product, featured = false, onAddToCart }) => {
  const { id, title, price, description, image, rating, category } = product;
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    if (onAddToCart) {
      onAddToCart(product);
    }
  };
  
  // Calculate discount if product is on sale
  const discountPercent = product.sale ? Math.floor(Math.random() * 30) + 10 : 0; // Random discount between 10-40%
  const originalPrice = product.sale ? (price / (1 - discountPercent / 100)).toFixed(2) : null;
  
  return (
    <div 
      className={`product-card ${featured ? 'featured' : ''} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <Link to={`/product/${id}`} className="product-link">
          <img 
            src={image} 
            alt={title} 
            className="product-image" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/300x200?text=Product+Image';
            }}
          />
        </Link>
        {featured && <span className="featured-badge">Featured</span>}
        {product.sale && <span className="sale-badge">SALE {discountPercent}% OFF</span>}
        <div className="product-quick-actions">
          <button className="quick-action-btn" title="Add to Wishlist">❤</button>
          <button className="quick-action-btn" title="Quick View">👁️</button>
        </div>
      </div>
      <div className="product-info">
        <p className="product-category">{category}</p>
        <Link to={`/product/${id}`} className="product-title-link">
          <h3 className="product-title">{title}</h3>
        </Link>
        <div className="product-rating">
          {'★'.repeat(Math.round(rating))}
          {'☆'.repeat(5 - Math.round(rating))}
          <span className="rating-number">({rating})</span>
        </div>
        <div className="product-price-container">
          {product.sale && (
            <span className="product-original-price">${originalPrice}</span>
          )}
          <p className="product-price">${price.toFixed(2)}</p>
        </div>
        <p className="product-description">{description.substring(0, 80)}...</p>
        <div className="product-actions">
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <Link to={`/product/${id}`} className="view-details-btn">
            View Details
          </Link>
        </div>
      </div>
      {product.stock <= 5 && product.stock > 0 && (
        <div className="stock-warning">Only {product.stock} left!</div>
      )}
      {product.stock === 0 && (
        <div className="out-of-stock">Out of Stock</div>
      )}
    </div>
  );
};

export default ProductCard;