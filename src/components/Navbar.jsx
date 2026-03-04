import { NavLink } from "react-router";
import { useState } from "react";
import logo from "../assets/BigLogo.svg";

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Søg efter:", searchQuery);
    // Her kan du senere tilføje logik til at søge i din JSON data
  };

  return (
    <>
      <div className="announcement-bar">
        <p>Gratis fragt på ordrer over 500 kr</p>
      </div>
      <nav>
        <NavLink to="/">
          <img src={logo} alt="logo" />
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
        <NavLink to="/favorites">
          <button className="favorites-button"><img src="iconfavorit.svg" alt="Favoritter" /></button>
        </NavLink>
        <NavLink to="/account">
          <button className="account-button"><img src="iconprofile.svg" alt="Konto" /></button>
        </NavLink>
        <NavLink to="/cart">
          <button className="cart-button"><img src="iconcart.svg" alt="Kurv" /></button>
        </NavLink>
      </nav>
    </>
  );
}
