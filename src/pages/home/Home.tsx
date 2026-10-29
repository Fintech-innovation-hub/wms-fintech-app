import { useState } from "react";

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

const PRODUCTS: Product[] = [
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


function Home() {
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const handleAddToBasket = (product: Product) => {
    const existingCart: Product[] = JSON.parse(
      localStorage.getItem("basket") || "[]"
    );

    const updatedCart = [...existingCart, product];
    localStorage.setItem("basket", JSON.stringify(updatedCart));

    setAddedIds((prev) => [...prev, product.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== product.id));
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
        Mahsulotlar Katalogi
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product) => {
          const isAdded = addedIds.includes(product.id);

          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col ">
                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-xl font-black text-gray-900">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => handleAddToBasket(product)}
                    className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                      isAdded
                        ? "bg-emerald-600 text-white shadow-md"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
                    }`}
                  >
                    {isAdded ? "Qo'shildi ✓" : "Savatga"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;