import ProductCard from "./ProductCard";
import { type Product } from "@/lib/utils";

export default function PriceRisers({ products }: { products: Product[] }) {
  const risers = products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  if (risers.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight mb-8 flex items-center gap-3">
          <span className="text-sm text-rose-500">▲</span> আজ দাম বেড়েছে
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {risers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}