"use client";

import React, { useState } from 'react';

const ProductPage2 = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const sizes = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];
  const product = {
    name: 'Kaareen',
    category: "Men's Running Shoes",
    price: 120,
    rating: 4.5,
    reviews: 120,
    ratingBreakdown: [
      { stars: 5, percentage: 50 },
      { stars: 4, percentage: 30 },
      { stars: 3, percentage: 10 },
      { stars: 2, percentage: 5 },
      { stars: 1, percentage: 5 },
    ],
    description: 'The Kaareen is a lightweight, comfortable shoe designed for men. It features soft inner foam that keeps your feet cushioned and comfortable throughout the day. The breathable upper allows air to flow, helping your feet stay cool and dry. Its durable, non-slip sole provides reliable traction on various surfaces. Stylish in black and gray, the Kaareen pairs well with almost any outfit. Whether youre running, walking, or relaxing with friends, these shoes offer excellent support and freedom of movement.',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 text-right mb-8">
          <span>Shoes</span> / <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Product Images */}
          <div className="bg-white rounded-lg p-8 lg:col-span-2">
            <div className="grid grid-cols-1 gap-4">
              {/* Main Image */}
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&crop=center"
                  alt={`${product.name} - Main View`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Secondary Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=300&fit=crop&crop=center"
                    alt={`${product.name} - Side View`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&h=300&fit=crop&crop=center"
                    alt={`${product.name} - Detail View`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <div className="text-right">
              <span className="text-sm text-gray-500">{product.category}</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="text-2xl font-bold text-gray-900">${product.price}</div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">{product.rating}</span>
                <div className="flex ml-2">
                  {[1, 2, 3, 4].map((star) => (
                    <span key={star} className="text-xl text-yellow-500">★</span>
                  ))}
                  <span className="text-xl text-gray-300">★</span>
                </div>
              </div>
              <span className="text-gray-500">{product.reviews} reviews</span>
            </div>

            {/* Rating Breakdown */}
            <div className="flex flex-col gap-2">
              {product.ratingBreakdown.map((rating) => (
                <div key={rating.stars} className="flex items-center gap-3">
                  <span className="text-sm w-4">{rating.stars}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 bg-gray-900 rounded-full"
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 w-8">{rating.percentage}%</span>
                </div>
              ))}
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Size</h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border-2 rounded-lg text-center transition-all cursor-pointer ${
                      selectedSize === size
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 text-gray-900 hover:border-gray-900'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>

            {/* Product Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Description</h3>
              <p className="text-base text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD for Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.description,
            offers: {
              '@type': 'Offer',
              price: product.price,
              priceCurrency: 'USD',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: product.rating,
              reviewCount: product.reviews,
            },
          }),
        }}
      />
    </div>
  );
};

export default ProductPage2;