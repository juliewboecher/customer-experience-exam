import { useEffect, useState } from "react";
import Product from "./Product";
import PromoCard from "./PromoCard";

export default function ProductGrid({ selectedCategory = "Alle" }) {
  const [products, setProducts] = useState([]);
  const [promoCards, setPromoCards] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
    }

    async function fetchPromoCards() {
      const response = await fetch("/promos.json");
      const data = await response.json();
      setPromoCards(data);
    }

    fetchProducts();
    fetchPromoCards();
  }, []);

  const filteredProducts =
    selectedCategory === "Alle"
      ? products
      : products.filter((p) => p.category === selectedCategory);

      console.log("selectedCategory:", selectedCategory);
      console.log("filteredProducts length:", filteredProducts.length);
      console.log("total products:", products.length);

  return (
    <section className="product-grid">
      {filteredProducts.map((product, index) => {
        const promoIndex = Math.floor(index / 7) % promoCards.length || 1;
        return (
          <div key={product.id}>
            {(index + 1) % 7 === 0 ? (
              <PromoCard promo={promoCards[promoIndex]} />
            ) : (
              <Product product={product} />
            )}
          </div>
        );
      })}
    </section>
  );
}
