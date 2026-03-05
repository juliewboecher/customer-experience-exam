import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import logo from "../assets/BigLogo.svg";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Søg efter:", searchQuery);
  };

  const categoryImages = {
    "Alle produkter": "/extra1.jpg",
    "Sko": "/blackbootsredbg.jpg",
    "Jakker": "/winterjackets1.jpg",
    "Tasker": "/baggreenpinkbg.jpg",
    "Langeærmede": "/vibe3.jpg",
    "Smykker": "/treestonesearrings.jpg",
    "Bukser": "/denimcloseup5.jpg",
    "T-shirts og toppe": "/snake1.jpg",
    "Nederdele og Shorts": "/yellowtshirt2.jpg",
    "Kjoler": "/longgreenwhite1.jpg"
  };

  const categories = [
    "Alle produkter",
    "Sko",
    "Jakker",
    "Tasker",
    "Langeærmede",
    "Smykker",
    "Bukser",
    "T-shirts og toppe",
    "Nederdele og Shorts",
    "Kjoler"
  ];

 const handleCategoryClick = (category) => {
   setShowCategories(false);
   if (category === "Alle produkter") {
     navigate("/products");
   } else {
     navigate(`/products?category=${category}`);
   }
 };

  return (
    <>
      <div className="announcement-bar">
        <p>Gratis fragt på ordrer over 500 kr</p>
      </div>
      <nav>
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <NavLink to="/products">Produkter</NavLink>

        <div
          className="categories-dropdown"
          onMouseEnter={() => setShowCategories(true)}
        >
          <NavLink to="/products">Kategorier</NavLink>
          {showCategories && (
            <div
              className="dropdown-carousel"
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  className="dropdown-category-item"
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className="dropdown-image-wrapper">
                    <img src={categoryImages[category]} alt={category} />
                  </div>
                  <p>{category}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/contact">Kontakt</NavLink>
        <NavLink to="/services">Nyheder</NavLink>

        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Søg..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Søg
          </button>
        </form>

        <section className="user-actions">
          <NavLink to="/favorites" className="favorites-button">
            <img src="/iconfavorit.svg" alt="Favoritter" />
          </NavLink>
          <NavLink to="/account" className="account-button">
            <img src="/iconprofile.svg" alt="Konto" />
          </NavLink>
          <NavLink to="/cart" className="cart-button">
            <img src="/iconcart.svg" alt="Kurv" />
          </NavLink>
        </section>
      </nav>
    </>
  );
}
