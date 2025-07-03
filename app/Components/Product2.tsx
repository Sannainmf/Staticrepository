"use client";

import React, { useState } from 'react';

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const sizes = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];
  const product = {
    name: 'Kaareen Pulse Runner 1',
    category: "Men's Performance Athletic Footwear",
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
      'The Kaareen Pulse Runner represents the pinnacle of athletic footwear engineering, designed for individuals who demand excellence in their fitness journey. This versatile trainer combines advanced breathable mesh construction with dynamic energy-return technology and superior grip outsole design. Whether you\'re pursuing daily cardio routines, cross-training workouts, or endurance activities, this footwear delivers an exceptional balance of comfort, durability, and performance aesthetics.',
    features: [
      'Advanced ventilation system for temperature regulation',
      'Energy-return midsole technology for responsive stride',
      'Multi-surface traction pattern for versatile terrain',
      'Ergonomic design supporting natural foot movement',
      'Premium materials ensuring long-lasting performance'
    ],
    useCases: [
      'Daily fitness routines and cardio workouts',
      'Cross-training and gym sessions',
      'Outdoor jogging and recreational activities',
      'Active lifestyle and casual wear',
      'Training for athletic events and competitions'
    ],
    benefits: [
      'Enhanced comfort during extended wear',
      'Improved performance through responsive cushioning',
      'Reduced fatigue with superior energy return',
      'Versatile styling for various activities',
      'Durable construction for long-term investment'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contextual Metadata for LLM Understanding */}
      <div className="sr-only">
        <h2>Athletic Footwear Context</h2>
        <p>Performance footwear, training sneakers, athletic shoes, fitness footwear, workout shoes, sport trainers, exercise shoes, gym footwear, active lifestyle shoes</p>
        <p>Ideal for: fitness enthusiasts, athletes, active individuals, gym-goers, runners, trainers, sports participants</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 text-right mb-8">
          <span>Athletic Footwear</span> / <span>Performance Trainers</span> / <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg p-8 lg:col-span-2">
            <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
              <img
                src="https://via.placeholder.com/320x192.png?text=Performance+Trainer"
                alt="Kaareen Pulse Runner - Premium Athletic Performance Footwear"
                className="w-80 h-48 rounded-lg"
              />
            </div>
            
            {/* Contextual Caption */}
            <p className="text-center text-sm text-gray-600 mt-4">
              Engineered for athletes who demand performance excellence and comfort versatility
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
              <span className="text-gray-500">{product.reviews} athlete reviews</span>
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

            {/* Performance Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">⚡</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perfect For Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Perfect For</h3>
              <div className="grid grid-cols-1 gap-2">
                {product.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-600 text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Fit</h3>
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
                    aria-label={`Select size ${size} for optimal performance fit`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors"
              aria-label="Add to Cart - Kaareen Pulse Runner Performance Trainer"
            >
              Secure Your Pair
            </button>

            {/* Product Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Engineering Excellence</h3>
              <p className="text-base text-gray-600 leading-relaxed mb-4">{product.description}</p>
            </div>

            {/* Why Athletes Choose This */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Athletes Choose This Trainer</h3>
              <div className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-purple-500 mt-1">🏆</span>
                    <p className="text-gray-600 text-sm">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Philosophy */}
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Performance Philosophy</h4>
              <p className="text-sm text-gray-700">
                Every stride matters. This trainer embodies our commitment to supporting athletes at every level, 
                from weekend warriors to dedicated fitness enthusiasts. The thoughtful engineering ensures your 
                footwear works as hard as you do, adapting to your unique movement patterns and training demands.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced JSON-LD for Contextual Understanding */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: product.name,
            description: product.description,
            category: 'Athletic Footwear',
            brand: {
              '@type': 'Brand',
              name: 'Kaareen',
              description: 'Performance athletic footwear for active lifestyles'
            },
            offers: {
              '@type': 'Offer',
              price: product.price,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              seller: {
                '@type': 'Organization',
                name: 'Kaareen Athletic'
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
                name: 'Activity Type',
                value: 'Multi-Sport Training'
              },
              {
                '@type': 'PropertyValue',
                name: 'Performance Level',
                value: 'Intermediate to Advanced'
              },
              {
                '@type': 'PropertyValue',
                name: 'Terrain Compatibility',
                value: 'Indoor/Outdoor Multi-Surface'
              },
              {
                '@type': 'PropertyValue',
                name: 'Design Focus',
                value: 'Performance and Comfort'
              }
            ],
            audience: {
              '@type': 'Audience',
              audienceType: 'Athletes, Fitness Enthusiasts, Active Individuals'
            },
            keywords: 'athletic footwear, performance trainers, fitness shoes, workout footwear, training sneakers, sport shoes'
          }),
        }}
      />
    </div>
  );
};

export default ProductPage;