import { useEffect } from "react";
import ProductGrid from "../components/ProductGrid";

export default function ProductsPage() {
  useEffect(() => {
    document.title = "Products - My Webshop";
  }, []);

  return (
    <>
      <header>
        <h1>Products her we come</h1>
      </header>
      <main>
        <ProductGrid />
      </main>
    </>
  );
}
