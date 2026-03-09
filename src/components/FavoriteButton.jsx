import { useState, useEffect } from "react";

function FavoriteButton({ productId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favoriteIds.includes(Number(productId)));
  }, [productId]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const id = Number(productId);

  if (isFavorite) {
    favorites = favorites.filter(fav => fav !== id);
    } else {
    favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
};

  return (
    <button
      className={`favorite-button ${isFavorite ? "active" : ""}`}
      onClick={toggleFavorite}
      aria-label="Add to favorites"
    >
      <img 
      src="iconfavorit.svg" 
      alt="favorite" 
      className="favorite-icon" 
      />
    </button>
  );
}

export default FavoriteButton;
