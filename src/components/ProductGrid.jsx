import { useState, useEffect } from "react";
import Product from "./Product";

export default function ProductGrid() {
  const [productsState, setProducts] = useState([]);

  useEffect(() => {
    console.log("useEffect starter");

    fetch("/products.json")
      .then((res) => {
        console.log("Response:", res.status, res.ok);
        return res.json();
      })
      .then((data) => {
        console.log("Data modtaget:", data);
        setProducts(data);
      })
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
