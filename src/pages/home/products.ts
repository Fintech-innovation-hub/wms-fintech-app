export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    "id": 1,
    "name": "MacBook Pro 16",
    "price": 2400,
    "category": "Laptops",
    "image": "https://picsum.photos/seed/1/300/200"
  },
  {
    "id": 2,
    "name": "iPhone 15 Pro",
    "price": 1100,
    "category": "Phones",
    "image": "https://picsum.photos/seed/2/300/200"
  },
  {
    "id": 3,
    "name": "AirPods Pro 2",
    "price": 250,
    "category": "Accessories",
    "image": "https://picsum.photos/seed/3/300/200"
  },
  {
    "id": 4,
    "name": "Apple Watch Series 9",
    "price": 400,
    "category": "Smartwatches",
    "image": "https://picsum.photos/seed/4/300/200"
  },
  {
    "id": 5,
    "name": "Samsung Galaxy S24 Ultra",
    "price": 1200,
    "category": "Phones",
    "image": "https://picsum.photos/seed/5/300/200"
  },
  {
    "id": 6,
    "name": "Dell XPS 15",
    "price": 1900,
    "category": "Laptops",
    "image": "https://picsum.photos/seed/6/300/200"
  },
  {
    "id": 7,
    "name": "Sony WH-1000XM5",
    "price": 350,
    "category": "Accessories",
    "image": "https://picsum.photos/seed/7/300/200"
  },
  {
    "id": 8,
    "name": "iPad Pro 12.9",
    "price": 1099,
    "category": "Tablets",
    "image": "https://picsum.photos/seed/8/300/200"
  },
  {
    "id": 9,
    "name": "Logitech MX Master 3S",
    "price": 100,
    "category": "Accessories",
    "image": "https://picsum.photos/seed/9/300/200"
  },
  {
    "id": 10,
    "name": "JioTag Air",
    "price": 30,
    "category": "Accessories",
    "image": "https://picsum.photos/seed/10/300/200"
  }
]