import { useState } from "react";
import { Link } from "react-router";
import type { Product } from "../home/products";

function Basket() {
  const [basket, setBasket] = useState<Product[]>(() =>
    JSON.parse(localStorage.getItem("basket") || "[]")
  );

  const removeFromBasket = (indexToRemove: number) => {
    const updatedBasket = basket.filter((_, index) => index !== indexToRemove);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
    setBasket(updatedBasket);
  };

  const total = basket.reduce((sum, product) => sum + product.price, 0);

  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-extrabold text-gray-900">Savatcha</h1>

      {basket.length === 0 ? (
        <div className="rounded-2xl bg-gray-50 p-8 text-center">
          <p className="mb-4 text-gray-600">Savatchangiz hozircha bo&039;sh.</p>
          <Link
            to="/"
            className="inline-block rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Mahsulotlarni ko&039;rish
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {basket.map((product, index) => (
              <article
                key={`${product.id}-${index}`}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-indigo-600">
                    {product.category}
                  </p>
                  <h2 className="text-lg font-bold text-gray-800">
                    {product.name}
                  </h2>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                    <span className="text-xl font-black text-gray-900">
                      ${product.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFromBasket(index)}
                      className="rounded-xl border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                    >
                      O'chirish
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-5">
            <span className="text-lg font-semibold text-gray-800">
              Jami ({basket.length} ta mahsulot)
            </span>
            <span className="text-2xl font-extrabold text-gray-900">
              ${total.toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Basket;
