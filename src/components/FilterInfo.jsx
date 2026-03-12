import { useSearchParams } from "react-router";

export default function FilterInfo({ productCount }) {
  const [searchParams] = useSearchParams();

  const sort = searchParams.get("sort");
  const inStock = searchParams.get("inStock");
  const size = searchParams.get("size");
  const color = searchParams.get("color");
  const brand = searchParams.get("brand");
  const condition = searchParams.get("condition");
  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");

  const activeFilters = [];

  if (sort) {
    const sortLabels = {
      "pris-up": "Pris: Lavest først",
      "pris-down": "Pris: Højest først",
      titel: "Titel: A-Z",
    };
    activeFilters.push(sortLabels[sort] || sort);
  }
  if (inStock === "true") {
    activeFilters.push("På lager");
  }
  if (size) {
    activeFilters.push(`Størrelse: ${size}`);
  }
  if (color) {
    activeFilters.push(`Farve: ${color}`);
  }
  if (brand) {
    activeFilters.push(`Mærke: ${brand}`);
  }
  if (condition) {
    activeFilters.push(`Stand: ${condition}`);
  }
  if (priceMin || priceMax) {
    const min = priceMin || "0";
    const max = priceMax || "∞";
    activeFilters.push(`Pris: ${min} - ${max} DKK`);
  }

  if (activeFilters.length === 0) {
    return (
      <div className="filter-info">
        <p>
          Viser alle <strong>{productCount}</strong> produkter
        </p>
      </div>
    );
  }

  return (
    <div className="filter-info">
      <p>
        Aktive filtre: <strong>{activeFilters.join(" • ")}</strong>
      </p>
      <p>
        Viser <strong>{productCount}</strong> produkter
      </p>
    </div>
  );
}
