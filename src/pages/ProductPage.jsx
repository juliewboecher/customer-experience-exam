import ProductGrid from "../components/ProductGrid";
import CategoryCarrusel from "../components/CategoryCarrusel";
import { useSearchParams } from "react-router";

export default function ProductPage() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || "Alle";
  const showCarousel = !categoryFromUrl || categoryFromUrl === "Alle";

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
          selectedCategory={categoryFromUrl}
          onSelectCategory={() => {}}
        />
      )}
      <ProductGrid selectedCategory={categoryFromUrl} />
    </>
  );
}
