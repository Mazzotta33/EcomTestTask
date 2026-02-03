import { MOCK_DATA } from './data';
import { ProductCard } from './components/ProductCard';

export default function App() {
  const products = MOCK_DATA;

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
            className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:outline-none"
          />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}