import { useEffect, useState } from "react";
import Product from "./Product";
import PromoCard from "./PromoCard";

export default function ProductGrid({
  selectedCategory = "Alle",
  searchQuery = "",
  sort = "",
  inStock = "all",
  size = "",
  color = "",
  brand = "",
  condition = "",
  priceMin = "",
  priceMax = "",
}) {
  const [products, setProducts] = useState([]);
  const [promoCards, setPromoCards] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`${import.meta.env.BASE_URL}products.json`);
      const data = await response.json();
      setProducts(data);
    }

    async function fetchPromoCards() {
      const response = await fetch(`${import.meta.env.BASE_URL}promos.json`);
      const data = await response.json();
      setPromoCards(data);
    }

    fetchProducts();
    fetchPromoCards();
  }, []);

  let filteredProducts = products;

  if (selectedCategory !== "Alle") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === selectedCategory,
    );
  }

  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter((product) =>
      Object.values(product).some((value) =>
        String(value).toLowerCase().includes(query),
      ),
    );
  }

  // FilterBar
  if (sort === "pris-up") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sort === "pris-down") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sort === "titel") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.title.localeCompare(b.title, 'da'))
  }

  if (inStock !== "all") {
    const stockValue = inStock === "true";
    filteredProducts = filteredProducts.filter((p) => p.inStock === stockValue);
  }

  if (size) {
    filteredProducts = filteredProducts.filter((p) => p.size === size);
  }

  if (color) {
    filteredProducts = filteredProducts.filter((p) => p.color === color);
  }

  if (brand) {
    filteredProducts = filteredProducts.filter((p) => p.brand === brand);
  }

  if (condition) {
    filteredProducts = filteredProducts.filter((p) => p.condition === condition);
  }

  if (priceMin || priceMax) {
    const min = priceMin ? parseInt(priceMin) : 0;
    const max = priceMax ? parseInt(priceMax) : 99999;
    filteredProducts = filteredProducts.filter((p) => p.price >= min && p.price <= max);
  }
  
// Rendering
  const renderProducts = () => {
    const result = [];
    let productCount = 0;

    filteredProducts.forEach((product) => {
      if (productCount > 0 && productCount % 6 === 0) {
        const promoIndex = Math.floor(productCount / 6 - 1) % promoCards.length;
        result.push(
          <PromoCard
            key={`promo-${productCount}`}
            promo={promoCards[promoIndex]}
          />,
        );
      }
      result.push(<Product key={product.id} product={product} />);
      productCount++;
    });

    return result;
  };

  return <section className="product-grid">{renderProducts()}</section>;
}
