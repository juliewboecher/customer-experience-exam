import { useState } from "react";
import { Link } from "react-router";

export default function Product({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/products/${product.id}`} className="product-card-link">
      <article className="product-card">
        <div className="product-image-wrapper">
          <img src={product.image} alt={product.title} />
          <button
            className={`favorite-button ${isFavorite ? "active" : ""}`}
            onClick={toggleFavorite}
            aria-label="Add to favorites"
          >
            <img src="/iconfavorit.svg" alt="favorite" />
          </button>
        </div>

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
