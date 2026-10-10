import Hero from "@/components/Hero";
import PriceRisers from "@/components/PriceRisers";
import PriceFallers from "@/components/PriceFallers";
import AllProducts from "@/components/AllProducts";
import { type Product } from "@/lib/utils";

// Fetch on each request instead of at build time
export const dynamic = "force-dynamic";

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(
      // "https://api.api-store.workers.dev/api/bazardor/products",
      "https://openapi.programming-hero.com/api/bazardor/products",
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <Hero />
      {products.length === 0 ? (
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="text-5xl mb-3">😢</div>
          <p className="text-gray-600">
            দাম লোড করা যায়নি। কিছুক্ষণ পর আবার চেষ্টা করুন।
          </p>
        </div>
      ) : (
        <>
          <PriceRisers products={products} />
          <PriceFallers products={products} />
          <AllProducts products={products} />
        </>
      )}
    </>
  );
}