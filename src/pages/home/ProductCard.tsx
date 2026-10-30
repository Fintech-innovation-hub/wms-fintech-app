import type { Product } from "./products";

interface ProductCardProps {
  product: Product;
  addedIds: number[];
  onAddToBasket: (product: Product) => void;
}

function ProductCard({ product, addedIds, onAddToBasket }: ProductCardProps) {
  const isAdded = addedIds.includes(product.id);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col">
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
            type="button"
            onClick={() => onAddToBasket(product)}
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
}

export default ProductCard;
