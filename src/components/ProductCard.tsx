import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product}) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer flex flex-col h-full"
    >
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{product.title}</h3>
        <p className="text-gray-500 text-sm mb-4">{product.category}</p>
        <div className="mt-auto">
          <span className="text-xl font-bold text-blue-600">
            {product.price.toLocaleString()} ₽
          </span>
        </div>
      </div>
    </div>
  );
};