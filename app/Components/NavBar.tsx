"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-black mr-3 rounded"></div>
          <span className="text-2xl font-bold text-gray-900 tracking-tight">StrideForm</span>
        </div>
        <div className="flex gap-8 items-center">

            
          <Link href="/">
            <button
              onClick={() => setCurrentPage('home')}
              className={`text-base font-semibold transition-colors duration-300 ${
                currentPage === 'home' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'
              } hover:text-gray-900 px-2 py-1`}
            >
              Home
            </button>
          </Link>

          
          <Link href="/product">
            <button
              onClick={() => setCurrentPage('product')}
              className={`text-base font-semibold transition-colors duration-300 ${
                currentPage === 'product' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'
              } hover:text-gray-900 px-2 py-1`}
            >
              Product 1
            </button>
          </Link>

          <Link href="/product/product2meta">
            <button
              onClick={() => setCurrentPage('product2meta')}
              className={`text-base font-semibold transition-colors duration-300 ${
                currentPage === 'product2meta' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-500'
              } hover:text-gray-900 px-2 py-1`}
            >
              Product 2
            </button>
          </Link>


    

        </div>
      </div>
    </nav>
  );
};

export default Navigation;