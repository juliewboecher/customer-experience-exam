import ProductGrid from "../components/ProductGrid";
import CategoryCarrusel from "../components/CategoryCarrusel";
import { useSearchParams } from "react-router";
import FilterBar from "../components/FilterBar";

export default function ProductPage() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "Alle";
  const searchQuery = searchParams.get("search") || "";
  const showCarousel = categoryFromUrl === "Alle" && !searchQuery;
  const color = searchParams.get("color") || "";
  const size = searchParams.get("size") || "";
  const brand = searchParams.get("brand") || "";
  const prize = searchParams.get("prize") || "";
  const condition = searchParams.get("condition") || "";
  const inStock = searchParams.get("inStock") === "true";
  const sort = searchParams.get("sort") || "";

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
      <ProductGrid
        selectedCategory={categoryFromUrl}
        searchQuery={searchQuery}
        color={color}
        size={size}
        brand={brand}
        prize={prize}
        condition={condition}
        inStock={inStock}
        sort={sort}
      />
    </>
  );
}
