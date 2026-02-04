import React, { useState, useEffect } from 'react';
import type { Product } from './types';
import { MOCK_DATA } from './data';
import { ProductCard } from './components/ProductCard';
import { Modal } from './components/Modal';


export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 800));
      setProducts(MOCK_DATA);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-8 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4 sm:mb-0">
            Shop<span className="text-blue-600">App</span>
          </h1>
          
          <input
            type="text"
            placeholder="Поиск товаров..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all shadow-sm"
          />
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onOpen={setSelectedProduct} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                Товары не найдены 😔
              </div>
            )}
          </>
        )}
      </div>

      {selectedProduct && (
        <Modal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}