import { NavLink, useNavigate } from "react-router";
import { useState, useRef } from "react";
import logoDesktop from "../assets/BigLogo.svg";
import logoTablet from "../assets/MediumLogo.svg";
import logoMobile from "../assets/SmallLogo.svg";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const closeTimerRef = useRef(null);

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
    "Kjoler",
  ];

  const handleCategoryClick = (category) => {
    setShowCategories(false);
    window.scrollTo(0, 0);
    if (category === "Alle produkter") {
      navigate("/products");
    } else {
      navigate(`/products?category=${category}`);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleNavigate = () => {
    window.scrollTo(0, 0);
  };

  const openDropdown = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setShowCategories(true);
  };

  const scheduleCloseFromShop = () => {
    closeTimerRef.current = setTimeout(() => {
    setShowCategories(false);
    closeTimerRef.current = null;
    }, 500);
  };
    
  const closeFromDropdown = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setShowCategories(false);
  };

  return (
    <>
      <div className="announcement-bar">
        <p>Gratis fragt på ordrer over 500 kr</p>
      </div>

      <div
        className="navbar-wrapper"
        onMouseLeave={() => setShowCategories(false)}
      >
        <nav>
            <NavLink to="/" onClick={handleNavigate}>
              <img src={logoDesktop} alt="logo" className="logo-desktop" />
              <img src={logoTablet} alt="logo" className="logo-tablet" />
              <img src={logoMobile} alt="logo" className="logo-mobile" />
            </NavLink>

          <div
            className="categories-dropdown"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleCloseFromShop}
          >
            <NavLink to="/products">Shop</NavLink>
          </div>

            <NavLink to="/news">Nyheder</NavLink>
            <NavLink to="/delivery">Levering</NavLink>
            <NavLink to="/about">Om os</NavLink>

          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Søg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              <img
                src={`${import.meta.env.BASE_URL}iconloop.svg`}
                alt="Søg"
                className="search-icon"
              />
            </button>
          </form>

          <section className="user-actions">
            <NavLink to="/favorites" className="favorites-button">
              <img
                src={`${import.meta.env.BASE_URL}iconfavorit.svg`}
                alt="Favoritter"
              />
            </NavLink>
            <NavLink to="/account" className="account-button">
              <img
                src={`${import.meta.env.BASE_URL}iconprofile.svg`}
                alt="Konto"
              />
            </NavLink>
            <NavLink to="/cart" className="cart-button">
              <img src={`${import.meta.env.BASE_URL}iconcart.svg`} alt="Kurv" />
            </NavLink>
          </section>
        </nav>
        {showCategories && (
          <div
            ref={dropdownRef}
            className="dropdown-carousel"
            onMouseEnter={openDropdown}
            onMouseLeave={closeFromDropdown}
          >
            {categories.map((category) => (
              <button
                key={category}
                className="dropdown-category-item"
                onClick={() => handleCategoryClick(category)}
              >
                <p>{category}</p>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
