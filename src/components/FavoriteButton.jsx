import { useState } from "react";

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? "❤️ Favorit" : "🤍 Tilføj til favorit"}
    </button>
  );
}

export default FavoriteButton;
