import { useEffect, useState } from "react";
import Product from "./Product";
import PromoCard from "./PromoCard";

export default function ProductGrid({ selectedCategory = "Alle" }) {
  const [products, setProducts] = useState([]);
  const [promoCards, setPromoCards] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const url = "/products.json";
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }

    async function fetchPromoCards() {
      const url = "/promos.json";
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setPromoCards(data);
    }

    fetchProducts();
    fetchPromoCards();
  }, []);

  const filteredProducts =
    selectedCategory === "Alle"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="product-grid">
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {products.map((product, index) => {
         const promoIndex = Math.floor(index / 7) % promoCards.length || 1;
        return (
        <div key={product.id}>
          {(index + 1) % 7 === 0 ? (
            <PromoCard promo= {promoCards[promoIndex]} />
          ) : (
            <Product product={product} />
          )}
        </div>
      );
    })}
    </section>
  );
}
