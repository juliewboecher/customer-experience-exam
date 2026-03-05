import ProductGrid from "../components/ProductGrid";
import CategoryCarrusel from "../components/CategoryCarrusel";
import { useSearchParams } from "react-router";

export default function ProductPage() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "Alle";
  const searchQuery = searchParams.get("search") || "";
  const showCarousel = categoryFromUrl === "Alle" && !searchQuery;

  return (
    <>
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
      <ProductGrid
        selectedCategory={categoryFromUrl}
        searchQuery={searchQuery}
      />
    </>
  );
}
