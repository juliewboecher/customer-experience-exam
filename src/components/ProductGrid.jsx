import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductGrid({ selectedCategory = "Alle" }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const url = "/products.json";
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    }

    fetchProducts();
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
    </section>
  );
}
