import { Link } from "react-router";
import { useState } from "react";
import FavoriteButton from "./FavoriteButton";

export default function Product({ product }) {
  const [isHovering, setIsHovering] = useState(false);

  const hasHoverImage = product.images && product.images.length > 0;
  const currentImage =
    isHovering && hasHoverImage ? product.images[0] : product.image;

  return (
    <Link to={`/products/${product.id}`} className="product-card-link">
      <article className="product-card">
        <div
          className="product-image-wrapper"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src={`${import.meta.env.BASE_URL}${currentImage}`}
            className={
              isHovering && hasHoverImage
                ? "product-image-hover"
                : isHovering
                  ? "product-image-hover"
                  : "product-image"
            }
            alt={product.title}
          />
          <FavoriteButton productId={product.id} />
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
