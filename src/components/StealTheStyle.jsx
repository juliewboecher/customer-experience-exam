import { useNavigate } from "react-router";
import { useEffect, useState, useRef } from "react";

export default function StealTheStyle({}) {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const scrollContainerRef = useRef(null);


  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("/stealthestyle.json");
      const data = await response.json();
      setItems(data);
    }

    fetchItems();
  }, []);

  const handleClick = () => {
    navigate("/page-not-found");
  };

  if (items.length === 0) return <p>Indlæser...</p>;

  return (
    <section className="steal-the-style-section">
      <h1>Stjæl Stilen</h1>
        <div className="steal-the-style-container">
        <div className="steal-the-style-carousel" ref={scrollContainerRef}>
            {items.map((item) => (
            <div
                key={item.id}
                className="carousel-item"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
            >
                <img src={`/${item.image}`} alt={item.title} />
                <div className="carousel-overlay">
                <h3>{item.title}</h3>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
}
