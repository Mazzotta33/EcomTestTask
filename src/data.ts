import type { Product } from './types';

export const MOCK_DATA: Product[] = [
  {
    id: 1,
    title: "Смарт-часы X100",
    price: 7490,
    category: "Гаджеты",
    image: "https://placehold.co/400x300?text=Watch+X100",
    description: "Водонепроницаемые, GPS, 7-дневный аккумулятор. Идеальны для спорта."
  },
  {
    id: 2,
    title: "Наушники ProSound",
    price: 3200,
    category: "Аудио",
    image: "https://placehold.co/400x300?text=Headphones",
    description: "Активное шумоподавление и глубокий бас. Время работы до 20 часов."
  },
  {
    id: 3,
    title: "Ноутбук DevBook 15",
    price: 85000,
    category: "Компьютеры",
    image: "https://placehold.co/400x300?text=Laptop",
    description: "Мощный процессор i7, 16GB RAM, 512GB SSD. Подходит для разработки."
  },
  {
    id: 4,
    title: "Смартфон Ultra 5G",
    price: 45990,
    category: "Гаджеты",
    image: "https://placehold.co/400x300?text=Smartphone",
    description: "Камера 108Мп, экран 120Гц, быстрая зарядка в комплекте."
  },
  {
    id: 5,
    title: "Клавиатура MechKey",
    price: 5500,
    category: "Периферия",
    image: "https://placehold.co/400x300?text=Keyboard",
    description: "Механические переключатели Blue, RGB подсветка, компактный формат."
  },
];