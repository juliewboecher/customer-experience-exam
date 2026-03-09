import { useEffect, useState } from "react";
import Product from "../components/Product";

export default function FavoritePage() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("products.json");
      const data = await response.json();
      setAllProducts(data);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];
    const favorites = allProducts.filter((product) =>
      favoriteIds.includes(product.id),
    );
    setFavoriteProducts(favorites);
  }, [allProducts]);

  return (
    <main>
      <h1>Mine Favoritter</h1>
      {favoriteProducts.length === 0 ? (
        <p>Du har ingen favoritter endnu</p>
      ) : (
        <div className="product-grid">
          {favoriteProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
