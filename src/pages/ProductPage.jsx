import ProductGrid from "../components/ProductGrid";
import CategoryCarrusel from "../components/CategoryCarrusel";
import { useState } from "react";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  return (
    <>
      <CategoryCarrusel
        categories={[
          "Nyheder",
          "Sko",
          "Jakker",
          "Tasker",
          "Trøjer",
          "Smykker",
          "Denim",
          "Prints",
        ]}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductGrid selectedCategory={selectedCategory} />
    </>
  );
}
