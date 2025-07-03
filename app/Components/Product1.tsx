"use client";

import React, { useState } from 'react';

const ProductPage1 = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const sizes = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];
  const product = {
    name: 'Kaareen Running Shoes',
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
    description:
      "The Kaareen Running Shoes are engineered for optimal running performance and comfort. These men's running shoes feature a breathable mesh upper, responsive running shoe cushioning, and a durable running shoe outsole. Perfect for running, jogging, and running training sessions. These running shoes are ideal for men who need reliable running shoes for both casual running and intense running workouts. Experience superior running performance with Kaareen Running Shoes.",
    keywords: "running shoes, men's running shoes, athletic shoes, jogging shoes, training shoes, sports shoes, running sneakers",
    features: [
      'Premium running shoes construction',
      'Breathable running shoe mesh upper',
      'Responsive running shoe cushioning',
      'Durable running shoe outsole',
      'Comfortable running shoes fit'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Keywords (hidden from users) */}
      <div className="sr-only">
        <h2>Running Shoes Keywords</h2>
        <p>{product.keywords}</p>
        <p>Best running shoes for men, affordable running shoes, comfortable running shoes, high-quality running shoes</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 text-right mb-8">
          <span>Running Shoes</span> / <span>Men's Running Shoes</span> / <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg p-8 lg:col-span-2">
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                src="https://via.placeholder.com/320x192.png?text=Running+Shoes"
                alt="Kaareen Running Shoes - Men's Running Shoes"
                className="w-80 h-48 rounded-lg"
              />
            </div>
            
            {/* Image Caption with Keywords */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Kaareen Running Shoes - Premium Men's Running Shoes for Training and Daily Running
            </p>
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

            {/* Key Features with Exact Keywords */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Running Shoes Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Running Shoes Size</h3>
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
                    aria-label={`Select size ${size} for running shoes`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
              aria-label="Add Kaareen Running Shoes to Cart"
            >
              Add Running Shoes to Cart
            </button>

            {/* Product Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Running Shoes Description</h3>
              <p className="text-base text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Additional SEO Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Choose These Running Shoes?</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                These men's running shoes are designed for serious runners who demand the best running shoes performance. 
                Whether you're looking for running shoes for daily training or running shoes for competitive racing, 
                the Kaareen Running Shoes deliver exceptional comfort and durability.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Our running shoes feature advanced technology that makes them the perfect choice for runners seeking 
                high-quality running shoes at an affordable price. These running shoes are built to last and perform 
                in any running condition.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced JSON-LD for Structured Data with Exact Keywords */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.description,
            category: 'Running Shoes',
            brand: {
              '@type': 'Brand',
              name: 'Kaareen'
            },
            offers: {
              '@type': 'Offer',
              price: product.price,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              seller: {
                '@type': 'Organization',
                name: 'Kaareen Sports'
              }
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: product.rating,
              reviewCount: product.reviews,
              bestRating: 5,
              worstRating: 1
            },
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: 'Product Type',
                value: 'Running Shoes'
              },
              {
                '@type': 'PropertyValue',
                name: 'Target Gender',
                value: 'Men'
              },
              {
                '@type': 'PropertyValue',
                name: 'Sport Type',
                value: 'Running'
              },
              {
                '@type': 'PropertyValue',
                name: 'Shoe Type',
                value: 'Athletic Running Shoes'
              }
            ],
            keywords: product.keywords
          }),
        }}
      />
    </div>
  );
};

export default ProductPage1;