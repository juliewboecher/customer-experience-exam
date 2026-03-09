import { useEffect, useState } from "react";
import Product from "./Product";
import PromoCard from "./PromoCard";

export default function ProductGrid({
  selectedCategory = "Alle",
  searchQuery = "",
}) {
  const [products, setProducts] = useState([]);
  const [promoCards, setPromoCards] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("products.json");
      const data = await response.json();
      setProducts(data);
    }

    async function fetchPromoCards() {
      const response = await fetch("promos.json");
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
