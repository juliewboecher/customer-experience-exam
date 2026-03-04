import { Link } from "react-router";

export default function Product({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="product-card-link">
      <article className="product-card">
        <img
          src={product.image}
          className="product-image"
          alt={product.title}
        />
        <section className="product-info">
          <h2 className="product-brand">{product.brand}</h2>
          <h2 className="product-title">{product.title}</h2>
          <p className="product-color">{product.color}</p>
          <p className="product-price">DKK {product.price}</p>

          <footer className="product-meta">
            {product.inStock ? (
              <p className="product-stock in-stock">På lager</p>
            ) : (
              <p className="product-stock out-of-stock">Udsolgt</p>
            )}

          </footer>
        </section>
      </article>
    </Link>
  );
}
