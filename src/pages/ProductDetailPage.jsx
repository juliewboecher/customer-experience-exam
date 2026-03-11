import { useParams } from "react-router";
import { useEffect, useState } from "react";
import FavoriteButton from "../components/FavoriteButton";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);
  const [product, setProduct] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`${import.meta.env.BASE_URL}products.json`);
      const products = await response.json();
      const productToDisplay = products.find((p) => p.id === productId);
      console.log(productToDisplay);
      setProduct(productToDisplay);
    }
    fetchProducts();
  }, [productId]);

  useEffect(() => {
    document.title = `${product.title} - My Webshop`;
  }, [product]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  if (!product.id) return <p>Indlæser...</p>;

  const images = product.image
    ? [product.image, ...(product.images || [])]
    : product.images || [];
  const currentImage = images[selectedImageIndex];

  return (
    <article className="product-detail-page">
      <main className="product-detail-main-content">
        <section className="product-image-gallery">
          <div className="image-thumbnails">
            {images.map((image, index) => (
              <button
                key={index}
                className={`thumbnail ${index === selectedImageIndex ? "active" : ""}`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${image}`}
                  alt={`Product ${index + 1}`}
                />
              </button>
            ))}
          </div>
          <div className="main-image">
            {currentImage && (
              <img
                src={`${import.meta.env.BASE_URL}${currentImage}`}
                alt={product.title}
              />
            )}
          </div>
        </section>

        <section className="product-detail-description">
          <p className="product-detail-category">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="product-detail-price">DKK {product.price}</p>

          <footer className="product-meta">
            <p
              className={`product-stock ${product.inStock ? "in-stock" : "out-of-stock"}`}
            >
              {product.inStock ? "På lager" : "Udsolgt"}
            </p>
          </footer>

          <section className="product-info-section">
            <h2>Description</h2>
            <p>{product.description}</p>
          </section>

          <div className="product-actions">
            <button onClick={handleAddToCart} className="add-to-cart">
              Tilføj til kurv
            </button>
            <FavoriteButton productId={product.id} />
          </div>

          <p className="product-detail-color">Farve: {product.color}</p>
          <p className="product-detail-brand">Mærke: {product.brand}</p>
          <p className="product-detail-material">
            Materiale: {product.material}
          </p>
          <p className="product-detail-size">Størrelse: {product.size}</p>
          <p className="product-detail-measurements">
            Mål: {product.measurements}
          </p>
          <p className="product-detail-condition">Stand: {product.condition}</p>
        </section>
      </main>

      {showMessage && (
        <div className="toast-message">Produktet er tilføjet til kurven!</div>
      )}
    </article>
  );
}
