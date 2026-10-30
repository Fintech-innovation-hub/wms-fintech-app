import { useState } from "react";
import { products, type Product } from "./products";
import ProductCard from "./ProductCard";




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
        {products.map((product) => {
          

          return (
            <ProductCard
              key={product.id}
              product={product}
              addedIds={addedIds}
              onAddToBasket={handleAddToBasket}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
