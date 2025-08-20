// filepath: e:\GSSOC\new_eco\EcoStore\src\components\SkeletonLoader.js
import React from 'react';
import '../styles/SkeletonLoader.css';

const SkeletonLoader = ({ type, style = {} }) => {
  if (type === 'product') {
    return (
      <div className="skeleton-product" style={style}>
        <div className="skeleton-image">
          <div className="skeleton-shine"></div>
        </div>
        <div className="skeleton-content">
          <div className="skeleton-title">
            <div className="skeleton-shine"></div>
          </div>
          <div className="skeleton-category">
            <div className="skeleton-shine"></div>
          </div>
          <div className="skeleton-rating">
            <div className="skeleton-shine"></div>
          </div>
          <div className="skeleton-price">
            <div className="skeleton-shine"></div>
          </div>
          <div className="skeleton-description">
            <div className="skeleton-shine"></div>
          </div>
          <div className="skeleton-actions">
            <div className="skeleton-button">
              <div className="skeleton-shine"></div>
            </div>
            <div className="skeleton-button">
              <div className="skeleton-shine"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (type === 'banner') {
    return (
      <div className="skeleton-banner" style={style}>
        <div className="skeleton-shine"></div>
      </div>
    );
  }
  
  return (
    <div className="skeleton-generic" style={style}>
      <div className="skeleton-shine"></div>
    </div>
  );
};

export default SkeletonLoader;