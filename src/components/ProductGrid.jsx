import { useState, useEffect } from "react";
import Product from "./Product";

export default function ProductGrid() {
  const [productsState, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fejl:", err));
  }, []);

  return (
    <section className="product-grid">
      {productsState.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}
