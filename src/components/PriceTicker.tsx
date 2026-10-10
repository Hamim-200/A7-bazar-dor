"use client";

import { useEffect, useState } from "react";
import { formatPrice, toBengaliNumber, type Product } from "@/lib/utils";

export default function PriceTicker() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/bazardor/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Ticker error:", err));
    }, []);

    if (products.length === 0) return null;

    const unitMap: Record<string, string> = {
        kg: "কেজি",
        litre: "লিটার",
        dozen: "ডজন",
        piece: "পিস",
    };

    const tickerItems = [...products, ...products];

    return (
        <div className="bg-white border-t border-gray-100 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap py-2 flex">
                {tickerItems.map((product, index) => (
                    <span
                        key={`${index}`}
                        className="inline-flex items-center gap-2 mx-5 text-sm"
                    >
                        <span className="opacity-90">{product.image}</span>
                        <span className="font-medium text-gray-800">{product.nameBn}</span>
                        <span className="text-gray-400">
                            {formatPrice(product.today)} টাকা/{unitMap[product.unit] || product.unit}
                        </span>
                        <span
                            className={`font-medium ${product.change.dir === "up"
                                    ? "text-rose-500"
                                    : product.change.dir === "down"
                                        ? "text-emerald-600"
                                        : "text-gray-300"
                                }`}
                        >
                            {product.change.dir === "up"
                                ? `▲ ${toBengaliNumber(Math.abs(product.change.pct).toFixed(1))}%`
                                : product.change.dir === "down"
                                    ? `▼ ${toBengaliNumber(Math.abs(product.change.pct).toFixed(1))}%`
                                    : `— ${toBengaliNumber("0.0")}%`}
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
}