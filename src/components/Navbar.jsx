import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <div className="announcement-bar">
        <p>Gratis fragt på ordrer over 500 kr</p>
      </div>
      <nav>
        <NavLink to="/"><img src="/logo.webp" alt="Logo" /></NavLink>
        <NavLink to="/products">Produkter</NavLink>
        <NavLink to="/about">Mærker</NavLink>
        <NavLink to="/contact">Kategorier</NavLink>
        <NavLink to="/services">Nyheder</NavLink>
      </nav>
    </>
  );
}
