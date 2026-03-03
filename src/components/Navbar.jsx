import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">billede af logo</NavLink>
      <NavLink to="/products">Produkter</NavLink>
      <NavLink to="/about">Mærker</NavLink>
      <NavLink to="/contact">Kategorier</NavLink>
      <NavLink to="/services">Nyheder</NavLink>
    </nav>
  );
}
