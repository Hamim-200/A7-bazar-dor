import Link from "next/link";
import { formatPrice, toBengaliNumber, getUnitBn, type Product } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="card bg-white border border-gray-100 rounded-2xl hover:border-gray-300 hover:shadow-sm transition-all duration-300 cursor-pointer group"
    >
      <div className="card-body p-5">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl opacity-90 group-hover:scale-105 transition-transform">
            {product.image}
          </span>
          <div>
            <h3 className="font-medium text-gray-900 tracking-tight">
              {product.nameBn}
            </h3>
            <p className="text-xs text-gray-400">{getUnitBn(product.unit)}</p>
          </div>
        </div>

        <div className="flex items-end justify-between mt-auto">
          <div>
            <p className="text-xs text-gray-400">আজকের দাম</p>
            <p className="text-lg font-semibold text-gray-900">
              {formatPrice(product.today)} <span className="text-sm font-normal text-gray-400">টাকা</span>
            </p>
          </div>
          <span
            className={`badge badge-sm border-0 font-medium ${
              product.change.dir === "up"
                ? "bg-rose-50 text-rose-600"
                : product.change.dir === "down"
                ? "bg-emerald-50 text-emerald-700"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            {product.change.dir === "up"
              ? `▲ ${toBengaliNumber(Math.abs(product.change.pct).toFixed(1))}%`
              : product.change.dir === "down"
              ? `▼ ${toBengaliNumber(Math.abs(product.change.pct).toFixed(1))}%`
              : `— ${toBengaliNumber("0.0")}%`}
          </span>
        </div>
      </div>
    </Link>
  );
}