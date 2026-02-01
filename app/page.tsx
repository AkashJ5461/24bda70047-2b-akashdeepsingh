"use client";
import Image from "next/image";
import { useState } from "react";

const categories = {
  Electronics: ["Laptops", "Mobiles", "Headphones"],
  Clothing: ["T-Shirts", "Jeans", "Jackets"],
  Accessories: ["Watches", "Bags", "Shoes"],
};

export default function Home() {
  const [selectedItem, setSelectedItem] = useState("Select category");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-10 py-32 px-16 bg-white dark:bg-black">

        {/* Logo */}
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
          Categorized Dropdown Filter
        </h1>

        {/* 🔽 Dropdown Bar */}
        <div className="relative w-full max-w-sm">
          <select
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
            className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-left text-zinc-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-black dark:border-zinc-700 dark:bg-black dark:text-zinc-200"
          >
            <option disabled>Select category</option>

            {Object.entries(categories).map(([category, items]) => (
              <optgroup
                key={category}
                label={category}
                className="font-semibold text-zinc-900 dark:text-zinc-100"
              >
                {items.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {/* Selected Result */}
        {selectedItem !== "Select category" && (
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Selected: <span className="font-medium">{selectedItem}</span>
          </p>
        )}

      </main>
    </div>
  );
}
