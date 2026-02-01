"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Laptop,
  Smartphone,
  Headphones,
  Shirt,
  Watch,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

/* ---------------- DATA ---------------- */

const categories = [
  {
    name: "Electronics",
    icon: <Laptop size={18} />,
    items: ["Laptop", "Mobile", "Headphones"],
  },
  {
    name: "Clothing",
    icon: <Shirt size={18} />,
    items: ["T-Shirt", "Jacket"],
  },
  {
    name: "Accessories",
    icon: <Watch size={18} />,
    items: ["Watch", "Bag"],
  },
];

const products = [
  { id: 1, name: "MacBook Pro", category: "Laptop" },
  { id: 2, name: "iPhone 15", category: "Mobile" },
  { id: 3, name: "Sony Headphones", category: "Headphones" },
  { id: 4, name: "Leather Jacket", category: "Jacket" },
  { id: 5, name: "Casual T-Shirt", category: "T-Shirt" },
  { id: 6, name: "Smart Watch", category: "Watch" },
  { id: 7, name: "Travel Bag", category: "Bag" },
];

/* ---------------- PAGE ---------------- */

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const filteredProducts = selected
    ? products.filter((p) => p.category === selected)
    : products;

  return (
    <div className="min-h-screen bg-zinc-50 p-10 dark:bg-black">
      <div className="mx-auto max-w-5xl space-y-10">

        {/* Header */}
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white">
          Product Store
        </h1>

        {/* 🔽 FILTER BAR */}
        <div className="relative w-72">
          <button
            onClick={() => setOpen(!open)}
            className="flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              {selected ?? "All Categories"}
            </span>
            <ChevronDown size={18} />
          </button>

          {open && (
            <div className="absolute z-20 mt-2 w-full rounded-xl border bg-white p-2 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
              {categories.map((cat) => (
                <div key={cat.name} className="mb-2">
                  <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    {cat.icon}
                    {cat.name}
                  </div>

                  {cat.items.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setSelected(item);
                        setOpen(false);
                      }}
                      className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              ))}

              <button
                onClick={() => {
                  setSelected(null);
                  setOpen(false);
                }}
                className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>

        {/* 🛍 PRODUCT GRID */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex h-24 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <ShoppingBag size={32} />
              </div>
              <h3 className="mt-3 font-medium text-zinc-900 dark:text-white">
                {product.name}
              </h3>
              <p className="text-sm text-zinc-500">{product.category}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}



