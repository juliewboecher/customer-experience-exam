import { NavLink } from "react-router";
import { useState } from "react";
import logo from "../assets/BigLogo.svg";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Søg efter:", searchQuery);
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
        <NavLink to="/about">Mærker</NavLink>
        <NavLink to="/contact">Kategorier</NavLink>
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
