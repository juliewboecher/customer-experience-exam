import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        console.log("Starter fetch...");
        const response = await fetch("/products.json");
        console.log("Response status:", response.status);
        console.log("Response OK:", response.ok);

        const data = await response.json();
        console.log("Data modtaget:", data);
        setProducts(data);
      } catch (error) {
        console.error("Fejl:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="product-grid">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}
