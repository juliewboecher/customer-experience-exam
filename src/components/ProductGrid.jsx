import Product from "./Product";
import productsData from "../products.json";

export default function ProductGrid() {
  return (
    <section className="product-grid">
      {productsData.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}
