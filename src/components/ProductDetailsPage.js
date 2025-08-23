import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetailsPage.css';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    // Mock product data - in real app, this would come from API
    const [product, setProduct] = useState({
        id: id,
        name: "Eco-Friendly Bamboo Water Bottle",
        price: 29.99,
        originalPrice: 39.99,
        discount: 25,
        images: [
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500",
            "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=500",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"
        ],
        description: "Our premium bamboo water bottle is crafted from sustainable bamboo and features a sleek, modern design. Perfect for daily use, this eco-friendly alternative to plastic bottles helps reduce environmental impact while keeping your beverages at the perfect temperature.",
        specifications: {
            material: "Bamboo, Stainless Steel",
            capacity: "500ml",
            dimensions: "8.5\" x 2.8\"",
            weight: "280g",
            insulation: "24 hours cold, 12 hours hot",
            features: ["BPA Free", "Leak Proof", "Dishwasher Safe", "Sustainably Sourced"]
        },
        sustainability: {
            carbonFootprint: "85% less than plastic bottles",
            materials: "100% sustainable bamboo",
            packaging: "100% recyclable",
            manufacturing: "Carbon neutral process"
        },
        availability: "In Stock",
        stockCount: 15,
        rating: 4.8,
        reviewCount: 127,
        category: "Water Bottles",
        tags: ["Bamboo", "Eco-Friendly", "Reusable", "Sustainable"]
    });

    const relatedProducts = [
        {
            id: 1,
            name: "Bamboo Coffee Cup",
            price: 19.99,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300"
        },
        {
            id: 2,
            name: "Reusable Shopping Bag",
            price: 12.99,
            image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=300"
        },
        {
            id: 3,
            name: "Organic Cotton Tote",
            price: 24.99,
            image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=300"
        },
        {
            id: 4,
            name: "Bamboo Cutlery Set",
            price: 15.99,
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300"
        }
    ];

    const handleAddToCart = () => {
        // TODO: Implement add to cart functionality
        alert(`Added ${quantity} ${product.name} to cart!`);
    };

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= product.stockCount) {
            setQuantity(newQuantity);
        }
    };

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
        <div className="product-details-page">
            {/* Breadcrumb Navigation */}
            <nav className="breadcrumb">
                <Link to="/">Home</Link>
                <span> / </span>
                <Link to="/shop">Shop</Link>
                <span> / </span>
                <Link to={`/shop/category/${product.category}`}>{product.category}</Link>
                <span> / </span>
                <span className="current">{product.name}</span>
            </nav>

            <div className="product-details-container">
                {/* Product Images Section */}
                <div className="product-images">
                    <div className="main-image">
                        <img 
                            src={product.images[selectedImage]} 
                            alt={product.name}
                            className="main-product-image"
                        />
                        {product.discount > 0 && (
                            <div className="discount-badge">
                                -{product.discount}%
                            </div>
                        )}
                    </div>
                    <div className="image-thumbnails">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${product.name} ${index + 1}`}
                                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                onClick={() => setSelectedImage(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Information Section */}
                <div className="product-info">
                    <h1 className="product-title">{product.name}</h1>
                    
                    {/* Rating */}
                    <div className="product-rating">
                        <div className="stars">
                            {renderStars(product.rating)}
                        </div>
                        <span className="rating-text">
                            {product.rating} ({product.reviewCount} reviews)
                        </span>
                    </div>

                    {/* Price */}
                    <div className="product-price">
                        <span className="current-price">${product.price}</span>
                        {product.originalPrice > product.price && (
                            <span className="original-price">${product.originalPrice}</span>
                        )}
                    </div>

                    {/* Availability */}
                    <div className="availability">
                        <span className={`status ${product.availability === 'In Stock' ? 'in-stock' : 'out-of-stock'}`}>
                            {product.availability}
                        </span>
                        {product.stockCount > 0 && (
                            <span className="stock-count">({product.stockCount} available)</span>
                        )}
                    </div>

                    {/* Quantity Selector */}
                    <div className="quantity-selector">
                        <label>Quantity:</label>
                        <div className="quantity-controls">
                            <button 
                                onClick={() => handleQuantityChange(-1)}
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <span className="quantity">{quantity}</span>
                            <button 
                                onClick={() => handleQuantityChange(1)}
                                disabled={quantity >= product.stockCount}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button 
                        className="add-to-cart-btn"
                        onClick={handleAddToCart}
                        disabled={product.availability !== 'In Stock'}
                    >
                        <i className="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>

                    {/* Product Tags */}
                    <div className="product-tags">
                        {product.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Details Tabs */}
            <div className="product-tabs">
                <div className="tab-buttons">
                    <button 
                        className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                        onClick={() => setActiveTab('description')}
                    >
                        Description
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'specifications' ? 'active' : ''}`}
                        onClick={() => setActiveTab('specifications')}
                    >
                        Specifications
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'sustainability' ? 'active' : ''}`}
                        onClick={() => setActiveTab('sustainability')}
                    >
                        Sustainability
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
                        onClick={() => setActiveTab('reviews')}
                    >
                        Reviews
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'description' && (
                        <div className="description-content">
                            <p>{product.description}</p>
                        </div>
                    )}

                    {activeTab === 'specifications' && (
                        <div className="specifications-content">
                            <div className="spec-grid">
                                <div className="spec-item">
                                    <strong>Material:</strong> {product.specifications.material}
                                </div>
                                <div className="spec-item">
                                    <strong>Capacity:</strong> {product.specifications.capacity}
                                </div>
                                <div className="spec-item">
                                    <strong>Dimensions:</strong> {product.specifications.dimensions}
                                </div>
                                <div className="spec-item">
                                    <strong>Weight:</strong> {product.specifications.weight}
                                </div>
                                <div className="spec-item">
                                    <strong>Insulation:</strong> {product.specifications.insulation}
                                </div>
                            </div>
                            <div className="features-list">
                                <h4>Features:</h4>
                                <ul>
                                    {product.specifications.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === 'sustainability' && (
                        <div className="sustainability-content">
                            <div className="sustainability-grid">
                                <div className="sustainability-item">
                                    <i className="fas fa-leaf"></i>
                                    <h4>Carbon Footprint</h4>
                                    <p>{product.sustainability.carbonFootprint}</p>
                                </div>
                                <div className="sustainability-item">
                                    <i className="fas fa-recycle"></i>
                                    <h4>Materials</h4>
                                    <p>{product.sustainability.materials}</p>
                                </div>
                                <div className="sustainability-item">
                                    <i className="fas fa-box"></i>
                                    <h4>Packaging</h4>
                                    <p>{product.sustainability.packaging}</p>
                                </div>
                                <div className="sustainability-item">
                                    <i className="fas fa-industry"></i>
                                    <h4>Manufacturing</h4>
                                    <p>{product.sustainability.manufacturing}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="reviews-content">
                            <div className="reviews-summary">
                                <div className="overall-rating">
                                    <h3>{product.rating}</h3>
                                    <div className="stars">{renderStars(product.rating)}</div>
                                    <p>Based on {product.reviewCount} reviews</p>
                                </div>
                            </div>
                            <div className="review-placeholder">
                                <p>Reviews will be displayed here. This feature is coming soon!</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Related Products Section */}
            <div className="related-products">
                <h2>Related Products</h2>
                <div className="related-products-grid">
                    {relatedProducts.map((relatedProduct) => (
                        <div key={relatedProduct.id} className="related-product-card">
                            <img src={relatedProduct.image} alt={relatedProduct.name} />
                            <h3>{relatedProduct.name}</h3>
                            <p className="price">${relatedProduct.price}</p>
                            <Link to={`/shop/product/${relatedProduct.id}`} className="view-product-btn">
                                View Product
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
