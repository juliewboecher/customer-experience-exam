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
    Nyheder: "/extra1.jpg",
    Sko: "/blackbootsredbg.jpg",
    Jakker: "/winterjackets1.jpg",
    Tasker: "/baggreenpinkbg.jpg",
    Langeærmede: "/vibe3.jpg",
    Smykker: "/treestonesearrings.jpg",
    Bukser: "/denimcloseup5.jpg",
    Toppe: "/redsnake1.jpg",
  };

  const categories = [
    "Nyheder",
    "Sko",
    "Jakker",
    "Tasker",
    "Langeærmede",
    "Smykker",
    "Bukser",
    "Toppe",
  ];

  const handleCategoryClick = (category) => {
    setShowCategories(false);
    navigate(`/products?category=${category}`);
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
          onMouseLeave={() => setShowCategories(false)}
        >
          <NavLink to="/products">Kategorier</NavLink>
          {showCategories && (
            <div className="dropdown-carousel">
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
