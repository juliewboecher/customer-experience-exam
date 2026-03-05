import ProductGrid from "../components/ProductGrid";
import CategoryCarrusel from "../components/CategoryCarrusel";
import { useState } from "react";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [showCarousel, setShowCarousel] = useState(true);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowCarousel(false);
  };

  return (
    <>
      {showCarousel && (
        <CategoryCarrusel
          categories={[
            "Nyheder",
            "Sko",
            "Jakker",
            "Tasker",
            "Langeærmede",
            "Smykker",
            "Bukser",
            "Toppe",
          ]}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
      )}
      <ProductGrid selectedCategory={selectedCategory} />
    </>
  );
}
