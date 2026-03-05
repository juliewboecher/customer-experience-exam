

export default function CategoryCarrusel({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  const categoryImages = {
    "Alle produkter": "/category-alle.jpg",
    Nyheder: "/category-nyheder.jpg",
    Sko: "/category-sko.jpg",
    Jakker: "/category-jakker.jpg",
    Tasker: "/category-tasker.jpg",
    Trøjer: "/category-trojer.jpg",
    Smykker: "/category-smykker.jpg",
    Denim: "/category-denim.jpg",
    Prints: "/category-prints.jpg",
  };

  return (
    <div className="category-carousel-container">
      <div className="category-carousel">
        <button
          className={`category-item ${selectedCategory === "Alle" ? "active" : ""}`}
          onClick={() => onSelectCategory("Alle")}
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
            onClick={() => onSelectCategory(category)}
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
