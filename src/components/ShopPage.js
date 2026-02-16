import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProductCard from './ProductCard';
import SkeletonLoader from './SkeletonLoader';
import { mockProducts } from '../data/mockProducts';
import shopHeaderImage from '../assets/products_image_1.jpg';
import '../styles/ShopPage.css';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [error, setError] = useState(null);
  const productsPerPage = 8;

  // Fetch products from API (mock data for now)
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        // In the future, replace this with actual API call
        // const response = await fetch('/api/products');
        // const data = await response.json();
        
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Using mock data for now
        const data = mockProducts;
        
        setProducts(data);
        setFeaturedProducts(data.filter(product => product.featured));
        setFilteredProducts(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (category) {
      result = result.filter(product => product.category === category);
    }
    
    // Apply sorting
    switch(sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default: // featured or any other
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    
    setFilteredProducts(result);
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [products, category, sortBy]);

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbar />
      <div className="shop-header" style={{ backgroundImage: `url(${shopHeaderImage})` }}>
        <div className="shop-header-overlay">
          <h1>Eco-Friendly Products</h1>
          <p>Sustainable choices for a better tomorrow</p>
        </div>
      </div>
      <div className="shop-container">
        {/* Filter and Sort Controls */}
        <div className="shop-controls">
          <div className="shop-filter">
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)} 
              className="control-select"
            >
              <option value="">All Categories</option>
              <option value="Personal Care">Personal Care</option>
              <option value="Kitchen & Grocery">Kitchen & Grocery</option>
              <option value="Electronics">Electronics</option>
              <option value="Home">Home</option>
              <option value="Fashion">Fashion</option>
              <option value="Garden">Garden</option>
              <option value="Stationery">Stationery</option>
              <option value="Fitness">Fitness</option>
            </select>
          </div>
          <div className="shop-sort">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)} 
              className="control-select"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
        
        {/* Error state */}
        {error && (
          <div className="error-message">
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        )}
        
        {/* Featured Products Section */}
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="featured-products-grid">
            {isLoading ? (
              Array(3).fill().map((_, index) => (
                <SkeletonLoader key={index} type="product" />
              ))
            ) : (
              featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} featured={true} />
              ))
            )}
          </div>
        </section>

        {/* Main Products Grid */}
        <section className="products-section">
          <h2>All Products</h2>
          <div className="products-grid">
            {isLoading ? (
              Array(productsPerPage).fill().map((_, index) => (
                <SkeletonLoader key={index} type="product" />
              ))
            ) : (
              currentProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </section>

        {/* Pagination */}
        <div className="pagination">
          {Array(Math.ceil(filteredProducts.length / productsPerPage)).fill().map((_, index) => (
            <button 
              key={index} 
              className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopPage;
