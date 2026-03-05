import { useNavigate } from "react-router";

export default function CategoryCarrusel({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  const navigate = useNavigate();

  const categoryImages = {
    "Alle produkter": "/extra1.jpg",
    "Sko": "/blackbootsredbg.jpg",
    "Jakker": "/winterjackets1.jpg",
    "Tasker": "/baggreenpinkbg.jpg",
    "Langeærmede": "/vibe3.jpg",
    "Smykker": "/treestonesearrings.jpg",
    "Bukser": "/denimcloseup5.jpg",
    "T-shirts og toppe": "/redsnake1.jpg",
    "Nederdele og Shorts": "/skirt1.jpg",
    "Kjoler": "/dress1.jpg"
  };

  const handleCategoryClick = (category) => {
    onSelectCategory(category);
    if (category === "Alle") {
      navigate("/products");
    } else {
      navigate(`/products?category=${category}`);
    }
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
