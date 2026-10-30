import { useEffect, useState } from "react";
import type { Product } from "../home/products";

const BASKET_KEY = "basket";

function readBasket(): Product[] {
  try {
    const savedBasket: unknown = JSON.parse(
      localStorage.getItem(BASKET_KEY) || "[]",
    );
    return Array.isArray(savedBasket) ? (savedBasket as Product[]) : [];
  } catch {
    return [];
  }
}

function BasketHistory() {
  const [basket, setBasket] = useState<Product[]>([]);

  useEffect(() => {
    setBasket(readBasket());
  }, []);

  const removeFromBasket = (indexToRemove: number) => {
    const updatedBasket = basket.filter((_, index) => index !== indexToRemove);
    localStorage.setItem(BASKET_KEY, JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
  };

  const clearBasket = () => {
    localStorage.removeItem(BASKET_KEY);
    setBasket([]);
  };

  const total = basket.reduce((sum, product) => sum + product.price, 0);

  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Savat tarixi</h1>
          <p className="mt-1 text-gray-500">Savatdagi mahsulotlar: {basket.length}</p>
        </div>
        {basket.length > 0 && (
          <button
            type="button"
            onClick={clearBasket}
            className="rounded-xl border border-red-200 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            Savatni tozalash
          </button>
        )}
      </div>

      {basket.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center text-gray-500">
          Savat hozircha bo‘sh.
        </div>
      ) : (
        <>
          <ul className="space-y-4">
            {basket.map((product, index) => (
              <li
                key={`${product.id}-${index}`}
                className="flex flex-wrap items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-20 w-24 rounded-xl object-cover"
                />
                <div className="min-w-40 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
                    {product.category}
                  </p>
                  <h2 className="mt-1 font-bold text-gray-900">{product.name}</h2>
                </div>
                <span className="font-bold text-gray-900">${product.price}</span>
                <button
                  type="button"
                  onClick={() => removeFromBasket(index)}
                  className="rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                  aria-label={`${product.name} mahsulotini savatdan olib tashlash`}
                >
                  Olib tashlash
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-end rounded-2xl bg-gray-50 p-5">
            <p className="text-lg font-bold text-gray-900">
              Jami: ${total.toLocaleString()}
            </p>
          </div>
        </>
      )}
    </section>
  );
}

export default BasketHistory;
