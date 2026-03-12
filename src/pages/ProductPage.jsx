import { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import CategoryCarrusel from "../components/CategoryCarrusel";
import { useSearchParams } from "react-router";
import FilterBar from "../components/FilterBar";
import FilterInfo from "../components/FilterInfo";

export default function ProductPage() {
  const [searchParams] = useSearchParams();
  const [filteredProductCount, setFilteredProductCount] = useState(0);

  const categoryFromUrl = searchParams.get("category") || "Alle";
  const searchQuery = searchParams.get("search") || "";
  const showCarousel = categoryFromUrl === "Alle" && !searchQuery;
  const sort = searchParams.get("sort") || "";
  const inStock = searchParams.get("inStock") || "all";
  const size = searchParams.get("size") || "";
  const color = searchParams.get("color") || "";
  const brand = searchParams.get("brand") || "";
  const condition = searchParams.get("condition") || "";
  const priceMin = searchParams.get("priceMin") || "";
  const priceMax = searchParams.get("priceMax") || "";

  const handleProductCountChange = (count) => {
    setFilteredProductCount(count);
  };

  return (
    <>
      <section className="category-carousel">
        {showCarousel && (
          <CategoryCarrusel
            categories={[
              "Sko",
              "Jakker",
              "Tasker",
              "Langeærmede",
              "Smykker",
              "Bukser",
              "T-shirts og toppe",
              "Nederdele og Shorts",
              "Kjoler",
            ]}
            selectedCategory={categoryFromUrl}
            onSelectCategory={() => {}}
          />
        )}
      </section>

      <FilterBar />
      <FilterInfo productCount={filteredProductCount} />

      <ProductGrid
        selectedCategory={categoryFromUrl}
        searchQuery={searchQuery}
        sort={sort}
        inStock={inStock}
        size={size}
        color={color}
        brand={brand}
        condition={condition}
        priceMin={priceMin}
        priceMax={priceMax}
        onProductCountChange={handleProductCountChange}
      />
    </>
  );
}
