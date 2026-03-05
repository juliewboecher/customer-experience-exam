import { useNavigate } from "react-router";

export default function CategoryCarrusel({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  const navigate = useNavigate();

  const categoryImages = {
    "Alle produkter": "/snake3.jpg",
    Nyheder: "/extra1.jpg",
    Sko: "/blackbootsredbg.jpg",
    Jakker: "/winterjackets1.jpg",
    Tasker: "/baggreenpinkbg.jpg",
    Trøjer: "/vibe3.jpg",
    Smykker: "/treestonesearrings.jpg",
    Denim: "/denimcloseup5.jpg",
    Prints: "/redsnake1.jpg",
  };

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    navigate("/products");
  };

  return (
    <div className="category-carousel-container">
      <div className="category-carousel">
        <button
          className={`category-item ${selectedCategory === "Alle" ? "active" : ""}`}
          onClick={() => handleCategoryClick("Alle")}
        >
          <div className="category-image-wrapper">
            <img src={categoryImages["Alle produkter"]} alt="Alle produkter" />
          </div>
          <p>Alle produkter</p>
        </button>

        {categories.map((category) => (
          <button
            key={category}
            className={`category-item ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="category-image-wrapper">
              <img src={categoryImages[category]} alt={category} />
            </div>
            <p>{category}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
