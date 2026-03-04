import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProducts() {
      const url =
        "/products.json";
      const response = await fetch(url);
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

  return (
    <article className="product-detail-page">
      <header>
        <h2>{product.title}</h2>
      </header>
      <main className="product-detail-main-content">
        <>
          <img src={`/${product.image}`} alt={product.title} />
        </>
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
            <h3>Description</h3>
            <p>{product.description}</p>
          </section>

          <button className="add-to-cart">Tilføj til kurv</button>
          <p className="product-detail-color">Farve: {product.color}</p>
          <p className="product-detail-brand">Mærke: {product.brand}</p>
          <p className="product-detail-material">Materiale: {product.material}</p>
          <p className="product-detail-size">Størrelse: {product.size}</p>
          <p className="product-detail-measurements">Mål: {product.measurements}</p>
          <p className="product-detail-condition">Stand: {product.condition}</p>
        </section>
      </main>
    </article>
  );
}
