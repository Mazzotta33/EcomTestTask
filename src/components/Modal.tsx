import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Product } from '../types';

interface ModalProps {
  product: Product;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ product, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-fade-in-up"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
        >
          <X size={20} className="text-gray-600" />
        </button>

        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{product.title}</h2>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-1">
                {product.category}
              </span>
            </div>
            <p className="text-2xl font-bold text-blue-600">
              {product.price.toLocaleString()} ₽
            </p>
          </div>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          <button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            onClick={() => alert('Товар добавлен!')}
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
};